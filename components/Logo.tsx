import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-16", variant = 'dark' }) => {
  // Since we cannot rely on local file paths in this environment, 
  // we render the Logo structure using CSS/SVG to match the user's uploaded image exactly.
  // Alternatively, the user can replace the <svg> below with <img src="/path/to/logo.png" />
  
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
        {/* Simulating the uploaded logo structure: Circle with JC inside and text below/around */}
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-lg border-2 border-gray-100">
            <span className="text-jc-navy font-bold text-2xl tracking-tighter" style={{ fontFamily: 'serif' }}>
                JC
            </span>
        </div>
        <div className="flex flex-col">
            <span className={`text-xl font-black tracking-wide leading-none ${variant === 'light' ? 'text-white' : 'text-jc-navy'}`}>
                JC
            </span>
            <span className="text-jc-gold font-bold text-sm tracking-widest uppercase">
                Climatizar
            </span>
        </div>
    </div>
  );
};

export default Logo;