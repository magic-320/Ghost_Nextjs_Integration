'use client';

import React, { FC, useState } from 'react';

const Assessment: FC = () => {

    const [rating, setRating] = useState<number>(3);

    React.useEffect(() => {

    }, [])

    return (
        <div className='relative w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <span className='absolute top-2 right-10 text-[rgb(0,100,250)] hover:cursor-pointer hover:text-[rgb(0,150,250)]' onClick={() => window.open('https://personal-value-driven.scoreapp.com/')}>Expand</span>
            <div className='w-full h-[600px] bg-[#FFF] rounded-[22px]'>
                <embed className='w-full h-full rounded-[22px]' src='https://personal-value-driven.scoreapp.com/'></embed>
            </div>
        </div>
    )
}

export default Assessment;