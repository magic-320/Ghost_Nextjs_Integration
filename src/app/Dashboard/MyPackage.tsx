'use client'
import React, { FC, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import PackageDemoCard from '../components/cards/PackageDemoCard';
import Chevron_left from '@/public/assets/svg/chevron-left.svg';
import Chevron_right from '@/public/assets/svg/chevron-right.svg';

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


                        {/* Calendar */}
                        <div className="inline-flex items-start relative bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="flex flex-col w-full items-center relative">
                                {/* Header with navigational arrows and month display */}
                                <div className="flex flex-col items-start gap-4 px-6 py-5 relative w-full">
                                    <div className="flex w-full items-center justify-between">
                                        <button 
                                            className="p-2 rounded-lg hover:bg-gray-100" 
                                            aria-label="Previous month"
                                        >
                                            <Image 
                                                className="w-5 h-5"
                                                alt="Chevron left"
                                                src={Chevron_left}
                                            />
                                        </button>

                                        <div className="font-semibold text-gray-700">
                                            January 2024
                                        </div>

                                        <button
                                            className="p-2 rounded-lg hover:bg-gray-100" 
                                            aria-label="Next month"
                                        >
                                            <Image 
                                                className="w-5 h-5"
                                                alt="Chevron right"
                                                src={Chevron_right}
                                            />
                                        </button>
                                    </div>

                                    {/* Date input and Today button */}
                                    <div className="flex items-center gap-3 w-full">
                                        <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2">
                                            <div className="text-gray-900">
                                                Jan 6, 2024
                                            </div>
                                        </div>

                                        <button className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white">
                                            <span className="font-semibold text-gray-700">Today</span>
                                        </button>
                                    </div>

                                    {/* Weekdays */}
                                    <div className="grid grid-cols-7 gap-1 w-full text-center mt-4">
                                        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                                            <div key={day} className="text-gray-700 font-medium">
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Calendar days */}
                                    <div className="grid grid-cols-7 gap-1 w-full mt-2">
                                        {[
                                            { day: 26, isCurrentMonth: false, hasDot: true },
                                            { day: 27, isCurrentMonth: false },
                                            { day: 28, isCurrentMonth: false },
                                            { day: 29, isCurrentMonth: false },
                                            { day: 30, isCurrentMonth: false },
                                            { day: 31, isCurrentMonth: false },
                                            { day: 1, isCurrentMonth: true },
                                            { day: 2, isCurrentMonth: true },
                                            { day: 3, isCurrentMonth: true },
                                            { day: 4, isCurrentMonth: true },
                                            { day: 5, isCurrentMonth: true },
                                            { day: 6, isCurrentMonth: true, isSelected: true },
                                            { day: 7, isCurrentMonth: true },
                                            { day: 8, isCurrentMonth: true },
                                            { day: 9, isCurrentMonth: true },
                                            { day: 10, isCurrentMonth: true },
                                            { day: 11, isCurrentMonth: true, hasDot: true },
                                            { day: 12, isCurrentMonth: true },
                                            { day: 13, isCurrentMonth: true },
                                            { day: 14, isCurrentMonth: true },
                                            { day: 15, isCurrentMonth: true },
                                            { day: 16, isCurrentMonth: true },
                                            { day: 17, isCurrentMonth: true }, 
                                            { day: 18, isCurrentMonth: true },
                                            { day: 19, isCurrentMonth: true },
                                            { day: 20, isCurrentMonth: true },
                                            { day: 21, isCurrentMonth: true },
                                            { day: 22, isCurrentMonth: true },
                                            { day: 23, isCurrentMonth: true },
                                            { day: 24, isCurrentMonth: true, hasDot: true },
                                            { day: 25, isCurrentMonth: true },
                                            { day: 26, isCurrentMonth: true },
                                            { day: 27, isCurrentMonth: true },
                                            { day: 28, isCurrentMonth: true },
                                            { day: 29, isCurrentMonth: true }, 
                                            { day: 30, isCurrentMonth: true },
                                            { day: 31, isCurrentMonth: true },
                                            { day: 1, isCurrentMonth: false },
                                            { day: 2, isCurrentMonth: false },
                                            { day: 3, isCurrentMonth: false },
                                            { day: 4, isCurrentMonth: false },
                                            { day: 5, isCurrentMonth: false },
                                        ].map(({ day, isCurrentMonth, isSelected, hasDot }) => (
                                            <div 
                                                key={day} 
                                                className={`relative w-10 h-10 flex items-center justify-center rounded-full ${isSelected ? "bg-green-400 text-white" : isCurrentMonth ? "text-gray-700" : "text-gray-400"}`}
                                            >
                                                <span>{day}</span>
                                                {hasDot && (
                                                    <div className="absolute w-1 h-1 bg-purple-500 rounded-full bottom-1" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
};

export default MyPackage;