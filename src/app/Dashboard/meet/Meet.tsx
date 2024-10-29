'use client';

import React, { FC, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import DefaultButton from '../../components/buttons/DefaultButton';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import Calendar from '../../components/Calendar';

const bookTimes = [
    {
        time: "3:30 pm"
    },
    {
        time: "4:00 pm"
    },
    {
        time: "4:30 pm"
    },
    {
        time: "5:00 pm"
    },
    {
        time: "5:30 pm"
    }
]

const Meet: FC = () => {

    const [timezoneDropdown, setTimezoneDropdown] = useState<boolean>(false);

    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px]'>
                <h1 className='text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-7 py-5 text-text-color'>
                    Services &gt; Meet &gt; Personal Coaching
                </h1>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-5">
                    <div className='w-full h-full bg-m-demo-color rounded-[22px] p-4'>
                        <h1 className='text-[20px] md:text-[24px] font-bold text-center text-[#101828]'>
                            Personal Coaching
                        </h1>
                        <div className='text-center py-3'>
                            <Calendar />
                        </div>
                        <div 
                            className='w-full flex justify-center hover:cursor-pointer' 
                            onClick={() => setTimezoneDropdown(!timezoneDropdown)}
                        >
                            Eastern Time - US & Canada <span className="ml-2 my-1">{timezoneDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="text-[25px] md:text-[36px] leading-11 font-bold text-text-color my-5">
                            Book your slot with Edosa
                        </div>

                        {
                            bookTimes.map((el:any) => (
                                <div className='flex justify-center items-center hover:cursor-pointer w-full h-[60px] text-text-color border border-solid border-m-main-color rounded-[22px] px-6 mt-3 font-bold text-m-main-color'>
                                    {el.time}
                                </div>
                            ))
                        }

                        

                        <div className='mt-12 flex gap-3 text-center justify-center w-full'>
                            <Link href="#" className="w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                                <button>Slots Remaining 1</button>
                            </Link>
                            <Link href="#">
                                <DefaultButton className='w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                    Book Now
                                </DefaultButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meet;