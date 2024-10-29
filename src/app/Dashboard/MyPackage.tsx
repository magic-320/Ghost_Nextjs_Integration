'use client'
import React, { FC, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import PackageDemoCard from '../components/cards/PackageDemoCard';
import Calendar from '../components/Calendar';

interface MyPackageProps {
    packageName: string
}

const packageDemoCardList = [
    {
        type: 'learn',
        title: "5-day Email Course: Build AI Value Strategy",
        learnURL: '#',
        mainURL: '#',
        buttonName: 'Start Now'
    },
    {
        type: 'read',
        title: "Interactive Workbook",
        learnURL: '#',
        mainURL: '#',
        buttonName: 'Download'
    },
    {
        type: 'read',
        title: "Book Discounts",
        learnURL: '#',
        mainURL: '#',
        buttonName: 'Redeem'
    },
    {
        type: 'read',
        title: "My Newsletter",
        learnURL: '#',
        mainURL: '#',
        buttonName: 'Read Now'
    }
]

const MyPackage: FC <MyPackageProps> = ({
    packageName
}: MyPackageProps) => {

    return (
        <div className="w-full h-auto bg-[#F9F9F9] rounded-[22px] px-7 py-10 block xl:flex">
            <div className="w-full xl:w-8/12 rounded-[22px] p-7 bg-[#FFF] mr-3">
                <div className="block md:flex justify-between">
                    <h1 className='text-[20px] md:text-[24px] font-bold font-inter'>
                        My Package: {packageName}
                    </h1>
                    <span className='text-[12px] underline font-bold font-inter my-3'>
                        <Link href="#">Show all</Link>
                    </span>
                </div>
                <div className='mt-3 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        packageDemoCardList.map((el: any, index) => (
                            <PackageDemoCard 
                                key={index}
                                type={el.type} 
                                title={el.title} 
                                learnURL={el.learnURL} 
                                mainURL={el.mainURL} 
                                buttonName={el.buttonName} 
                            />
                        ))
                    }
                </div>
            </div>

            <div className="w-full xl:w-4/12">
                <div className='rounded-[22px] bg-[#FFF] rounded-[22px] p-7'>
                    <h1 className='text-[23px] font-bold font-inter'>Latest</h1>
                    <div className="flex items-start space-x-2">
                        <span className="w-[10px] h-[7px] rounded-full bg-purple-500 mt-[10px]"></span>
                        <p className="text-gray-800 font-inter text-[18px]">
                            You can now join Edosa’s Maven course about Demystifying & Accelerating AI Value
                        </p>
                    </div>
                </div>

                <div className='rounded-[22px] bg-[#FFF] rounded-[22px] p-7 mt-3'>
                    <div className='flex justify-center'>
                        <div className="w-[30px] h-[30px] flex justify-center items-center mr-2 rounded-[18px] bg-[#95da79] text-[14px] text-[#FFF] font-bold">M</div>
                        <span className='text-[23px] font-bold font-inter'>Book a Call with Edosa</span>
                    </div>
                    <div className='text-center'>
                        <Calendar />
                    </div>

                </div>
            </div>
        </div>
    )
};

export default MyPackage;