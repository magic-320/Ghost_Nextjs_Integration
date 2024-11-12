'use client';

import React, { FC, useState } from 'react';
import { FaStar } from "react-icons/fa";

const Assessment: FC = () => {

    const [rating, setRating] = useState<number>(3);

    React.useEffect(() => {

    }, [])

    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-[600px] bg-[#FFF] rounded-[22px]'>
                <h1 className='text-[24px] font-bold font-inter font-[#344054] px-7 pt-5 text-text-color'>
                    Assessment
                </h1>
                <div className='mx-3 my-2'>
                    <div className='flex gap-2'>
                        <FaStar size={35} color='#aaa'/>
                        <FaStar size={35} color='#aaa'/>
                        <FaStar size={35} color='#aaa'/>
                        <FaStar size={35} color='#aaa'/>
                        <FaStar size={35} color='#aaa'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assessment;