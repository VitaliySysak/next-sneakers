import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  size: string;
  className?: string;
  image: string | StaticImageData;
  altText: string;
}

export const CardIcon: React.FC<Props> = ({ size, className, image, altText }) => {
  return (
    <div className={cn(className, "w-12 h-12 flex justify-center items-center rounded-[10px] border-2 cursor-pointer")}>
      <Image className={size} src={image} alt={altText} />
    </div>
  );
};
