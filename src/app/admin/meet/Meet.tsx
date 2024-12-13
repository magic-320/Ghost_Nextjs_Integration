'use client';

import React, { FC, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Loading from '@/public/assets/loading/blue.gif';


const Meet: FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>({});

    React.useEffect(() => {
        const getWatch = async() => {
            const response = await axios.get<any>('/api/meetAdmin/getMeet');
            setData(response.data);
            setLoading(false);
        }

        getWatch();
    }, []);

    const onSave = async() => {
        const res = await axios.post<any>('/api/meetAdmin/setMeet', {data});
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
                <h1 className='text-[2rem] font-bold text-text-color'>Meet Management</h1>
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
                            <div>
                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-11/12 text-[18px]'>
                                        <i className='text-m-main-color'>The AI Value Advisory Network</i>&nbsp;&nbsp;&nbsp; The AI Value Advisory Network
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.meet1} onChange={() => setData({...data, meet1: !data.meet1})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-11/12 text-[18px]'>
                                        <i className='text-m-main-color'>Personal Coaching</i>&nbsp;&nbsp;&nbsp; AI Value - Consultant Coaching
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.personalCoaching} onChange={() => setData({...data, personalCoaching: !data.personalCoaching})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-11/12 text-[18px]'>
                                        <i className='text-m-main-color'>Corporate Advisory</i>&nbsp;&nbsp;&nbsp; The AI Values Advisory
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.corporateAdvisory} onChange={() => setData({...data, corporateAdvisory: !data.corporateAdvisory})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
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

export default Meet;