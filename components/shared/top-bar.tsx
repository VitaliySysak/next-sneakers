import { cn } from '@/lib/utils';
import React from 'react';
import { SearchInput } from './search-input';

interface Props {
  name: string
  className?: string;
}

export const TopBar: React.FC<Props> = ({ name, className }) => {
  return (
    <div className={cn('flex justify-between mb-6', className)}>
      <h1 className='text-4xl font-bold'>{name}</h1>
      <SearchInput />
    </div>
  );
};