'use client';

import React, { FC } from 'react';
import Image from "next/image";
import Link from 'next/link';
import DefaultButton from '../../components/buttons/DefaultButton';
import WatchArrow from '@/public/assets/images/drivenSvgs/arrow3.svg';

const Watch: FC = () => {
    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px]'>
                <h1 className='text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-7 py-5 text-text-color'>
                    Services &gt; Watch &gt; Curated Resource Library
                </h1>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-5">
                    <div className='w-full h-[520px] bg-w-demo-color rounded-[22px]'>
                        
                    </div>
                    <div className='px-3'>
                        <div className="text-[25px] md:text-[36px] leading-11 font-bold text-text-color my-5">
                            Curated Resource Library
                        </div>

                        <div className='flex justify-between items-center w-full h-[60px] text-text-color bg-w-demo-color rounded-[22px] px-6 mt-3'>
                            <div>
                                <b>The AI & Data Value Literate C-Suite</b>
                            </div>
                            <div>
                                <Image 
                                    alt={'arrow'}
                                    className='w-6 h-6 my-2'
                                    src={WatchArrow} 
                                />
                            </div>
                        </div>

                        <div className='flex justify-between items-center w-full h-[60px] text-text-color bg-w-demo-color rounded-[22px] px-6 mt-3'>
                            <div>
                                <b>The AI & Data Value Literate C-Suite</b>
                            </div>
                            <div>
                                <Image 
                                    alt={'arrow'}
                                    className='w-6 h-6 my-2'
                                    src={WatchArrow} 
                                />
                            </div>
                        </div>

                        <div className='flex justify-between items-center w-full h-[60px] text-text-color bg-w-demo-color rounded-[22px] px-6 mt-3'>
                            <div>
                                <b>The AI & Data Value Literate C-Suite</b>
                            </div>
                            <div>
                                <Image 
                                    alt={'arrow'}
                                    className='w-6 h-6 my-2'
                                    src={WatchArrow} 
                                />
                            </div>
                        </div>

                        <div className='flex justify-between items-center w-full h-[60px] text-text-color bg-w-demo-color rounded-[22px] px-6 mt-3'>
                            <div>
                                <b>The AI & Data Value Literate C-Suite</b>
                            </div>
                            <div>
                                <Image 
                                    alt={'arrow'}
                                    className='w-6 h-6 my-2'
                                    src={WatchArrow} 
                                />
                            </div>
                        </div>

                        <div className='flex justify-between items-center w-full h-[60px] text-text-color bg-w-demo-color rounded-[22px] px-6 mt-3'>
                            <div>
                                <b>The AI & Data Value Literate C-Suite</b>
                            </div>
                            <div>
                                <Image 
                                    alt={'arrow'}
                                    className='w-6 h-6 my-2'
                                    src={WatchArrow} 
                                />
                            </div>
                        </div>

                        <div className='mt-12 flex gap-3 text-center justify-center w-full'>
                            <Link href="#" className="w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                                <button>Upgrade to Premium</button>
                            </Link>
                            <Link href="#">
                                <DefaultButton className='w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                    View All
                                </DefaultButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch;