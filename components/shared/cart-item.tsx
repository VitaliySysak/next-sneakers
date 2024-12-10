import Image from "next/image";
import React from "react";
import remove from '@/public/remove.svg'
import testImage from '@/public/test-image.png'

interface Props {
  className?: string;
}

export const CartItem: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center border border-[var(--object-border)] rounded-[20px] overflow-hidden p-5 mb-4">
      <Image className="mr-5 mb-4" width={100} height={100} src={testImage} alt="image" />
      <div className="mr-5">
        <p className="mb-1 text-sm">Man Sneakers Nike Air Max 270</p>
        <b className="mb-5 text-sm">$129</b>
      </div>
      <Image className="opacity-50 hover:opacity-100 cursor-pointer" width={48} height={48} src={remove} alt="remove" />
    </div>
  );
};
