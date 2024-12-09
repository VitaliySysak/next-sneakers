import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png'
import cart from '@/public/cart.png'
import like from '@/public/like.png'
import profile from '@/public/profile.png'
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center p-10 bg-white rounded-t-[20px] border-b-2 shadow-[0px_10px_20px_rgba(0,0,0,0.04)]'>
      <Link href={'/'} className='flex justify-between items-center w-[240px]'>
        <Image src={logo} alt='logo' className='w-12 h-12'/>
        <div>
          <h3 className='text-xl font-bold'>NEXT SNEAKERS</h3>
          <p className='text-base text-[var(--grey-text)]'>The best sneakers shop</p>
        </div>
      </Link>
      <ul className='flex w-[25%] justify-between tracking-[1px]'>
        <li className='flex items-center cursor-pointer'>
          <Image src={cart} alt='cart' className='w-7 h-7' />
          <span className='pl-3 font-semibold text-xl text-[var(--dark-grey-text)]'>$120</span>
        </li>
        <li className='flex items-center cursor-pointer'>
          <Image src={like} alt='like' className='w-7 h-7'/>
          <h4 className='pl-3 text-xl'>Saved</h4>
        </li>
        <li className='flex items-center cursor-pointer'>
          <Image src={profile} alt='profile' className='w-7 h-7'/>
          <h4 className='pl-3 text-xl'>Profile</h4>
        </li>
      </ul>
    </header>
  );
};