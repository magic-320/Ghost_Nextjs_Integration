'use client';
import type { NextPage } from "next";
import React, { useState } from 'react';
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import IMAGE1 from "@/public/assets/images/watch/image1.png";
import IMAGE2 from "@/public/assets/images/watch/image2.png";
import DefaultButton from "../components/buttons/DefaultButton";

const PersonalCoaching: NextPage = () => {

  const [data, setData] = useState<any>({});

   React.useEffect(() => {
      const getMeet = async() => {
        const response = await axios.get<any>('/api/meetAdmin/getMeet');
        setData(response.data);
      }

      getMeet();
   }, [])

  return (
    <div className='sm:mx-14 pb-5 mt-10 sm:mt-24'>
        {/* The AI Value Advisory Network */}
        {
          data.meet1 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center">
                      <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                    <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-7 py-1 text-center w-[auto]">
                        The AI Value Advisory Network
                    </span>
                    <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        The AI Value Advisory Network
                    </div>
                    <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        Meeting place for both organisations looking to move from AI hype to tangible value and professionals looking to provide the critical advice to guide corporate executives along the way. 
                    </div>
                    <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                            Register Your Interest
                        </div>
                        <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                            Find Out More
                        </div>
                    </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-7 py-1 text-center w-[auto]">
                        The AI Value Advisory Network
                    </span>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        The AI Value Advisory Network
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                        Meeting place for both organisations looking to move from AI hype to tangible value and professionals looking to provide the critical advice to guide corporate executives along the way. 
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                            Register Your Interest
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

        {/* Personal Coaching */}
        {
          data.personalCoaching && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center overflow-hidden">
                      <Image src={IMAGE1} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-7 py-1 text-center w-[auto]">
                          Personal Coaching
                      </span>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        AI Value - Consultant Coaching
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                          Moving yourself from basic knowledge to full and tangible self transformation.
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                            Register Your Interest
                          </div>
                          <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                  <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${IMAGE1.src})` }} ></div>
                </div>
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-7 py-1 text-center w-[auto]">
                        Personal Coaching
                    </span>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      AI Value - Consultant Coaching
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                        Moving yourself from basic knowledge to full and tangible self transformation.
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                          Register Your Interest
                        </div>
                        <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                          Find Out More
                        </div>
                    </div>
                </div>
            </div>
          )
        }

        {/* Corporate Advisory */}
        {
          data.corporateAdvisory && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center overflow-hidden">
                      <Image src={IMAGE2} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-7 py-1 text-center w-[auto]">
                          Corporate Advisory
                      </span>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        The AI Values Advisory
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                          For corportate and technology executives looking to access cutting edge advice to guide them from AI hype to measurable value.
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <Link href="/Dashboard/meet">
                              <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                                Book a Call
                              </div>
                          </Link>
                          <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-7 py-1 text-center w-[auto]">
                        Corporate Advisory
                    </span>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      The AI Values Advisory
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                        For corportate and technology executives looking to access cutting edge advice to guide them from AI hype to measurable value.
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <Link href="/Dashboard/meet">
                            <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                              Book a Call
                            </div>
                        </Link>
                        <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                          Find Out More
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                  <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${IMAGE2.src})` }} ></div>
                </div>
            </div>
          )
        }
      
    </div >
  );
};

export default PersonalCoaching;