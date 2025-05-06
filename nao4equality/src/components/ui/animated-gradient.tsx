
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'blue' | 'purple';
}

export function AnimatedGradient({ children, className, variant = 'primary' }: AnimatedGradientProps) {
  return (
    <div 
      className={cn(
        'bg-size-200 animate-shift-background',
        variant === 'primary' && 'bg-gradient-primary',
        variant === 'blue' && 'bg-gradient-blue',
        variant === 'purple' && 'bg-gradient-purple',
        className
      )}
    >
      {children}
    </div>
  );
}
