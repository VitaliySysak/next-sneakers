'use client'

import React from 'react';
import Image from 'next/image';
import liked from '@/public/liked.svg'
import unliked from '@/public/unliked.svg'
import axios from "axios";
import { Loader } from 'lucide-react';

interface Props {
  id: number;
  isLiked: boolean
  className?: string;
}

export const LikeButton: React.FC<Props> = ({ id, isLiked, className }) => {
  const [userLiked, setUserLiked] = React.useState(isLiked);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setUserLiked(isLiked);
  }, [isLiked]);
  

  const toggleLike = async () => {
    setLoading(true);
    try {
      if (userLiked) {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/likes/${id}`);
      } else {
        await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/likes/${id}`);
      }
      setUserLiked(!userLiked);
    } catch (error) {
      console.error('Error while adding like', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      {loading ? (
        <div className="w-[48px] flex justify-center items-center absolute top-[60px]">
          <Loader />
        </div>
      ) : userLiked ? (
        <Image onClick={toggleLike} className="absolute top-[50px]" width={48} height={48} src={liked} alt="liked" />
      ) : (
        <Image onClick={toggleLike} className="absolute top-[50px]" width={48} height={48} src={unliked} alt="unliked" />
      )}
    </div>
  );
};