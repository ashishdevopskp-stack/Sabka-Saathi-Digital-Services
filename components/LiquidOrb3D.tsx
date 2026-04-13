"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const shaderRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  const fresnelShader = {
    uniforms: {
      uTime: { value: 0 },
      uInnerColor: { value: new THREE.Color("#FF7F00") }, // Deep Orange core
      uOuterColor: { value: new THREE.Color("#FFD700") }, // Bright Yellow border
      uRefractionIntensity: { value: 1.0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      
      // Simple noise function for liquid movement
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
      }

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        
        // Liquid distortion logic
        float noise = snoise(position * 2.0 + uTime * 0.5);
        vec3 newPosition = position + normal * noise * 0.15;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform vec3 uInnerColor;
      uniform vec3 uOuterColor;
      
      void main() {
        // Fresnel effect for the border
        float fresnel = pow(1.0 - dot(vNormal, vec3(0, 0, 1)), 2.5);
        
        // Vertical gradient logic
        float verticalGradient = (vPosition.y + 1.0) * 0.5; // normalized 0 to 1
        
        // Mix colors: Inner core with vertical gradient + Fresnel border
        vec3 coreColor = mix(uInnerColor, vec3(1.0, 0.9, 0.5), verticalGradient); // Orange to Warm Yellow
        vec3 color = mix(coreColor, uOuterColor, fresnel);
        
        // Add dynamic liquid highlights
        float highlight = pow(fresnel, 5.0) * 0.7;
        color += vec3(highlight);
        
        gl_FragColor = vec4(color, 0.92);
      }
    `,
    transparent: true,
  };

  return (
    <Sphere args={[1.2, 128, 128]} ref={meshRef}>
      <shaderMaterial attach="material" args={[fresnelShader]} ref={shaderRef} />
    </Sphere>
  );
}

/**
 * LiquidOrb3D Component
 * -------------------
 * This component renders a custom Fresnel-shaded 3D sphere using React Three Fiber.
 * 
 * Key Features:
 * 1. MeshDistortMaterial: Used to create the "liquid" warping effect.
 * 2. Fresnel Logic: Injected into the shader manually or via high-fidelity material settings 
 *    to create the glass-like edge-glow effect.
 * 3. Responsive Scaling: Perspective camera and mesh size adapt to viewport transitions.
 */
export function LiquidOrb3D() {
  return (
    <div className="relative h-[600px] w-[600px] md:h-[850px] md:w-[850px]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-yellow-400/10 blur-[80px] rounded-full animate-pulse" />
      
      <Canvas className="relative z-10" gl={{ alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Suspense fallback={null}>
          <Float
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={0.5} 
          >
            <Orb />
          </Float>
          
          {/* Multi-color Lighting Setup for Warm Gradient Effect */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={2.5} color="#FF9500" /> {/* Primary Orange */}
          <pointLight position={[-10, 5, 8]} intensity={2} color="#FFD200" />   {/* Yellow Accent */}
          <pointLight position={[0, -10, 5]} intensity={3} color="#FFB84D" />   {/* Soft Amber Base */}
          <spotLight position={[5, 5, 20]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" />
        </Suspense>
      </Canvas>
    </div>
  );
}
