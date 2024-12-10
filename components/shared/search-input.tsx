import React from 'react';
import { Search } from "lucide-react";
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex justify-between relative h-11 border border-[var(--object-border)] rounded-[15px]", className)}>
      <Search className="absolute top-1/4 left-4 h-5 text-gray-400" />
      <input className='rounded-2xl outline-none pl-11' placeholder='Search...'/>
    </div>
  );
};