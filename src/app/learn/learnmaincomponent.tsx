'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import PLAY from '@/public/assets/images/play.svg';
import close_circle from '@/public/assets/svg/close-circle-svgrepo-com.svg';

const LearnMainComponent: FC = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    React.useEffect(() => {
        const video = document.getElementById('backVideo') as HTMLVideoElement | null;
        if (!showModal && video) {
            video.pause();
            video.currentTime = 0;
        }
    }, [showModal])

    const openVideo = () => {
        setShowModal(!showModal);
    }

    return (
        <div className='bg-cover bg-center rounded-[20px] relative w-full h-full overflow-hidden'>

            <div className={`absolute top-0 left-0 w-full h-full bg-[rgb(250,250,250,.9)] z-[10] flex justify-center items-center none ${showModal ? 'block' : 'hidden'}`}>
                {/* <Image 
                    src={close_circle} 
                    alt='close_circle' 
                    className='absolute top-5 right-5 z-[1001] w-[40px] h-[auto] hover:cursor-pointer transition-transform transform scale-100 hover:scale-110' 
                    onClick={openVideo} 
                /> */}
                <video className='w-full h-full object-cover' controls id='backVideo'>
                    <source src='/assets/video/Dashboard_video.mp4' type='video/mp4' />
                </video>
            </div>

            <video className='absolute top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover' autoPlay muted loop>
                <source src='/assets/video/Dashboard_video.mp4' type='video/mp4' />
            </video>

            <div className={`pl-[20px] pr-[20px] relative bg-black/50`}>

                <div className="inset-0 flex ml-4 sm:ml-[50px] lg:ml-[94px] pt-[30px] sm:pt-[70px] lg:pt-[168px]">
                    <h2 className="text-2xl sm:text-[40px] lg:text-[60px] font-bold text-[#FFF] leading-10 sm:leading-[50px] lg:leading-[72px]">
                        Master Data and AI with <br /> Tailored Educational Paths
                    </h2>
                </div>
                <div className="inset-0 flex mt-4 sm:mt-[45px] ml-4 sm:ml-[50px] lg:ml-[94px]">
                    <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#FFF] leading-8 sm:leading-[35px] lg:leading-[44px]">
                        Choose the plan that best fits your <br /> needs and
                        <span className='text-[#FF6E3E] font-bold'> start transforming data <br /> into decisions. </span>
                    </h2>
                </div>
                <div className='relative flex items-center ml-4 sm:ml-[50px] lg:ml-[90px] mt-4 sm:mt-[45px] pb-8 sm:pb-[108px]'>
                    <Image src={PLAY} className='w-10 sm:w-16 lg:w-20 hover:cursor-pointer' alt='Picture' onClick={openVideo} />
                    <span className="text-sm sm:text-[20px] text-[#FFF] pl-4 sm:pl-8 leading-6">
                        Listen to what <br /> Edosa has to say
                    </span>
                </div>
            </div>
        </div >
    );
};

export default LearnMainComponent;