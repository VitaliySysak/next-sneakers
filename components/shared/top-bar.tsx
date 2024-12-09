import { cn } from '@/lib/utils';
import React from 'react';
import { SearchInput } from './search-input';

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex justify-between', className)}>
      <h1 className='text-4xl font-bold'>All sneakers</h1>
      <SearchInput />
    </div>
  );
};