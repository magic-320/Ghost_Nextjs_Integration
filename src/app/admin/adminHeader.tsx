'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import LOGO from '@/public/assets/images/logo.png';
import localFont from "next/font/local";
import { useRouter } from 'next/navigation';

const lucidaFont = localFont({
    src: "../fonts/Lucida-Calligraphy.ttf",
    variable: "--font-lucida-calligraphy",
    weight: "100 900",
});


const AdminHeader: FC = () => {

    const router = useRouter();
    
    const goToPrevious = () => {
        router.back();
    }

    return (
        <div className={`${lucidaFont.variable} flex justify-between mb-3`}>
            <Image src={LOGO} alt='logo' className='w-[200px] sm:w-[360px] h-[25px] sm:h-[35px] hover:cursor-pointer' onClick={goToPrevious} />
            <div className='text-[16px] sm:text-[28px] text-text-color' style={{ fontFamily: 'var(--font-lucida-calligraphy)' }}>Admin Panel</div>
        </div>
    )
}

export default AdminHeader;