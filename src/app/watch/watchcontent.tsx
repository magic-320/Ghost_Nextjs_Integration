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
            <div className='ml-[20px] mr-[20px]'>
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
                            <div className='relative h-full min-h-[400px]'>
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    Podcasts
                                </div>
                                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    The AI Values Podcast
                                </div>
                                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                                    Navigating the value, values, issues and future of AI. We can’t wait to welcome you to the show to share the latest advancements in the AI world and the big questions that you are currently wanting to answer.
                                </p>
                                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                                    <span>
                                        <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Get it Here</DefaultButton>
                                    </span>
                                    <span>
                                        <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                                    </span>
                                </div>
                            </div>
                            <div className='min-h-[400px] aspect-[1/1] bg-[#eee] rounded-2xl'>
                                {/* <Image src={BOOK3} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" /> */}
                            </div>
                        </div>
                    )
                }



                {/* eCoaching */}
                {
                    data.eCoaching && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
                            <div>
                                <Image src={IMAGE2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
                            </div>
                            <div className='relative h-full min-h-[400px]'>
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    eCoaching
                                </div>
                                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    AI Value eCoaching Series
                                </div>
                                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                                    Free Coaching Snippets To Help You Reach Your Full Value Driven Potential
                                </p>
                                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                                    <span onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}>
                                        <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Start Here</DefaultButton>
                                    </span>
                                    <span onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}>
                                        <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                }


                {/* Insights */}
                {
                    data.insights && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
                            <div className='relative h-full min-h-[400px]'>
                                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-w-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                                    Insights
                                </div>
                                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                                    The AI Values Podcast
                                </div>
                                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                                    Get latest insights on value, values, issues and future of AI Advisory. These are aimed at both experienced AI Value Consultans but also for those who aspire to become one.
                                </p>
                                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                                    <span>
                                        <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Get Videos Here</DefaultButton>
                                    </span>
                                    <span>
                                        <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                                    </span>
                                </div>
                            </div>
                            <div className='min-h-[400px] aspect-[1/1] bg-[#eee] rounded-2xl'>
                                {/* <Image src={BOOK2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" /> */}
                            </div>
                        </div>
                    )
                }

            </div>
        </div >
    );
};

export default WatchContent;