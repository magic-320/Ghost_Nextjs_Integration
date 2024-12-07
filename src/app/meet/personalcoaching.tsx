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
    <div className='sm:ml-14 pb-5 mt-10 sm:mt-24'>
      
        {
          data.meet1 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
                <div className='relative h-full min-h-[400px]'>
                  <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-5 sm:px-10 py-1 text-center w-[auto]">
                    The AI Value Advisory Network
                  </span>
                  <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                    The AI Value Advisory Network
                  </div>
                  <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                    Meeting place for both organisations looking to move from AI hype to tangible value and professionals looking to provide the critical advice to guide corporate executives along the way.
                  </p>
                  <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                    <span>
                      <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Register Your Interest</DefaultButton>
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


        {
          data.personalCoaching && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
                <div>
                  <Image src={IMAGE1} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
                </div>
                <div className='relative h-full min-h-[400px]'>
                  <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-5 sm:px-10 py-1 text-center max-w-52">
                    Personal Coaching
                  </span>
                  <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                    AI Value - Consultant Coaching
                  </div>
                  <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                    Moving yourself from basic knowledge to full and tangible self transformation.
                  </p>
                  <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                    <span >
                      <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Register Your Interest</DefaultButton>
                    </span>
                    <span>
                      <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                    </span>
                  </div>
                </div>
              </div>
          )
        }


        {
          data.corporateAdvisory && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
                <div className='relative h-full min-h-[400px]'>
                  <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-m-demo-color px-5 sm:px-10 py-1 text-center max-w-52">
                    Corporate Advisory
                  </span>
                  <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                    The AI Values Advisory
                  </div>
                  <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                    For corportate and technology executives looking to access cutting edge advice to guide them from AI hype to measurable value.
                  </p>
                  <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                    <Link href="/Dashboard/meet">
                      <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Book a Call</DefaultButton>
                    </Link>
                    <span>
                      <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                    </span>
                  </div>
                </div>
                <div>
                  <Image src={IMAGE2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
                </div>
              </div>
          )
        }
      
    </div >
  );
};

export default PersonalCoaching;