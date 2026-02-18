import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success';
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  size = 'md',
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-95";
  
  const variants = {
    // Agora o primary segue a cor verde solicitada #1F7A3E
    primary: "bg-[#1F7A3E] hover:bg-[#249B4E] text-white shadow-[0_4px_14px_0_rgba(31,122,62,0.39)] border-t border-[#34D399]/30",
    secondary: "bg-[#0F1E3A] hover:bg-[#162a52] text-[#B8B8B8] border border-[#8C6B1F]/30 hover:text-white",
    outline: "border border-[#8C6B1F] text-[#8C6B1F] hover:bg-[#8C6B1F] hover:text-white",
    // Mantendo success consistente com o primary para este design
    success: "bg-[#1F7A3E] hover:bg-[#249B4E] text-white shadow-[0_4px_14px_0_rgba(31,122,62,0.39)] border-t border-[#34D399]/30"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg uppercase tracking-wide",
    xl: "px-10 py-5 text-xl uppercase tracking-wider font-black"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;