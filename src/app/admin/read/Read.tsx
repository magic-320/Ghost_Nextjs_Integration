'use client';

import React, { FC, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Loading from '@/public/assets/loading/blue.gif';


const Read: FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>({});

    React.useEffect(() => {
        const getCourse = async() => {
            const response = await axios.get<any>('/api/readAdmin/getBooks');
            setData(response.data);
            setLoading(false);
        }

        getCourse();
    }, []);

    const onSave = async() => {
        const res = await axios.post<any>('/api/readAdmin/setBooks', {data});
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
        <div className='relative w-full h-full bg-[#F9F9F9] rounded-[22px] px-4 sm:px-7 py-5 sm:py-10'>
            <div className='w-full h-[auto] bg-[#FFF] rounded-[22px] p-3 sm:p-5 overflow-auto'>
                <h1 className='text-[1.5rem] sm:text-[2rem] font-bold text-text-color'>Read Management</h1>
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
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>Blogs</i> 
                                        <div>The AI Values Podcast</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.blogs} onChange={() => setData({...data, blogs: !data.blogs})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>eBook 1</i> 
                                        <div>Coming Soon</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.eBook1} onChange={() => setData({...data, eBook1: !data.eBook1})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>eBook 2</i> 
                                        <div>Coming Soon</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.eBook2} onChange={() => setData({...data, eBook2: !data.eBook2})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>Book 1</i> 
                                        <div>Coming Soon</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.book1} onChange={() => setData({...data, book1: !data.book1})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>Book 2</i> 
                                        <div>Value Driven Data - The Workbook (Anniversary Special)</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.book2} onChange={() => setData({...data, book2: !data.book2})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>
                                
                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>Book 3</i> 
                                        <div>Value Driven Data</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.book3} onChange={() => setData({...data, book3: !data.book3})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>Book 4</i> 
                                        <div>Making Data Work</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.book4} onChange={() => setData({...data, book4: !data.book4})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>Book 5</i> 
                                        <div>Value Driven Data - The Executive Handbook</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.book5} onChange={() => setData({...data, book5: !data.book5})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>Book 6</i> 
                                        <div>BULK ORDER</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.book6} onChange={() => setData({...data, book6: !data.book6})} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                </div>

                                <div className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12 sm:w-11/12 text-[16px] sm:text-[18px]'>
                                        <i className='text-r-main-color'>Book 7</i> 
                                        <div>PERSONALISED ORDER</div>
                                    </div>
                                    <div className='w-2/12 sm:w-1/12 flex justify-center items-center'>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" defaultChecked={data.book7} onChange={() => setData({...data, book7: !data.book7})} />
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

export default Read;