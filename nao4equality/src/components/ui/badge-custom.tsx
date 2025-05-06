
import React from 'react';
import { cn } from "@/lib/utils";

interface BadgeCustomProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'purple' | 'orange';
  className?: string;
}

export function BadgeCustom({ children, variant = 'default', className }: BadgeCustomProps) {
  return (
    <span 
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
        variant === 'default' && 'bg-gray-100 text-gray-800',
        variant === 'blue' && 'bg-blue-100 text-nao-blue',
        variant === 'purple' && 'bg-purple-100 text-nao-purple',
        variant === 'orange' && 'bg-orange-100 text-nao-orange',
        className
      )}
    >
      {children}
    </span>
  );
}
