import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const CartPrice: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex justify-between items-center", className)}>
      <h3>Total:</h3>
      <span className="w-full border-b border-dashed border-[#dfdfdf] mt-3 ml-2 mr-2" />
      <b>$2200</b>
    </div>
  );
};