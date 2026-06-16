"use client";

import React, { useEffect, useRef, useState } from "react";

// Inline SVG Logos for the 24 Technologies
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23 23 20.46" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-sky-400 fill-none stroke-current" strokeWidth="1.2">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextjsIcon = () => (
  <svg viewBox="0 0 180 180" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-slate-800 fill-current">
    <circle cx="90" cy="90" r="90" fill="currentColor" />
    <path d="M149.5 157.5L69.1 54H54v72h15.2V71.9l70.7 90.7c3.3-2.9 6.3-6 9.6-9.1zM110.8 54h15.2v72h-15.2z" fill="#fff" />
  </svg>
);

const NodejsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-emerald-600 fill-current">
    <path d="M12 2L4.5 6.3v9.4L12 22l7.5-4.3v-9.4L12 2zm-1.1 14.8l-3.3-1.9v-3.8l3.3 1.9v3.8zm0-5.7L7.6 9.2l3.3-1.9 3.3 1.9-3.3 1.9zm4.5 3.8l-3.3 1.9v-3.8l3.3-1.9v-3.8z" />
  </svg>
);

const ExpressjsIcon = () => (
  <svg viewBox="0 0 64 64" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-slate-700 fill-current">
    <rect width="64" height="64" rx="16" fill="currentColor" className="opacity-15" />
    <text x="32" y="44" textAnchor="middle" className="font-sans font-extrabold" fontSize="32" fill="currentColor">ex</text>
  </svg>
);

const MongodbIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-emerald-500 fill-current">
    <path d="M12 1.5C12 1.5 6.5 7.5 6.5 13.5C6.5 17.5 9 20 12 22.5C15 20 17.5 17.5 17.5 13.5C17.5 7.5 12 1.5 12 1.5ZM12 19.5C10.5 18 8.5 15.5 8.5 13.5C8.5 9.5 12 5 12 5C12 5 15.5 9.5 15.5 13.5C15.5 15.5 13.5 18 12 19.5Z" />
  </svg>
);

const MysqlIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-sky-600 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-amber-500 fill-current">
    <path d="M3.89 15.75L9.9 2.05c.18-.4.76-.4.94 0l1.7 3.88 4.7-4.47c.33-.3.86-.17.96.25l2.9 13.91c.07.36-.08.73-.38.92L12.5 22.1c-.3.2-.7.2-1 0L3.89 17.1c-.34-.23-.49-.66-.37-1.05l.37-.3z" />
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-emerald-500 fill-current">
    <path d="M21.36 11.23l-8.62 9.58c-.5.56-1.44.2-1.44-.55v-6.38H4.64c-.7 0-1.12-.76-.78-1.37l8.62-9.58c.5-.56 1.44-.2 1.44.55v6.38h6.66c.7 0 1.12.76.78 1.37z" />
  </svg>
);

const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-sky-500 fill-current">
    <path d="M13.55 0L1.7 11.85l3.55 3.55 15.4-15.4H13.55zM20.65 11.85L13.55 4.75L7.05 11.25l3.55 3.55 10.05-10.05v.1zM20.65 23.7L13.55 16.6l-3.55 3.55 3.55 3.55h7.1z" />
  </svg>
);

const ReactNativeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-violet-500 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
    <circle cx="12" cy="10" r="0.8" fill="currentColor" />
    <ellipse cx="12" cy="10" rx="4" ry="1.5" strokeWidth="0.8" transform="rotate(30 12 10)" />
    <ellipse cx="12" cy="10" rx="4" ry="1.5" strokeWidth="0.8" transform="rotate(90 12 10)" />
    <ellipse cx="12" cy="10" rx="4" ry="1.5" strokeWidth="0.8" transform="rotate(150 12 10)" />
  </svg>
);

const AwsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-orange-500 fill-current">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
    <path d="M6 21.5c3 2 9 2 12 0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 76 65" className="w-[33px] h-[28px] md:w-[44px] md:h-[38px] flex-shrink-0 text-slate-900 fill-current">
    <path d="M37.5 0L75 65H0L37.5 0Z" />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-sky-600 fill-current">
    <path d="M13.96 10.08h-2.43V7.65h2.43v2.43zm0 2.91h-2.43v-2.43h2.43v2.43zm-2.91-2.91H8.62V7.65h2.43v2.43zm0 2.91H8.62v-2.43h2.43v2.43zm-2.91 0H5.71v-2.43h2.42v2.43zm-2.91 0H2.8v-2.43h2.42v2.43zm8.73-5.82h-2.43V4.74h2.43v2.43zm2.91 2.91h-2.43V7.65h2.43v2.43zm0 2.91h-2.43v-2.43h2.43v2.43zm2.91 0h-2.43v-2.43h2.43v2.43zm4.59-1.94c-.45-.3-.99-.45-1.55-.45h-1.1c-.26-.95-1.12-1.65-2.16-1.65v1.2c.57 0 1.05.39 1.18.91l.07.29h2.01c.21 0 .42.06.6.17l.03.02c.3.21.36.63.15.93-.05.07-.11.13-.18.17l-.87.58c.24.47.36.99.36 1.52 0 3.39-3.23 6.15-7.2 6.15-.36 0-.72-.03-1.07-.08-.43 2.15-2.33 3.78-4.63 3.78-1.57 0-2.95-.76-3.82-1.94-.85-.14-1.64-.49-2.31-1.01l-.22-.17.74-.74.15.11c.52.39 1.13.62 1.77.66.07-.86.54-1.6 1.22-2.04v-.07c0-2.91 2.37-5.28 5.28-5.28h.95V10.2c.48-.38 1.11-.6 1.8-.6h.05c.02-.95.8-1.7 1.75-1.7h.05c.02-.95.8-1.7 1.75-1.7H18.3z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-slate-800 fill-current">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.6 9.6 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0022 12.02C22 6.48 17.52 2 12 2z" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-sky-400 fill-current">
    <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.57.89 2.29 1.62C13.67 10.62 15.03 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.57-.89-2.29-1.62C16.34 6.18 14.98 4.8 12 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.57.89 2.29 1.62 1.18 1.2 2.54 2.58 5.51 2.58 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.57-.89-2.29-1.62C10.34 13.38 8.98 12 6 12z" />
  </svg>
);

const TypescriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-blue-600 fill-current">
    <path d="M22.3 0H1.7C.76 0 0 .76 0 1.7v20.6C0 23.24.76 24 1.7 24h20.6c.94 0 1.7-.76 1.7-1.7V1.7c0-.94-.76-1.7-1.7-1.7zM11.3 16.7c0 1.4-.4 2.5-1.2 3.2-.8.7-2 1-3.6 1-1.3 0-2.3-.3-3.1-.8l.8-1.9c.7.4 1.4.6 2.1.6.9 0 1.5-.2 1.9-.6.4-.4.6-.9.6-1.6V8.5h2.5v8.2zm9 4c-.7.5-1.7.8-2.9.8-1.6 0-2.8-.5-3.6-1.5-.8-1-1.2-2.4-1.2-4.2 0-1.9.4-3.4 1.3-4.4.9-1 2.1-1.5 3.7-1.5 1.1 0 2 .2 2.6.5l-.6 1.9c-.5-.2-1.1-.4-1.8-.4-1 0-1.7.3-2.2.9-.5.6-.7 1.6-.7 2.9 0 1.3.2 2.3.7 2.9.5.6 1.1.9 2.1.9.7 0 1.3-.2 1.8-.4l.6 1.5z" />
  </svg>
);

const JavascriptIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-yellow-400 fill-current">
    <rect width="24" height="24" rx="2" />
    <text x="22" y="20.5" textAnchor="end" className="font-sans font-black" fontSize="11" fill="#18181b">JS</text>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 120 180" className="w-[20px] h-[30px] md:w-[28px] md:h-[42px] flex-shrink-0">
    <path d="M30 0a30 30 0 0 0-30 30 30 30 0 0 0 30 30h30V30a30 30 0 0 0-30-30z" fill="#F24E1E" />
    <path d="M90 0a30 30 0 0 0-30 30 30 30 0 0 0 30 30 30 30 0 0 0 30-30 30 30 0 0 0-30-30z" fill="#FF7262" />
    <path d="M30 60a30 30 0 0 0-30 30 30 30 0 0 0 30 30h30V90a30 30 0 0 0-30-30z" fill="#A259FF" />
    <path d="M90 60a30 30 0 0 0-30 30 30 30 0 0 0 30 30 30 30 0 0 0 30-30V90a30 30 0 0 0-30-30z" fill="#1ABC9C" />
    <path d="M30 120a30 30 0 0 0-30 30 30 30 0 0 0 30 30 30 30 0 0 0 30-30v-30H30z" fill="#18A0FB" />
  </svg>
);

// New DevOps, AI/ML, Blockchain, and backend/apps additions:
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0">
    <path d="M12.12 1.05c-1.58 0-2.97.13-3.66.42-1.74.72-1.77 2.25-1.77 3.52v2.17h5.68V8.1h-5.68c-2.48 0-4.22 1.4-4.22 4.14 0 2.76 1.42 4.14 3.9 4.14h1.9v-2.52c0-2.3 1.83-4.14 4.12-4.14h5.68V7.15c0-2.75-1.74-4.14-4.22-4.14l-1.71-.03c-.6-.02-1.2-.02-1.74 0zm3.84 2.1c.42 0 .75.33.75.75s-.33.75-.75.75-.75-.33-.75-.75.33-.75.75-.75z" fill="#3776AB" />
    <path d="M11.88 22.95c1.58 0 2.97-.13 3.66-.42 1.74-.72 1.77-2.25 1.77-3.52v-2.17h-5.68v-.93h5.68c2.48 0 4.22-1.4 4.22-4.14 0-2.76-1.42-4.14-3.9-4.14h-1.9v2.52c0 2.3-1.83 4.14-4.12 4.14H6.04v2.58c0 2.75 1.74 4.14 4.22 4.14l1.71.03c.6.02 1.2.02 1.74 0zM8.04 19.8c-.42 0-.75-.33-.75-.75s.33-.75.75-.75.75.33.75.75-.33.75-.75.75z" fill="#FFE052" />
  </svg>
);

const TensorflowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0">
    <path d="M11.9 2.5L3.6 7.3v9.5l8.3 4.8V2.5z" fill="#FF6F00" />
    <path d="M12.1 2.5v19.1l8.3-4.8V7.3L12.1 2.5z" fill="#FFA000" />
    <path d="M12 7.7l-4.5 2.6V15.5l4.5-2.6V7.7z" fill="#FFF" opacity="0.85" />
  </svg>
);

const EthereumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0">
    <path d="M12 1.75l-5.75 9.5L12 14.5l5.75-3.25L12 1.75z" fill="#8C8C8C" opacity="0.8" />
    <path d="M12 1.75v12.75l5.75-3.25L12 1.75z" fill="#3C3C3D" />
    <path d="M12 15.75L6.25 12.5 12 22.25l5.75-9.75-5.75 3.25z" fill="#8C8C8C" opacity="0.8" />
    <path d="M12 15.75v6.5l5.75-9.75-5.75 3.25z" fill="#3C3C3D" />
    <path d="M12 14.5l-5.75-3.25L12 15.75l5.75-4.5L12 14.5z" fill="#141414" opacity="0.4" />
  </svg>
);

const KubernetesIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0">
    <path d="M12.07.2L2.3 5.25v11.3l9.77 5.25 9.77-5.25V5.25L12.07.2zm0 3.7l6.6 3.55v7.1l-6.6 3.55-6.6-3.55v-7.1l6.6-3.55z" fill="#326CE5" />
    <path d="M12.07 3.9v12.2m-6.6-8.65l13.2 5.1m0-5.1l-13.2 5.1" stroke="#326CE5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0 text-sky-400 fill-current">
    <rect width="24" height="24" rx="4" className="opacity-15" />
    <text x="12" y="17" textAnchor="middle" className="font-sans font-black tracking-tighter" fontSize="14" fill="currentColor">GO</text>
  </svg>
);

const SwiftIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] md:w-[42px] md:h-[42px] flex-shrink-0">
    <path d="M21.2 16.5c-2.4-2.4-5.3-3.6-8.5-3.6 2.5-.9 4.8-2.6 6.3-5-2.4.9-5.1 1.2-7.8.6 1.8-1.1 3.2-2.8 3.9-4.8-2.9 1.8-6 2.5-9.3 1.9 1.2-1.3 2-3 2-4.9-4.2 3.3-8.8 4.7-13.8 4.1 2.3 2.1 5.3 3.3 8.6 3.5-2.6.9-5 2.6-6.5 5 2.5-.9 5.2-1.2 8-.6-1.9 1.2-3.4 3-4.1 5.1 3.1-1.9 6.4-2.7 9.8-2.1-1.3 1.4-2.2 3.2-2.2 5.2 4.5-3.5 9.4-5 14.7-4.4z" fill="#FA7323" />
  </svg>
);

interface TechItem {
  id: string;
  name: string;
  IconComponent: React.ComponentType;
  waterFrom: string;
  waterTo: string;
  hoverBorder: string;
}

const TECH_LIST: TechItem[] = [
  { id: "react", name: "React", IconComponent: ReactIcon, waterFrom: "rgba(56, 189, 248, 0.18)", waterTo: "rgba(56, 189, 248, 0.03)", hoverBorder: "hover:border-sky-400/50" },
  { id: "nextjs", name: "Next.js", IconComponent: NextjsIcon, waterFrom: "rgba(15, 23, 42, 0.12)", waterTo: "rgba(15, 23, 42, 0.02)", hoverBorder: "hover:border-slate-800/50" },
  { id: "nodejs", name: "Node.js", IconComponent: NodejsIcon, waterFrom: "rgba(16, 185, 129, 0.18)", waterTo: "rgba(16, 185, 129, 0.03)", hoverBorder: "hover:border-emerald-500/50" },
  { id: "expressjs", name: "Express", IconComponent: ExpressjsIcon, waterFrom: "rgba(71, 85, 105, 0.15)", waterTo: "rgba(71, 85, 105, 0.02)", hoverBorder: "hover:border-slate-500/50" },
  { id: "mongodb", name: "MongoDB", IconComponent: MongodbIcon, waterFrom: "rgba(16, 185, 129, 0.18)", waterTo: "rgba(16, 185, 129, 0.03)", hoverBorder: "hover:border-emerald-600/50" },
  { id: "mysql", name: "MySQL", IconComponent: MysqlIcon, waterFrom: "rgba(14, 165, 233, 0.18)", waterTo: "rgba(14, 165, 233, 0.03)", hoverBorder: "hover:border-sky-500/50" },
  { id: "firebase", name: "Firebase", IconComponent: FirebaseIcon, waterFrom: "rgba(245, 158, 11, 0.18)", waterTo: "rgba(245, 158, 11, 0.03)", hoverBorder: "hover:border-amber-500/50" },
  { id: "supabase", name: "Supabase", IconComponent: SupabaseIcon, waterFrom: "rgba(16, 185, 129, 0.18)", waterTo: "rgba(16, 185, 129, 0.03)", hoverBorder: "hover:border-emerald-500/50" },
  { id: "flutter", name: "Flutter", IconComponent: FlutterIcon, waterFrom: "rgba(14, 165, 233, 0.18)", waterTo: "rgba(14, 165, 233, 0.03)", hoverBorder: "hover:border-sky-500/50" },
  { id: "reactnative", name: "React Native", IconComponent: ReactNativeIcon, waterFrom: "rgba(139, 92, 246, 0.18)", waterTo: "rgba(139, 92, 246, 0.03)", hoverBorder: "hover:border-violet-500/50" },
  { id: "aws", name: "AWS", IconComponent: AwsIcon, waterFrom: "rgba(249, 115, 22, 0.18)", waterTo: "rgba(249, 115, 22, 0.03)", hoverBorder: "hover:border-orange-500/50" },
  { id: "docker", name: "Docker", IconComponent: DockerIcon, waterFrom: "rgba(2, 132, 199, 0.18)", waterTo: "rgba(2, 132, 199, 0.03)", hoverBorder: "hover:border-sky-600/50" },
  { id: "github", name: "GitHub", IconComponent: GithubIcon, waterFrom: "rgba(30, 41, 59, 0.15)", waterTo: "rgba(30, 41, 59, 0.02)", hoverBorder: "hover:border-slate-800/50" },
  { id: "typescript", name: "TypeScript", IconComponent: TypescriptIcon, waterFrom: "rgba(37, 99, 235, 0.18)", waterTo: "rgba(37, 99, 235, 0.03)", hoverBorder: "hover:border-blue-600/50" },
  { id: "javascript", name: "JavaScript", IconComponent: JavascriptIcon, waterFrom: "rgba(245, 158, 11, 0.18)", waterTo: "rgba(245, 158, 11, 0.03)", hoverBorder: "hover:border-yellow-500/50" },
  { id: "tailwindcss", name: "Tailwind CSS", IconComponent: TailwindIcon, waterFrom: "rgba(56, 189, 248, 0.18)", waterTo: "rgba(56, 189, 248, 0.03)", hoverBorder: "hover:border-sky-400/50" },
  { id: "vercel", name: "Vercel", IconComponent: VercelIcon, waterFrom: "rgba(15, 23, 42, 0.12)", waterTo: "rgba(15, 23, 42, 0.02)", hoverBorder: "hover:border-slate-900/50" },
  { id: "figma", name: "Figma", IconComponent: FigmaIcon, waterFrom: "rgba(242, 78, 30, 0.12)", waterTo: "rgba(242, 78, 30, 0.02)", hoverBorder: "hover:border-orange-500/50" },
  { id: "python", name: "Python", IconComponent: PythonIcon, waterFrom: "rgba(55, 118, 171, 0.18)", waterTo: "rgba(255, 224, 82, 0.03)", hoverBorder: "hover:border-blue-400/50" },
  { id: "tensorflow", name: "TensorFlow", IconComponent: TensorflowIcon, waterFrom: "rgba(255, 111, 0, 0.18)", waterTo: "rgba(255, 160, 0, 0.03)", hoverBorder: "hover:border-orange-500/50" },
  { id: "ethereum", name: "Ethereum", IconComponent: EthereumIcon, waterFrom: "rgba(140, 140, 140, 0.18)", waterTo: "rgba(60, 60, 61, 0.03)", hoverBorder: "hover:border-indigo-400/50" },
  { id: "kubernetes", name: "Kubernetes", IconComponent: KubernetesIcon, waterFrom: "rgba(50, 108, 229, 0.18)", waterTo: "rgba(50, 108, 229, 0.03)", hoverBorder: "hover:border-blue-500/50" },
  { id: "go", name: "Go", IconComponent: GoIcon, waterFrom: "rgba(0, 172, 215, 0.18)", waterTo: "rgba(0, 172, 215, 0.03)", hoverBorder: "hover:border-sky-400/50" },
  { id: "swift", name: "Swift", IconComponent: SwiftIcon, waterFrom: "rgba(255, 69, 0, 0.18)", waterTo: "rgba(255, 69, 0, 0.03)", hoverBorder: "hover:border-orange-500/50" }
];

interface CardState {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  rotation: number;
  angularVelocity: number;
}

export function TechPhysicsBox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [initialized, setInitialized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Keep physics values in a mutable ref to prevent React re-render lags
  const physicsStateRef = useRef<CardState[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const containerSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setInitialized(true);
      return;
    }

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        containerSizeRef.current = { w: width, h: height };
        
        if (physicsStateRef.current.length === 0 && width > 0 && height > 0) {
          initializeStates(width, height);
        }
      }
    });

    resizeObserver.observe(container);

    const initializeStates = (w: number, h: number) => {
      const mobile = window.innerWidth < 768;
      const cardSize = mobile ? 42 : 64; // w-12 is 48px, w-16 is 64px

      const states: CardState[] = [];
      TECH_LIST.forEach((tech, i) => {
        // Spread spawn points across container width
        const cols = Math.min(6, Math.floor(w / (cardSize + 12))) || 1;
        const colIdx = i % cols;
        const spawnX = (w / (cols + 1)) * (colIdx + 1) + (Math.random() - 0.5) * 15;
        
        // Spawn staggered above container ceiling so they drop sequence-by-sequence
        const spawnY = -50 - (i * (mobile ? 20 : 35)); 

        states.push({
          id: tech.id,
          x: spawnX,
          y: spawnY,
          vx: (Math.random() - 0.5) * 0.8,
          vy: 2.0 + Math.random() * 2, // gravity-driven drop speed
          width: cardSize,
          height: cardSize,
          rotation: (Math.random() - 0.5) * 0.25, // organic tilt
          angularVelocity: 0,
        });
      });

      physicsStateRef.current = states;
      setInitialized(true);
    };

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Stable, crawl-free sleep-enabled physics engine
  useEffect(() => {
    if (!initialized) return;
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;

    const gravity = isMobile ? 0.18 : 0.32;
    const friction = 0.94; // high air resistance for quick settling
    const cardBounce = 0.12; // low impact bounce to keep stability
    const wallBounce = 0.15; // low boundary bounce
    const groundFriction = 0.6; // strong ground braking to stop slides
    const angularDamping = 0.78; // strong rotation braking to stop infinite spinning
    
    const influenceRadius = isMobile ? 60 : 110;
    const pushStrength = isMobile ? 0.45 : 1.3;
    const maxVelocity = isMobile ? 3 : 5; // cap speed to prevent chaotic escapes

    // Sleep thresholds
    const velocitySleepThreshold = 0.15;
    const angularSleepThreshold = 0.008;

    const updatePhysics = () => {
      const states = physicsStateRef.current;
      const { w, h } = containerSizeRef.current;
      const mouse = mouseRef.current;

      if (w === 0 || h === 0) {
        animationFrameId = requestAnimationFrame(updatePhysics);
        return;
      }

      // 1. Force Integration (with Active Sleep checks)
      const borderPadding = isMobile ? 12 : 18;
      states.forEach((card) => {
        const halfW = card.width / 2;
        const halfH = card.height / 2;
        
        // Check if card is resting on ground (incorporates safety boundary padding)
        const isOnGround = card.y >= h - halfH - borderPadding - 2.5;
        // Check if card is quiet
        const isQuiet = Math.abs(card.vx) < velocitySleepThreshold && Math.abs(card.vy) < velocitySleepThreshold;
        // Check if cursor is pushing it
        const mouseNear = mouse.x !== null && mouse.y !== null && Math.sqrt((card.x - mouse.x)**2 + (card.y - mouse.y)**2) < influenceRadius;

        if (isOnGround && isQuiet && !mouseNear) {
          // Put card to sleep (freeze coordinates and speed)
          card.vx = 0;
          card.vy = 0;
          card.angularVelocity = 0;
          
          // Gently align resting rotation back towards straight up (optional minor stabilization feel)
          card.rotation *= 0.98;
        } else {
          // Apply gravity
          card.vy += gravity;

          // Apply mouse repulsion forces (wakes up cards)
          if (mouse.x !== null && mouse.y !== null) {
            const dx = card.x - mouse.x;
            const dy = card.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < influenceRadius) {
              const force = (influenceRadius - dist) / influenceRadius; // 0 to 1
              const nx = dist > 0 ? dx / dist : 0;
              const ny = dist > 0 ? dy / dist : -1;

              card.vx += nx * force * pushStrength;
              card.vy += ny * force * pushStrength - force * 0.4;
              card.angularVelocity += (Math.random() - 0.5) * force * 0.2;
            }
          }

          // Apply speeds to coordinate offsets
          card.x += card.vx;
          card.y += card.vy;

          // Apply dampings
          card.vx *= friction;
          card.vy *= friction;

          card.rotation += card.angularVelocity;
          card.angularVelocity *= angularDamping;

          // Velocity capping
          const speed = Math.sqrt(card.vx * card.vx + card.vy * card.vy);
          if (speed > maxVelocity) {
            card.vx = (card.vx / speed) * maxVelocity;
            card.vy = (card.vy / speed) * maxVelocity;
          }
          card.angularVelocity = Math.max(-0.04, Math.min(0.04, card.angularVelocity));
        }
      });

      // 2. Card-to-Card Elastic Collisions (Run multiple resolution passes for stack stability)
      const collisionSpacing = isMobile ? 4 : 6;
      for (let step = 0; step < 3; step++) {
        for (let i = 0; i < states.length; i++) {
          const c1 = states[i];
          const r1 = c1.width / 2.0 + collisionSpacing; // Add spacing buffer

          for (let j = i + 1; j < states.length; j++) {
            const c2 = states[j];
            const r2 = c2.width / 2.0 + collisionSpacing;

            const dx = c2.x - c1.x;
            const dy = c2.y - c1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDist = r1 + r2;

            if (distance < minDist) {
              const overlap = minDist - distance;
              const nx = dx / distance;
              const ny = dy / distance;

              // Split resolution
              c1.x -= nx * overlap * 0.5;
              c1.y -= ny * overlap * 0.5;
              c2.x += nx * overlap * 0.5;
              c2.y += ny * overlap * 0.5;

              // Relative velocity
              const rvx = c2.vx - c1.vx;
              const rvy = c2.vy - c1.vy;
              const velAlongNormal = rvx * nx + rvy * ny;

              // Wake up cards and bounce them
              if (velAlongNormal < -0.15) {
                const impulse = -(1 + cardBounce) * velAlongNormal / 2;
                c1.vx -= impulse * nx;
                c1.vy -= impulse * ny;
                c2.vx += impulse * nx;
                c2.vy += impulse * ny;

                // Induce spin on impact
                const tx = -ny;
                const ty = nx;
                const tangentVelocity = rvx * tx + rvy * ty;
                c1.angularVelocity += tangentVelocity * 0.012;
                c2.angularVelocity -= tangentVelocity * 0.012;
              }
            }
          }
        }
      }

      // 3. Wall Collisions Checked LAST (Guarantees zero boundary breaches and edge clipping)
      states.forEach((card) => {
        const halfW = card.width / 2;
        const halfH = card.height / 2;

        // Ground floor
        const groundLimit = h - halfH - borderPadding;
        if (card.y > groundLimit) {
          card.y = groundLimit;
          card.vy = -card.vy * wallBounce;
          card.vx *= groundFriction;
          card.angularVelocity *= groundFriction;

          // Damp down rest states
          if (Math.abs(card.vy) < velocitySleepThreshold) card.vy = 0;
          if (Math.abs(card.vx) < velocitySleepThreshold) card.vx = 0;
          if (Math.abs(card.angularVelocity) < angularSleepThreshold) card.angularVelocity = 0;
        }

        // Left wall
        const leftLimit = halfW + borderPadding;
        if (card.x < leftLimit) {
          card.x = leftLimit;
          card.vx = -card.vx * wallBounce;
          card.angularVelocity *= 0.8;
          if (Math.abs(card.vx) < velocitySleepThreshold) card.vx = 0;
        }

        // Right wall
        const rightLimit = w - halfW - borderPadding;
        if (card.x > rightLimit) {
          card.x = rightLimit;
          card.vx = -card.vx * wallBounce;
          card.angularVelocity *= 0.8;
          if (Math.abs(card.vx) < velocitySleepThreshold) card.vx = 0;
        }

        // Roof wall (block leaving only after dropping in)
        const roofLimit = halfH + borderPadding;
        if (card.y < roofLimit && card.vy < 0 && card.y > -100) {
          card.y = roofLimit;
          card.vy = -card.vy * wallBounce;
        }
      });

      // 4. Position Render Update
      states.forEach((card) => {
        const dom = cardRefs.current[card.id];
        if (dom) {
          const translateX = card.x - card.width / 2;
          const translateY = card.y - card.height / 2;
          dom.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${card.rotation}rad)`;
        }
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [initialized, isMobile]);

  // Track cursor offsets
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: null, y: null };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    mouseRef.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  };

  const handleTouchEnd = () => {
    mouseRef.current = { x: null, y: null };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-[calc(100%+32px)] ml-[-16px] sm:w-full sm:ml-0 h-[480px] sm:h-[500px] md:h-[550px] translate-y-8 sm:translate-y-0 bg-white/95 border-2 border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-xl rounded-3xl overflow-visible cursor-crosshair select-none"
      style={{ touchAction: "none" }}
      aria-label="Interactive physics technology sandbox. Sweep mouse to scatter tech logos."
    >
      {/* Decorative premium inner gradients */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/60 to-transparent pointer-events-none z-10 rounded-t-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/60 to-transparent pointer-events-none z-10 rounded-b-3xl" />

      {/* Physics Container Box Area */}
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        {TECH_LIST.map((tech) => {
          const Icon = tech.IconComponent;
          return (
            <div
              key={tech.id}
              ref={(el) => {
                cardRefs.current[tech.id] = el;
              }}
              className="absolute left-0 top-0 group select-none cursor-grab active:cursor-grabbing will-change-transform"
              style={{
                opacity: initialized ? 1 : 0,
                position: initialized ? "absolute" : "relative",
                float: initialized ? "none" : "left",
                margin: initialized ? 0 : "6px",
                transform: initialized ? undefined : "rotate(0deg)",
                ["--water-from" as any]: tech.waterFrom,
                ["--water-to" as any]: tech.waterTo,
              } as React.CSSProperties}
            >
              {/* Tooltip above card */}
              <span className="absolute bottom-full mb-3.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900/95 text-white text-[10px] font-bold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap z-30">
                {tech.name}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95" />
              </span>

              {/* Card Container */}
              <div 
                className="relative border border-slate-200/50 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{
                  width: isMobile ? 42 : 64,
                  height: isMobile ? 42 : 64,
                }}
                aria-label={`${tech.name} logo`}
              >
                {/* Rising Water-fill hover Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-[var(--water-from)] to-[var(--water-to)] scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 -z-10 rounded-2xl border border-transparent ${tech.hoverBorder}`}
                />

                {/* SVG Icon centered and scaled to fill the box layout */}
                <div className="flex items-center justify-center w-full h-full p-1.5 md:p-3">
                  <Icon />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
