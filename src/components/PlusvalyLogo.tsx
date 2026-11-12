import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'stacked';
  className?: string;
  light?: boolean;
}

export const PlusvalyLogo: React.FC<LogoProps> = ({ variant = 'full', className = '', light = true }) => {
  if (variant === 'icon') {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
          {/* House outline */}
          <path
            d="M8 22L24 7L40 22V41C40 42.1 39.1 43 38 43H10C8.9 43 8 42.1 8 41V22Z"
            stroke={light ? "#FFFFFF" : "#0d1b30"}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Stylized door/window line */}
          <path
            d="M20 43V28H28V43"
            stroke={light ? "#FFFFFF" : "#0d1b30"}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lime green dot / chimney accent */}
          <circle cx="24" cy="18" r="3.2" fill="#c8e626" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Icon mark */}
      <div className="relative shrink-0">
        <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          {/* House geometric outline */}
          <path
            d="M9 24L27 8L45 24V44C45 45.1 44.1 46 43 46H11C9.9 46 9 45.1 9 44V24Z"
            stroke={light ? "#FFFFFF" : "#0d1b30"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Interior geometry */}
          <path
            d="M22 46V31H32V46"
            stroke={light ? "#FFFFFF" : "#0d1b30"}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Signature lime dot accent */}
          <circle cx="27" cy="20" r="3.8" fill="#c8e626" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`text-2xl font-black tracking-tight ${
            light ? 'text-white' : 'text-slate-900'
          }`}
          style={{ letterSpacing: '0.04em' }}
        >
          PLUSVALY
        </span>
        <span
          className="text-[9.5px] font-bold text-[#c8e626] uppercase mt-0.5 tracking-[0.24em]"
        >
          Diseño y Construcción
        </span>
      </div>
    </div>
  );
};
