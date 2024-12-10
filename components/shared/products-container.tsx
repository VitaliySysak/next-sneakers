import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const ProductsContainer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <div className={cn('mt-10 flex flex-wrap', className)}>{children}</div>
  );
};