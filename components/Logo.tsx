import React from 'react';

const logoImage = '/logo-jc_1765724862776.jpeg';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img 
        src={logoImage} 
        alt="JC Climatizar Logo" 
        className={`${sizeClasses[size]} rounded-full object-cover shadow-lg ring-2 ring-jc-gold/50 hover:ring-jc-gold transition-all duration-300 hover:scale-105`}
      />
    </div>
  );
};

export default Logo;