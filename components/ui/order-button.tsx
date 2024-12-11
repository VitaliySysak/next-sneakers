import { cn } from '@/lib/utils';
import React from 'react';
import rightArrow from '@/public/right-arrow.svg'
import Image from 'next/image';

interface Props {
  className?: string;
}

export const OrderButton: React.FC<Props> = ({ className }) => {
  return (
    <button className={cn('relative w-full flex justify-center items-center border-0 bg-[var(--green-button)] h-14 p-2 rounded-2xl mt-6', className)}>
      <h2 className='text-white'>Order Now</h2>
      <Image className='absolute right-16' src={rightArrow} alt='rightArrow' />
    </button>
  );
};