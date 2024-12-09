import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import heart from '@/public/heart.png'
import good from '@/public/good.png'
import plus from '@/public/plus.png'
import { CardIcon } from '../ui/card-icon';


interface Props {
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('w-80 rounded-[40px] border border-solid border-[#F8F8F8] p-8 relative', className)}>
      <CardIcon size='w-7 h-7' className='absolute top-[50px]' image={heart} altText='heart' />
      <Image className='w-60 h-52' src={good} alt='good' />
      <h3 className='pb-4 text-xl'>Men Sneakers Nike Blazer Mid Suede</h3>
      <div className='flex justify-between '>
        <div>
          <h4 className='text-[var(--grey-text)]'>PRICE:</h4>
          <span className='font-bold'>$129</span>
        </div>
        <CardIcon size='w-5 h-5' image={plus} altText='plus' />
      </div>
      
    </div>
  );
};