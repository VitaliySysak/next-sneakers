'use client'

import React from 'react';
import Image from 'next/image';
import added from '@/public/added.svg'
import unadded from '@/public/unadded.svg'

interface Props {
  className?: string;
}

export const AddButton: React.FC<Props> = ({ className }) => {

  return (
    <div className={className}>
      {/* <Image width={48} height={48} src={added} alt="added"/> */}
      <Image width={48} height={48} src={unadded} alt="unadded"/>
    </div>
  );
};