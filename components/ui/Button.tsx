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
    primary: "bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] border-t border-red-500",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm",
    outline: "border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white",
    success: "bg-green-600 hover:bg-green-700 text-white shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] border-t border-green-500"
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