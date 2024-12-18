'use client';

import React, { FC, useState } from 'react';
import LOGO from '@/public/assets/images/logo.png';
import Loading from '@/public/assets/loading/blue.gif';
import Image from 'next/image';
import { MdOutlineCancel } from "react-icons/md";
import DefaultButton from '../../components/buttons/DefaultButton';
import axios from 'axios';
import localFont from "next/font/local";

const lucidaFont = localFont({
    src: "../../fonts/Lucida-Calligraphy.ttf",
    variable: "--font-lucida-calligraphy",
    weight: "100 900",
});



const Page: FC = () => {

    const [member, setMember] = useState<any | undefined>(undefined);
    const [isJoined, setIsJoined] = useState<boolean | undefined>(undefined);
    const [random, setRandom] = useState<number>(0);

    React.useEffect(() => {
        
        if ( localStorage.getItem('edosaMember') ) {
            
            const get_member = localStorage.getItem('edosaMember');
            const member = get_member && JSON.parse(get_member);
            setMember(member);

            const getIsMeCourseMember = async () => {
                const res = await axios.get<any>('/api/12-day-course/get12DayCourse');
                
                let count:number = 0;
                res.data.map((el:any) => {
                    if (el.email == member.email && el.isCourseMember == true) count++;
                })
    
                if (count == 0) setIsJoined(false);
                else setIsJoined(true);
            }
    
            getIsMeCourseMember();
        }
    }, [random]);

    const onJoin = async () => {
        
        if (member.email) {
            setIsJoined(undefined);

            const res = await axios.post<any>('/api/12-day-course/set12DayCourse', { email: member.email });
            if (res.data?.success == true) {
                setRandom( Math.random() );
            }
        } else {
            window.close();
        }
    }

    return (
        <div className={`${lucidaFont.variable} mx-[15px] lg:mx-[auto] my-[1rem] sm:my-[2rem] p-[1.5rem] max-w-[60rem] border border-[rgba(0,200,50,.8)]`} style={{boxShadow: '0px 0px 6px rgba(0,200,50,.8)'}}>
            <div className='mb-5 relative'>
                <Image src={LOGO} width={250} alt='Logo' />
                <MdOutlineCancel className='absolute top-[0] right-[0] w-[25px] h-[25px] text-text-color hover:cursor-pointer' title='Cancel' onClick={() => window.close()} />
            </div>
            <hr />
            <div className='mt-5'>
                <h1 className='text-text-color text-[1.5rem] sm:text-[2rem] font-bold text-center'>12 Day Email Course</h1>
                <p className='mt-3 text-text-color italic text-[1rem] sm:text-[1.5rem] text-center'>You will get an Email per day for 12 days.</p>
            </div>
            <div className='flex justify-center mt-5'>
                {
                    isJoined == undefined && (
                        <Image src={Loading} alt='loading' className='w-[30px] h-[30px]' />
                    )
                }

                {
                    isJoined == false && (
                        <span className='w-[12rem]' onClick={onJoin}>
                            <DefaultButton>JOIN</DefaultButton>
                        </span>
                    )
                }

                {
                    isJoined == true && (
                        <p className='mt-3 text-text-color text-[1rem] sm:text-[1.5rem] text-center font-bold' style={{ fontFamily: 'var(--font-lucida-calligraphy)' }}>You have already joined this course.</p>
                    )
                }
            </div>
        </div>
    );
};

export default Page;