'use client';

import React, { FC, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Loading from '@/public/assets/loading/blue.gif';

interface dataStyle {
    name: string,
    url: string,
    isEdit: boolean
}

const Setting: FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<dataStyle[]>([]);

    React.useEffect(() => {
        const getAssessment = async() => {
            try {
                const res = await axios.get<dataStyle[]>('/api/assessment/getAssessment');
                setData(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        getAssessment();
    }, []);


    // set isEdit = true
    const setEdit = (index: number) => {
        let cloneData = [...data];
        cloneData[index].isEdit = true;
        setData(cloneData);
    }

    // set isEdit = false
    const removeEdit = (index: number) => {
        let cloneData = [...data];
        cloneData[index].isEdit = false;
        setData(cloneData);
        if (cloneData[index].name == '' && cloneData[index].url == '') delItem(index);
    }

    // edit name
    const onName = (e: any, index: number) => {
        let cloneData = [...data];
        cloneData[index].name = e.target.value;
        setData(cloneData);
    }

    // edit url
    const onUrl = (e: any, index: number) => {
        let cloneData = [...data];
        cloneData[index].url = e.target.value;
        setData(cloneData);
    }

    // delete assessment
    const delItem = (index: number) => {
        let cloneData = [...data];
        cloneData.splice(index, 1);
        setData(cloneData);
    }

    // add assessment
    const add = () => {
        let cloneData = [...data];
        cloneData.push({
            name: '',
            url: '',
            isEdit: true
        });
        setData(cloneData);
    }

    // save all assesment
    const save = () => {
        const cloneData = [...data];
        let saveData: any[] = [];
        cloneData.map((el: dataStyle, index: number) => {
            if (el.name) {
                saveData.push({
                    name: el.name,
                    url: el.url
                })
            }
        })
        
        axios.post('/api/assessment/setAssessment', saveData)
            .then((res: any) => {
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
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='relative w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-[auto] bg-[#FFF] rounded-[22px] p-5 overflow-auto'>
                <h1 className='text-[2rem] font-bold text-text-color'>Assessment Management</h1>
                <div>
                    {
                        loading && (
                            <div className='flex justify-center my-5'>
                                <Image src={Loading} alt='loading' className='w-[60px] h-[60px]' />
                            </div>
                        )
                    }
                    {
                        !loading && data.map((el: dataStyle, index:number) => {
                            return (
                                <div key={index} className='flex p-5 my-3 rounded-[10px] bg-[#eee] text-text-color'>
                                    <div className='w-10/12'>
                                        <div>
                                            {
                                                el.isEdit ? (
                                                    <input className='px-1 w-full outline outline-1 outline-gray-400' placeholder='Enter the name of Assessment' value={el.name}  onChange={(e) => onName(e, index)} />
                                                ) : (
                                                    <h1 className='text-[1.2rem] font-[550]'>{el.name}</h1>
                                                )
                                            }
                                        </div>
                                        <div className='mt-2'>
                                            {
                                                el.isEdit ? (
                                                    <input className='px-1 w-full outline outline-1 outline-gray-400' placeholder='Enter the URL of Assessment' value={el.url} onChange={(e) => onUrl(e, index)} />
                                                ) : (
                                                    <p className='font-inter'>{el.url}</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 flex justify-center items-center'>
                                        {
                                            el.isEdit ? (
                                                <span className='hover:cursor-pointer hover:font-bold' onClick={() => removeEdit(index)}>
                                                    Done
                                                </span>
                                            ) : (
                                                <span className='text-[rgb(0,100,180)] hover:cursor-pointer hover:font-bold' onClick={() => setEdit(index)}>
                                                    Edit
                                                </span>
                                            )
                                        }
                                    </div>
                                    <div className='w-1/12 flex justify-center items-center'>
                                        <span className='text-[rgb(170,0,0)] hover:cursor-pointer hover:font-bold' onClick={() => delItem(index)}>
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='text-right'>
                        <button 
                            className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                            onClick={add}
                        >
                            ADD ASSESSMENT
                        </button>
                        <button 
                            className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                            onClick={save}
                        >
                            SAVE ASSESSMENT
                        </button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Setting;