'use client';

import React, { FC, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Loading from '@/public/assets/loading/blue.gif';

const times:string[] = [
    '00:00',
    '00:30',
    '01:00',
    '01:30',
    '02:00',
    '02:30',
    '03:00',
    '03:30',
    '04:00',
    '04:30',
    '05:00',
    '05:30',
    '06:00',
    '06:30',
    '07:00',
    '07:30',
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
    '23:00',
    '23:30',
];

const Calendar: FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>({});

    React.useEffect(() => {
        const getCalendar = async() => {
            const response = await axios.get<any>('/api/calendarAdmin/getCalendar');
            setData(response.data);
            setLoading(false);
            console.log(response.data)
        }

        getCalendar();
    }, []);

    const onSave = async() => {
        const res = await axios.post<any>('/api/calendarAdmin/setCalendar', {data});
        if ( res.data.success ) {
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                style: {width: '300px', marginLeft: '0'}
            });
        }
    }

    return (
        <div className='relative w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-[auto] bg-[#FFF] rounded-[22px] p-5 overflow-auto'>
                <h1 className='text-[2rem] font-bold text-text-color'>Calendar Management (Availability)</h1>
                <div>
                    {
                        loading && (
                            <div className='flex justify-center my-5'>
                                <Image src={Loading} alt='loading' className='w-[60px] h-[60px]' />
                            </div>
                        )
                    }
                    {
                        !loading && (
                            <div className='my-5 text-[20px]'>
                                {/* Sunday */}
                                <div className='flex p-5 my-3 text-text-color'>
                                    <div className='w-11/12 flex text-[20px] leading-[40px]'>
                                        <div className='mr-10 font-bold'>SUN</div>
                                        <div>
                                            {
                                                data.sun.length ? (
                                                    <div>
                                                        aa
                                                    </div>
                                                ) : (
                                                    <div>Unavailable</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <span className='w-[50px] aspect-[1/1] text-[30px] rounded-[10px] p-3 hover:cursor-pointer hover:bg-[#eee]'>+</span>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>

                <div className='text-right'>
                    <button 
                        className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        onClick={onSave}
                    >
                        SAVE
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Calendar;