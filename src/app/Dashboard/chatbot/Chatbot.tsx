'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import Edosa_mark from '@/public/assets/images/O_edosa.png';

const Chatbot: FC = () => {
    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='relative w-full h-[650px] bg-[#FFF] rounded-[22px]'>
                <h1 className='text-[24px] font-bold font-inter font-[#344054] px-7 py-5 text-text-color'>
                    My Chatbot
                </h1>
                <div>

                </div>
                <div className='absolute bottom-5 w-full px-10'>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Chat here..."
                            className="w-full px-4 py-2 pr-10 border-2 border-orange-500 rounded-[18px] focus:outline-none text-orange-500"
                        />
                        <Image 
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5" 
                            alt={'edosa_mark'} 
                            src={Edosa_mark} 
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatbot;