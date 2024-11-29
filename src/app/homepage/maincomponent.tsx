'use client';
import { FC } from 'react';
import PLAY from '@/public/assets/images/play.svg';
import Image from 'next/image';

const MainComponent: FC = () => {

    return (
        <div className='bg-main-person bg-home-pattern bg-cover bg-center rounded-[20px]'>
            <div className='ml-[20px] mr-[20px] relative'>

                <div className="inset-0 flex ml-4 sm:ml-[50px] lg:ml-[94px] pt-[30px] sm:pt-[70px] lg:pt-[168px]">
                    <h2 className="font-bold text-[#475467] text-2xl sm:text-[40px] lg:text-[60px] leading-10 sm:leading-[50px] lg:leading-[72px]">
                        Welcome to Your AI and <br />Data-Driven Journey
                    </h2>
                </div>
                <div className="inset-0 flex mt-4 sm:mt-[35px] lg:mt-[45px] ml-4 sm:ml-[50px] lg:ml-[94px]">
                    <h2 className="text-lg sm:text-[25px] lg:text-[36px] text-[#475467] leading-8 sm:leading-[35px] lg:leading-[44px]">
                        <span className='text-[#FF6E3E] font-bold'>Unlock Your Business's Potential<br /> with Edosa Odaro, </span>
                        the Visionary<br /> and multi-award-winning data<br /> Value-Driven Data Leader
                    </h2>
                </div>
                <div className='relative flex items-center ml-4 sm:ml-[50px] lg:ml-[90px] mt-4 sm:mt-[45px] pb-8 sm:pb-[108px]'>
                    <Image src={PLAY} className='w-10 sm:w-16 lg:w-20' alt='Picture' />
                    <span className="text-sm sm:text-[20px] text-[#475467] pl-4 sm:pl-8 leading-6">
                        Listen to what <br /> Edosa has to say
                    </span>
                </div>
                
            </div>
        </div>
    );
};

export default MainComponent;