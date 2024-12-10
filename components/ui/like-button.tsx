'use client'

import React from 'react';
import Image from 'next/image';
import liked from '@/public/liked.svg'
import unliked from '@/public/unliked.svg'

interface Props {
  className?: string;
}

export const LikeButton: React.FC<Props> = ({ className }) => {

  return (
    <div className={className}>
      {/* <Image className="absolute top-[50px]" width={48} height={48} src={liked} alt="liked"/> */}
      <Image className="absolute top-[50px]" width={48} height={48} src={unliked} alt="unliked"/>
    </div>
  );
};