import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  href?: string;
}

export function Button({ variant = 'primary', children, href, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg transition font-medium';
  const variants = {
    primary: 'bg-neutral-900 text-white hover:bg-neutral-800',
    secondary: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-50'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
