'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import DefaultButton from '../components/buttons/DefaultButton';
import IMAGE2 from "@/public/assets/images/learn/image2.png";

const WatchContent: FC = () => {

    const [data, setData] = useState<any>({});

    React.useEffect(() => {
        const getWatch = async() => {
            const response = await axios.get<any>('/api/watchAdmin/getWatch');
            setData(response.data);
        }

        getWatch();
    }, [])

    return (
        <div className='flex rounded-[20px] h-[auto] mt-16'>
            <div>
                <div className='text-center'>
                    <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">Watch</span>
                </div>
                <div className="text-lg sm:text-5xl leading-15 font-bold mt-4 sm:mt-8 text-text-color text-center">
                    Learn with Edosa Odaro
                </div>
                <div className="text-base mx-[auto] sm:text-2xl leading-6 sm:leading-8 mt-2 sm:mt-8 sm:w-3/4 text-text-color text-center">
                    Edosa Odaro’s learning resources are designed to support professionals at every stage of their journey, from beginners to advanced leaders. Explore our range of educational offerings to gain valuable skills and insights in data science and AI:
                </div>

                {/* <div className='bg-[#F7F6FF] mt-8 h-[600px] w-full rounded-2xl flex'>
                </div>
                <div className='flex sm:flex-row sm:w-full gap-6 sm:row-span-4 mt-30'>
                    <div className='bg-[#F7F6FF] mt-8 h-[160px] w-full rounded-2xl'>
                    </div>
                    <div className='bg-[#F7F6FF] mt-8 h-[160px] w-full rounded-2xl'>
                    </div>
                    <div className='bg-[#F7F6FF] mt-8 h-[160px] w-full rounded-2xl'>
                    </div>
                    <div className='bg-[#F7F6FF] mt-8 h-[160px] w-full rounded-2xl'>
                    </div>
                </div> */}

                {/* Podcasts */}
                {
                    data.podcasts && (
                        <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                            {/* mobile */}
                            <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                                
                                <div className="flex justify-center">
                                    <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                                </div>

                                {/* Content */}
                                <div className="mt-10">
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    Podcasts
                                </div>
                                <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    The AI Values Podcast
                                </div>
                                <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                                    Navigating the value, values, issues and future of AI. We can’t wait to welcome you to the show to share the latest advancements in the AI world and the big questions that you are currently wanting to answer. 
                                </div>
                                <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                                    <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                                        Get it Here
                                    </div>
                                    <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                                        Find Out More
                                    </div>
                                </div>
                                </div>  
                            </div>
                            {/* PC */}
                            <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    Podcasts
                                </div>
                                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    The AI Values Podcast
                                </div>
                                <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                                    Navigating the value, values, issues and future of AI. We can’t wait to welcome you to the show to share the latest advancements in the AI world and the big questions that you are currently wanting to answer. 
                                </div>
                                <div className="flex flex-row mt-8 ml-4 gap-4">
                                    <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                                        Get it Here
                                    </div>
                                    <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                                        Find Out More
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 mx-10 rounded-2xl bg-[#eee]"></div>
                        </div>
                    )
                }



                {/* eCoaching */}
                {
                    data.eCoaching && (
                        <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}>
                            {/* mobile */}
                            <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                                
                                <div className="flex justify-center overflow-hidden">
                                    <Image src={IMAGE2} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                                </div>

                                {/* Content */}
                                <div className="mt-10">
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    eCoaching
                                </div>
                                <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    AI Value eCoaching Series
                                </div>
                                <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                                    Free Coaching Snippets To Help You Reach Your Full Value Driven Potential
                                </div>
                                <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                                    <div 
                                        className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                                        onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}
                                    >
                                        Start Here
                                    </div>
                                    <div 
                                        className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                                        onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}
                                    >
                                        Find Out More
                                    </div>
                                </div>
                                </div>  
                            </div>
                            {/* PC */}
                            <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                                <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${IMAGE2.src})` }} ></div>
                            </div>
                            <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    eCoaching
                                </div>
                                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    AI Value eCoaching Series
                                </div>
                                <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                                    Free Coaching Snippets To Help You Reach Your Full Value Driven Potential
                                </div>
                                <div className="flex flex-row mt-8 ml-4 gap-4">
                                    <div 
                                        className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                                        onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}
                                    >
                                        Start Here
                                    </div>
                                    <div 
                                        className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                                        onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}
                                    >
                                        Find Out More
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


                {/* Insights */}
                {
                    data.insights && (
                        <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                            {/* mobile */}
                            <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                                
                                <div className="flex justify-center">
                                    <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                                </div>

                                {/* Content */}
                                <div className="mt-10">
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    Insights
                                </div>
                                <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    The AI Values Podcast
                                </div>
                                <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                                    Get latest insights on value, values, issues and future of AI Advisory. These are aimed at both experienced AI Value Consultans but also for those who aspire to become one. 
                                </div>
                                <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                                    <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                                        Get Videos Here
                                    </div>
                                    <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                                        Find Out More
                                    </div>
                                </div>
                                </div>  
                            </div>
                            {/* PC */}
                            <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    Insights
                                </div>
                                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    The AI Values Podcast
                                </div>
                                <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                                    Get latest insights on value, values, issues and future of AI Advisory. These are aimed at both experienced AI Value Consultans but also for those who aspire to become one. 
                                </div>
                                <div className="flex flex-row mt-8 ml-4 gap-4">
                                    <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                                        Get Videos Here
                                    </div>
                                    <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                                        Find Out More
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 mx-10 rounded-2xl bg-[#eee]"></div>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default WatchContent;