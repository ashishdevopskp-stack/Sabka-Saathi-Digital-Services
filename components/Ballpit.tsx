"use client";

import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import React, { useEffect, useRef, useState } from 'react';
import {
  ACESFilmicToneMapping,
  AmbientLight,
  Clock,
  Color,
  InstancedMesh,
  MathUtils,
  MeshPhysicalMaterial,
  Object3D,
  PerspectiveCamera,
  Plane,
  PMREMGenerator,
  PointLight,
  Raycaster,
  Scene,
  ShaderChunk,
  SphereGeometry,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
  WebGLRendererParameters
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

gsap.registerPlugin(Observer);

interface XConfig {
  canvas?: HTMLCanvasElement;
  id?: string;
  rendererOptions?: Partial<WebGLRendererParameters>;
  size?: 'parent' | { width: number; height: number };
}

interface SizeData {
  width: number;
  height: number;
  wWidth: number;
  wHeight: number;
  ratio: number;
  pixelRatio: number;
}

class X {
  private config: XConfig;
  private resizeObserver?: ResizeObserver;
  private intersectionObserver?: IntersectionObserver;
  private resizeTimer?: number;
  private animationFrameId: number = 0;
  private clock: Clock = new Clock();
  private animationState = { elapsed: 0, delta: 0 };
  private isAnimating: boolean = false;
  private isVisible: boolean = false;
  private boundOnResize = this.onResize.bind(this);
  private boundOnVisibilityChange = this.onVisibilityChange.bind(this);

  canvas!: HTMLCanvasElement;
  camera!: PerspectiveCamera;
  cameraMinAspect?: number;
  cameraMaxAspect?: number;
  cameraFov!: number;
  maxPixelRatio?: number;
  minPixelRatio?: number;
  scene!: Scene;
  renderer!: WebGLRenderer;
  size: SizeData = {
    width: 0,
    height: 0,
    wWidth: 0,
    wHeight: 0,
    ratio: 0,
    pixelRatio: 0
  };

  render: () => void = this.defaultRender.bind(this);
  onBeforeRender: (state: { elapsed: number; delta: number }) => void = () => { };
  onAfterRender: (state: { elapsed: number; delta: number }) => void = () => { };
  onAfterResize: (size: SizeData) => void = () => { };
  isDisposed: boolean = false;

  constructor(config: XConfig) {
    this.config = { ...config };
    this.initCamera();
    this.initScene();
    this.initRenderer();
    this.resize();
    this.initObservers();
  }

  private initCamera() {
    this.camera = new PerspectiveCamera();
    this.cameraFov = this.camera.fov;
  }

  private initScene() {
    this.scene = new Scene();
  }

  private initRenderer() {
    if (this.config.canvas) {
      this.canvas = this.config.canvas;
    } else if (this.config.id) {
      const elem = document.getElementById(this.config.id);
      if (elem instanceof HTMLCanvasElement) {
        this.canvas = elem;
      } else {
        console.error('Three: Missing canvas or id parameter');
      }
    } else {
      console.error('Three: Missing canvas or id parameter');
    }
    this.canvas.style.display = 'block';
    const rendererOptions: WebGLRendererParameters = {
      canvas: this.canvas,
      powerPreference: 'high-performance',
      ...(this.config.rendererOptions ?? {})
    };
    this.renderer = new WebGLRenderer(rendererOptions);
    this.renderer.outputColorSpace = SRGBColorSpace;
  }

  private initObservers() {
    if (!(this.config.size instanceof Object)) {
      window.addEventListener('resize', this.boundOnResize);
      if (this.config.size === 'parent' && this.canvas.parentNode) {
        this.resizeObserver = new ResizeObserver(this.boundOnResize);
        this.resizeObserver.observe(this.canvas.parentNode as Element);
      }
    }
    this.intersectionObserver = new IntersectionObserver(this.onIntersection.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0
    });
    this.intersectionObserver.observe(this.canvas);
    document.addEventListener('visibilitychange', this.boundOnVisibilityChange);
  }

  private onResize() {
    if (this.resizeTimer) clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this.resize.bind(this), 100);
  }

  resize() {
    let w: number, h: number;
    if (this.config.size instanceof Object) {
      w = this.config.size.width;
      h = this.config.size.height;
    } else if (this.config.size === 'parent' && this.canvas.parentNode) {
      w = (this.canvas.parentNode as HTMLElement).offsetWidth;
      h = (this.canvas.parentNode as HTMLElement).offsetHeight;
    } else {
      w = window.innerWidth;
      h = window.innerHeight;
    }
    this.size.width = w;
    this.size.height = h;
    this.size.ratio = w / h;
    this.updateCamera();
    this.updateRenderer();
    this.onAfterResize(this.size);
  }

  private updateCamera() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
        this.adjustFov(this.cameraMinAspect);
      } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
        this.adjustFov(this.cameraMaxAspect);
      } else {
        this.camera.fov = this.cameraFov;
      }
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }

  private adjustFov(aspect: number) {
    const tanFov = Math.tan(MathUtils.degToRad(this.cameraFov / 2));
    const newTan = tanFov / (this.camera.aspect / aspect);
    this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(newTan));
  }

  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const fovRad = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    }
  }

  private updateRenderer() {
    this.renderer.setSize(this.size.width, this.size.height);
    let pr = window.devicePixelRatio;
    if (this.maxPixelRatio && pr > this.maxPixelRatio) {
      pr = this.maxPixelRatio;
    } else if (this.minPixelRatio && pr < this.minPixelRatio) {
      pr = this.minPixelRatio;
    }
    this.renderer.setPixelRatio(pr);
    this.size.pixelRatio = pr;
  }

  private onIntersection(entries: IntersectionObserverEntry[]) {
    this.isAnimating = entries[0].isIntersecting;
    this.isAnimating ? this.startAnimation() : this.stopAnimation();
  }

  private onVisibilityChange() {
    if (this.isAnimating) {
      document.hidden ? this.stopAnimation() : this.startAnimation();
    }
  }

  private startAnimation() {
    if (this.isVisible) return;
    const animateFrame = () => {
      this.animationFrameId = requestAnimationFrame(animateFrame);
      this.animationState.delta = this.clock.getDelta();
      this.animationState.elapsed += this.animationState.delta;
      this.onBeforeRender(this.animationState);
      this.render();
      this.onAfterRender(this.animationState);
    };
    this.isVisible = true;
    this.clock.start();
    animateFrame();
  }

  private stopAnimation() {
    if (this.isVisible) {
      cancelAnimationFrame(this.animationFrameId);
      this.isVisible = false;
      this.clock.stop();
    }
  }

  private defaultRender() {
    this.renderer.render(this.scene, this.camera);
  }

  clear() {
    this.scene.traverse(obj => {
      if ((obj as any).isMesh && typeof (obj as any).material === 'object' && (obj as any).material !== null) {
        Object.keys((obj as any).material).forEach(key => {
          const matProp = (obj as any).material[key];
          if (matProp && typeof matProp === 'object' && typeof matProp.dispose === 'function') {
            matProp.dispose();
          }
        });
        (obj as any).material.dispose();
        (obj as any).geometry.dispose();
      }
    });
    this.scene.clear();
  }

  dispose() {
    this.onResizeCleanup();
    this.stopAnimation();
    this.clear();
    this.renderer.dispose();
    this.isDisposed = true;
  }

  private onResizeCleanup() {
    window.removeEventListener('resize', this.boundOnResize);
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    document.removeEventListener('visibilitychange', this.boundOnVisibilityChange);
  }
}

interface WConfig {
  count: number;
  maxX: number;
  maxY: number;
  maxZ: number;
  maxSize: number;
  minSize: number;
  size0: number;
  gravity: number;
  friction: number;
  wallBounce: number;
  maxVelocity: number;
  controlSphere0?: boolean;
  followCursor?: boolean;
}

class W {
  config: WConfig;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center: Vector3 = new Vector3();
  hasCursor: boolean = false;

  constructor(config: WConfig) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.center = new Vector3();
    this.initializePositions();
    this.setSizes();
  }

  private initializePositions() {
    const { config, positionData } = this;
    for (let i = 0; i < config.count; i++) {
      const idx = 3 * i;
      positionData[idx] = MathUtils.randFloatSpread(2 * config.maxX);
      positionData[idx + 1] = MathUtils.randFloatSpread(2 * config.maxY);
      positionData[idx + 2] = MathUtils.randFloatSpread(2 * config.maxZ);
    }
  }

  setSizes() {
    const { config, sizeData } = this;
    for (let i = 0; i < config.count; i++) {
      sizeData[i] = MathUtils.randFloat(config.minSize, config.maxSize);
    }
  }

  update(deltaInfo: { delta: number }) {
    const { config, center, positionData, sizeData, velocityData, hasCursor } = this;

    for (let idx = 0; idx < config.count; idx++) {
      const base = 3 * idx;
      const pos = new Vector3().fromArray(positionData, base);
      const vel = new Vector3().fromArray(velocityData, base);

      // Apply gravity
      vel.y -= deltaInfo.delta * config.gravity * sizeData[idx];

      // Apply cursor force if cursor is active and within proximity
      if (hasCursor) {
        const diff = new Vector3().copy(pos).sub(center);
        const dist = diff.length();
        const interactionRadius = 4.5; // Proximity detection (~110px)
        if (dist < interactionRadius) {
          // Smooth linear decay force
          const forceStrength = (1.0 - dist / interactionRadius) * 0.16;
          const force = diff.normalize().multiplyScalar(forceStrength);
          vel.add(force);
          // Apply extra damping near cursor to prevent oscillation
          vel.multiplyScalar(0.9);
        }
      }

      // Apply friction
      vel.multiplyScalar(config.friction);

      // Zero out micro-movements to prevent rest-state jitter
      if (vel.lengthSq() < 0.0005) {
        vel.set(0, 0, 0);
      }

      vel.clampLength(0, config.maxVelocity);
      pos.add(vel);
      pos.toArray(positionData, base);
      vel.toArray(velocityData, base);
    }

    // Resolve collisions between spheres
    for (let idx = 0; idx < config.count; idx++) {
      const base = 3 * idx;
      const pos = new Vector3().fromArray(positionData, base);
      const vel = new Vector3().fromArray(velocityData, base);
      const radius = sizeData[idx];

      for (let jdx = idx + 1; jdx < config.count; jdx++) {
        const otherBase = 3 * jdx;
        const otherPos = new Vector3().fromArray(positionData, otherBase);
        const otherVel = new Vector3().fromArray(velocityData, otherBase);
        const diff = new Vector3().copy(otherPos).sub(pos);
        const dist = diff.length();
        const sumRadius = radius + sizeData[jdx];

        if (dist < sumRadius) {
          const overlap = sumRadius - dist;
          const correction = diff.normalize().multiplyScalar(0.5 * overlap);

          // Resolve overlap immediately in position
          pos.sub(correction);
          otherPos.add(correction);

          pos.toArray(positionData, base);
          otherPos.toArray(positionData, otherBase);

          // Only transfer/adjust velocities if they are moving towards each other
          const relVel = new Vector3().copy(otherVel).sub(vel);
          if (relVel.dot(diff) < 0) {
            const collisionImpulse = Math.max(relVel.length(), 0.05);
            const velCorrection = correction.clone().multiplyScalar(collisionImpulse * 0.5);
            vel.sub(velCorrection);
            otherVel.add(correction.clone().multiplyScalar(collisionImpulse * 0.5));

            vel.toArray(velocityData, base);
            otherVel.toArray(velocityData, otherBase);
          }
        }
      }

      // Boundary checks
      if (Math.abs(pos.x) + radius > config.maxX) {
        pos.x = Math.sign(pos.x) * (config.maxX - radius);
        vel.x = -vel.x * config.wallBounce;
      }
      if (config.gravity === 0) {
        if (Math.abs(pos.y) + radius > config.maxY) {
          pos.y = Math.sign(pos.y) * (config.maxY - radius);
          vel.y = -vel.y * config.wallBounce;
        }
      } else if (pos.y - radius < -config.maxY) {
        pos.y = -config.maxY + radius;
        vel.y = -vel.y * config.wallBounce;
      }
      const maxBoundary = Math.max(config.maxZ, config.maxSize);
      if (Math.abs(pos.z) + radius > maxBoundary) {
        pos.z = Math.sign(pos.z) * (config.maxZ - radius);
        vel.z = -vel.z * config.wallBounce;
      }

      pos.toArray(positionData, base);
      vel.toArray(velocityData, base);
    }
  }
}

class Y extends MeshPhysicalMaterial {
  uniforms: { [key: string]: { value: any } } = {
    thicknessDistortion: { value: 0.1 },
    thicknessAmbient: { value: 0 },
    thicknessAttenuation: { value: 0.1 },
    thicknessPower: { value: 2 },
    thicknessScale: { value: 10 }
  };
  declare defines: { [key: string]: any };
  private onBeforeCompile2?: (shader: any) => void;

  constructor(params: any) {
    super(params);
    this.defines = { ...this.defines, USE_UV: '' };
    this.onBeforeCompile = shader => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader =
        `
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
        ` + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        `
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor.rgb;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
        `
      );
      const lightsChunk = ShaderChunk.lights_fragment_begin.replaceAll(
        'RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );',
        `
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `
      );
      shader.fragmentShader = shader.fragmentShader.replace('#include <lights_fragment_begin>', lightsChunk);
      if (this.onBeforeCompile2) this.onBeforeCompile2(shader);
    };
  }
}

const XConfigDefaults = {
  count: 120,
  colors: [0xff7a00, 0xffb347, 0xffffff, 0xffe0b2],
  ambientColor: 0xffffff,
  ambientIntensity: 1.5,
  lightIntensity: 350,
  materialParams: {
    metalness: 0.1,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transmission: 0.6,
    thickness: 1.5
  },
  minSize: 0.6,
  maxSize: 1.4,
  size0: 2.2,
  gravity: 0.6,
  friction: 0.8,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true
};

const U = new Object3D();

interface PointerData {
  position: Vector2;
  nPosition: Vector2;
  hover: boolean;
  touching: boolean;
  onEnter: (data: PointerData) => void;
  onMove: (data: PointerData) => void;
  onClick: (data: PointerData) => void;
  onLeave: (data: PointerData) => void;
  dispose?: () => void;
  domElement: HTMLElement;
}

const pointerMap = new Map<HTMLElement, PointerData>();

function updatePointerData(data: PointerData, rect: DOMRect, clientX: number, clientY: number) {
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  data.position.set(x, y);
  data.nPosition.set((x / rect.width) * 2 - 1, (-y / rect.height) * 2 + 1);
}

function createPointerData(options: Partial<PointerData> & { domElement: HTMLElement }): PointerData {
  const { domElement, ...rest } = options;
  const defaultData: PointerData = {
    position: new Vector2(),
    nPosition: new Vector2(),
    hover: false,
    touching: false,
    onEnter: () => { },
    onMove: () => { },
    onClick: () => { },
    onLeave: () => { },
    domElement,
    ...rest
  };

  const handlePointerMove = (e: PointerEvent) => {
    const rect = domElement.getBoundingClientRect();
    updatePointerData(defaultData, rect, e.clientX, e.clientY);
    if (!defaultData.hover) {
      defaultData.hover = true;
      defaultData.onEnter(defaultData);
    }
    defaultData.onMove(defaultData);
  };

  const handlePointerLeave = () => {
    if (defaultData.hover) {
      defaultData.hover = false;
      defaultData.onLeave(defaultData);
    }
  };

  const handlePointerClick = (e: PointerEvent) => {
    const rect = domElement.getBoundingClientRect();
    updatePointerData(defaultData, rect, e.clientX, e.clientY);
    defaultData.onClick(defaultData);
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      const rect = domElement.getBoundingClientRect();
      defaultData.touching = true;
      updatePointerData(defaultData, rect, e.touches[0].clientX, e.touches[0].clientY);
      if (!defaultData.hover) {
        defaultData.hover = true;
        defaultData.onEnter(defaultData);
      }
      defaultData.onMove(defaultData);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      const rect = domElement.getBoundingClientRect();
      updatePointerData(defaultData, rect, e.touches[0].clientX, e.touches[0].clientY);
      defaultData.onMove(defaultData);
    }
  };

  const handleTouchEnd = () => {
    if (defaultData.touching) {
      defaultData.touching = false;
      if (defaultData.hover) {
        defaultData.hover = false;
        defaultData.onLeave(defaultData);
      }
    }
  };

  domElement.addEventListener('pointermove', handlePointerMove as EventListener);
  domElement.addEventListener('pointerleave', handlePointerLeave as EventListener);
  domElement.addEventListener('click', handlePointerClick as EventListener);
  domElement.addEventListener('touchstart', handleTouchStart as EventListener, { passive: false });
  domElement.addEventListener('touchmove', handleTouchMove as EventListener, { passive: false });
  domElement.addEventListener('touchend', handleTouchEnd as EventListener, { passive: false });
  domElement.addEventListener('touchcancel', handleTouchEnd as EventListener, { passive: false });

  pointerMap.set(domElement, defaultData);

  defaultData.dispose = () => {
    domElement.removeEventListener('pointermove', handlePointerMove as EventListener);
    domElement.removeEventListener('pointerleave', handlePointerLeave as EventListener);
    domElement.removeEventListener('click', handlePointerClick as EventListener);
    domElement.removeEventListener('touchstart', handleTouchStart as EventListener);
    domElement.removeEventListener('touchmove', handleTouchMove as EventListener);
    domElement.removeEventListener('touchend', handleTouchEnd as EventListener);
    domElement.removeEventListener('touchcancel', handleTouchEnd as EventListener);
    pointerMap.delete(domElement);
  };

  return defaultData;
}

class Z extends InstancedMesh {
  config: typeof XConfigDefaults;
  physics: W;
  ambientLight: AmbientLight | undefined;
  light: PointLight | undefined;

  constructor(renderer: WebGLRenderer, params: Partial<typeof XConfigDefaults> = {}) {
    const config = { ...XConfigDefaults, ...params };
    const roomEnv = new RoomEnvironment();
    const pmrem = new PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(roomEnv).texture;
    const geometry = new SphereGeometry();
    const material = new Y({ envMap: envTexture, ...config.materialParams });
    material.envMapRotation.x = -Math.PI / 2;
    super(geometry, material, config.count);
    this.config = config;
    this.physics = new W(config);
    this.setupLights();
    this.setColors(config.colors);
  }

  private setupLights() {
    this.ambientLight = new AmbientLight(this.config.ambientColor, this.config.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new PointLight(this.config.colors[0], this.config.lightIntensity);
    this.add(this.light);
  }

  setColors(colors: number[]) {
    if (Array.isArray(colors) && colors.length > 1) {
      const colorUtils = (function (colorsArr: number[]) {
        let baseColors: number[] = colorsArr;
        let colorObjects: Color[] = [];
        baseColors.forEach(col => {
          colorObjects.push(new Color(col));
        });
        return {
          getColorAt: (ratio: number, out: Color = new Color()) => {
            const clamped = Math.max(0, Math.min(1, ratio));
            const scaled = clamped * (baseColors.length - 1);
            const idx = Math.floor(scaled);
            const start = colorObjects[idx];
            if (idx >= baseColors.length - 1) return start.clone();
            const alpha = scaled - idx;
            const end = colorObjects[idx + 1];
            out.r = start.r + alpha * (end.r - start.r);
            out.g = start.g + alpha * (end.g - start.g);
            out.b = start.b + alpha * (end.b - start.b);
            return out;
          }
        };
      })(colors);
      for (let idx = 0; idx < this.count; idx++) {
        const sphereColor = colorUtils.getColorAt(idx / this.count);

        // Change oversized white balloons to deep charcoal (0x1E293B) to balance contrast
        const size = this.physics.sizeData[idx];
        const isOversized = size > 1.1;
        const isWhiteish = sphereColor.r > 0.85 && sphereColor.g > 0.85 && sphereColor.b > 0.85;

        if (isOversized && isWhiteish) {
          sphereColor.setHex(0x1E293B);
        }

        this.setColorAt(idx, sphereColor);
        if (idx === 0) {
          this.light!.color.copy(sphereColor);
        }
      }

      if (!this.instanceColor) return;
      this.instanceColor.needsUpdate = true;
    }
  }

  update(deltaInfo: { delta: number }) {
    this.physics.update(deltaInfo);
    for (let idx = 0; idx < this.count; idx++) {
      U.position.fromArray(this.physics.positionData, 3 * idx);
      U.scale.setScalar(this.physics.sizeData[idx]);
      U.updateMatrix();
      this.setMatrixAt(idx, U.matrix);
    }
    if (this.physics.hasCursor) {
      this.light!.position.copy(this.physics.center);
    } else {
      this.light!.position.set(0, 0, 5);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

interface CreateBallpitReturn {
  three: X;
  spheres: Z;
  setCount: (count: number) => void;
  togglePause: () => void;
  dispose: () => void;
}

function createBallpit(canvas: HTMLCanvasElement, config: any = {}): CreateBallpitReturn {
  const threeInstance = new X({
    canvas,
    size: 'parent',
    rendererOptions: { antialias: true, alpha: true }
  });
  let spheres: Z;
  threeInstance.renderer.toneMapping = ACESFilmicToneMapping;
  threeInstance.camera.position.set(0, 0, 20);
  threeInstance.camera.lookAt(0, 0, 0);
  threeInstance.cameraMaxAspect = 1.5;
  threeInstance.resize();

  const raycaster = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const intersectionPoint = new Vector3();
  let isPaused = false;

  canvas.style.touchAction = 'none';
  canvas.style.userSelect = 'none';
  (canvas.style as any).webkitUserSelect = 'none';

  const initialize = (cfg: any) => {
    if (spheres) {
      threeInstance.clear();
      threeInstance.scene.remove(spheres);
    }
    spheres = new Z(threeInstance.renderer, cfg);
    threeInstance.scene.add(spheres);
  };

  initialize(config);

  const pointerData = createPointerData({
    domElement: canvas,
    onMove() {
      raycaster.setFromCamera(pointerData.nPosition, threeInstance.camera);
      threeInstance.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      spheres.physics.center.copy(intersectionPoint);
      spheres.physics.hasCursor = true;
    },
    onLeave() {
      spheres.physics.hasCursor = false;
    }
  });

  threeInstance.onBeforeRender = deltaInfo => {
    if (!isPaused && spheres) spheres.update(deltaInfo);
  };
  threeInstance.onAfterResize = size => {
    if (spheres) {
      spheres.config.maxX = size.wWidth / 2;
      spheres.config.maxY = size.wHeight / 2;
    }
  };
  return {
    three: threeInstance,
    get spheres() {
      return spheres;
    },
    setCount(count: number) {
      initialize({ ...spheres.config, count });
    },
    togglePause() {
      isPaused = !isPaused;
    },
    dispose() {
      pointerData.dispose?.();
      threeInstance.dispose();
    }
  };
}

interface BallpitProps {
  className?: string;
  followCursor?: boolean;
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  colors?: number[];
  [key: string]: any;
}

const Ballpit: React.FC<BallpitProps> = ({
  className = '',
  followCursor = true,
  count = 120,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spheresInstanceRef = useRef<CreateBallpitReturn | null>(null);
  const [ballCount, setBallCount] = useState(count);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBallCount(Math.min(45, count));
      } else {
        setBallCount(count);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    spheresInstanceRef.current = createBallpit(canvas, {
      followCursor,
      count: ballCount,
      ...props
    });

    return () => {
      if (spheresInstanceRef.current) {
        spheresInstanceRef.current.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ballCount, followCursor]);

  return <canvas className={`${className} w-full h-full`} ref={canvasRef} />;
};

export default Ballpit;
