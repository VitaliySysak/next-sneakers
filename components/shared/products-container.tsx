import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const ProductsContainer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <div className={cn('grid grid-cols-4 gap-8 place-items-center', className)}>{children}</div>
  );
};