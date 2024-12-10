'use client';

import React, { FC, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Loading from '@/public/assets/loading/blue.gif';

const days:string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

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
        }

        getCalendar();
    }, []);

    const onSave = async() => {
        let validCount:number = 0;

        days.map((day:string, index:number) => {
            data[`${day}`].length && data[`${day}`].map((el:any, i:number) => {
                if (el.start >= el.end) {
                        validCount++;
                        const D = day.toUpperCase();
                        toast.error(`Check the Start and End times in ${D}`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                            style: {width: '350px', marginLeft: '-50px'}
                        });
                }
            })
        })

        if ( validCount === 0 ) {
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
    }


    // change time
    const onChangeSunStart = (e: any, index: number) => {
        let demoData = {...data};
        demoData.sun[index].start = e.target.value;
        setData(demoData);
    }

    const onChangeSunEnd = (e: any, index: number) => {
        let demoData = {...data};
        demoData.sun[index].end = e.target.value;
        setData(demoData);
    }

    const onChangeMonStart = (e: any, index: number) => {
        let demoData = {...data};
        demoData.mon[index].start = e.target.value;
        setData(demoData);
    }

    const onChangeMonEnd = (e: any, index: number) => {
        let demoData = {...data};
        demoData.mon[index].end = e.target.value;
        setData(demoData);
    }

    const onChangeTueStart = (e: any, index: number) => {
        let demoData = {...data};
        demoData.tue[index].start = e.target.value;
        setData(demoData);
    }

    const onChangeTueEnd = (e: any, index: number) => {
        let demoData = {...data};
        demoData.tue[index].end = e.target.value;
        setData(demoData);
    }

    const onChangeWedStart = (e: any, index: number) => {
        let demoData = {...data};
        demoData.wed[index].start = e.target.value;
        setData(demoData);
    }

    const onChangeWedEnd = (e: any, index: number) => {
        let demoData = {...data};
        demoData.wed[index].end = e.target.value;
        setData(demoData);
    }

    const onChangeThuStart = (e: any, index: number) => {
        let demoData = {...data};
        demoData.thu[index].start = e.target.value;
        setData(demoData);
    }

    const onChangeThuEnd = (e: any, index: number) => {
        let demoData = {...data};
        demoData.thu[index].end = e.target.value;
        setData(demoData);
    }

    const onChangeFriStart = (e: any, index: number) => {
        let demoData = {...data};
        demoData.fri[index].start = e.target.value;
        setData(demoData);
    }

    const onChangeFriEnd = (e: any, index: number) => {
        let demoData = {...data};
        demoData.fri[index].end = e.target.value;
        setData(demoData);
    }

    const onChangeSatStart = (e: any, index: number) => {
        let demoData = {...data};
        demoData.sat[index].start = e.target.value;
        setData(demoData);
    }

    const onChangeSatEnd = (e: any, index: number) => {
        let demoData = {...data};
        demoData.sat[index].end = e.target.value;
        setData(demoData);
    }


    // remove time
    const onRemoveSun = (index: number) => {
        let demoData = {...data};
        demoData.sun.splice(index, 1);
        setData(demoData);
    }

    const onRemoveMon = (index: number) => {
        let demoData = {...data};
        demoData.mon.splice(index, 1);
        setData(demoData);
    }

    const onRemoveTue = (index: number) => {
        let demoData = {...data};
        demoData.tue.splice(index, 1);
        setData(demoData);
    }

    const onRemoveWed = (index: number) => {
        let demoData = {...data};
        demoData.wed.splice(index, 1);
        setData(demoData);
    }

    const onRemoveThu = (index: number) => {
        let demoData = {...data};
        demoData.thu.splice(index, 1);
        setData(demoData);
    }

    const onRemoveFri = (index: number) => {
        let demoData = {...data};
        demoData.fri.splice(index, 1);
        setData(demoData);
    }

    const onRemoveSat = (index: number) => {
        let demoData = {...data};
        demoData.sat.splice(index, 1);
        setData(demoData);
    }


    // add time
    const addTimeSun = () => {
        const tmpTime = {
            start: '00:00',
            end: '00:00'
        };
        let demoData = {...data};
        demoData.sun.push(tmpTime);
        setData(demoData);
    }

    const addTimeMon = () => {
        const tmpTime = {
            start: '00:00',
            end: '00:00'
        };
        let demoData = {...data};
        demoData.mon.push(tmpTime);
        setData(demoData);
    }

    const addTimeTue = () => {
        const tmpTime = {
            start: '00:00',
            end: '00:00'
        };
        let demoData = {...data};
        demoData.tue.push(tmpTime);
        setData(demoData);
    }

    const addTimeWed = () => {
        const tmpTime = {
            start: '00:00',
            end: '00:00'
        };
        let demoData = {...data};
        demoData.wed.push(tmpTime);
        setData(demoData);
    }

    const addTimeThu = () => {
        const tmpTime = {
            start: '00:00',
            end: '00:00'
        };
        let demoData = {...data};
        demoData.thu.push(tmpTime);
        setData(demoData);
    }

    const addTimeFri = () => {
        const tmpTime = {
            start: '00:00',
            end: '00:00'
        };
        let demoData = {...data};
        demoData.fri.push(tmpTime);
        setData(demoData);
    }

    const addTimeSat = () => {
        const tmpTime = {
            start: '00:00',
            end: '00:00'
        };
        let demoData = {...data};
        demoData.sat.push(tmpTime);
        setData(demoData);
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
                                <div className='flex px-5 my-4 text-text-color'>
                                    <div className='w-11/12 block sm:flex text-[20px] leading-[40px]'>
                                        <div className='w-[5rem] pt-1 font-bold'>SUN</div>
                                        <div>
                                            {
                                                data.sun.length ? (
                                                    <div>
                                                        {
                                                            data.sun.map((element:any, index:number) => (
                                                                <div key={index} className='mb-2'>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.start} onChange={(e) => onChangeSunStart(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span> &nbsp;-&nbsp; </span>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.end} onChange={(e) => onChangeSunEnd(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee] ml-3' onClick={() => onRemoveSun(index)}>&times;</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='pt-1 text-[#aaa]'>Unavailable</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee]' onClick={addTimeSun}>&#43;</span>
                                    </div>
                                </div>

                                {/* Monday */}
                                <div className='flex px-5 my-4 text-text-color'>
                                    <div className='w-11/12 block sm:flex text-[20px] leading-[40px]'>
                                        <div className='w-[5rem] pt-1 font-bold'>MON</div>
                                        <div>
                                            {
                                                data.mon.length ? (
                                                    <div>
                                                        {
                                                            data.mon.map((element:any, index:number) => (
                                                                <div key={index} className='mb-2'>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.start} onChange={(e) => onChangeMonStart(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span> &nbsp;-&nbsp; </span>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.end} onChange={(e) => onChangeMonEnd(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee] ml-3' onClick={() => onRemoveMon(index)}>&times;</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='pt-1 text-[#aaa]'>Unavailable</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee]' onClick={addTimeMon}>&#43;</span>
                                    </div>
                                </div>

                                {/* Tuesday */}
                                <div className='flex px-5 my-4 text-text-color'>
                                    <div className='w-11/12 block sm:flex text-[20px] leading-[40px]'>
                                        <div className='w-[5rem] pt-1 font-bold'>TUE</div>
                                        <div>
                                            {
                                                data.tue.length ? (
                                                    <div>
                                                        {
                                                            data.tue.map((element:any, index:number) => (
                                                                <div key={index} className='mb-2'>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.start} onChange={(e) => onChangeTueStart(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span> &nbsp;-&nbsp; </span>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.end} onChange={(e) => onChangeTueEnd(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee] ml-3' onClick={() => onRemoveTue(index)}>&times;</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='pt-1 text-[#aaa]'>Unavailable</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee]' onClick={addTimeTue}>&#43;</span>
                                    </div>
                                </div>

                                {/* Wednesday */}
                                <div className='flex px-5 my-4 text-text-color'>
                                    <div className='w-11/12 block sm:flex text-[20px] leading-[40px]'>
                                        <div className='w-[5rem] pt-1 font-bold'>WED</div>
                                        <div>
                                            {
                                                data.wed.length ? (
                                                    <div>
                                                        {
                                                            data.wed.map((element:any, index:number) => (
                                                                <div key={index} className='mb-2'>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.start} onChange={(e) => onChangeWedStart(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span> &nbsp;-&nbsp; </span>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.end} onChange={(e) => onChangeWedEnd(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee] ml-3' onClick={() => onRemoveWed(index)}>&times;</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='pt-1 text-[#aaa]'>Unavailable</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee]' onClick={addTimeWed}>&#43;</span>
                                    </div>
                                </div>

                                {/* Thursday */}
                                <div className='flex px-5 my-4 text-text-color'>
                                    <div className='w-11/12 block sm:flex text-[20px] leading-[40px]'>
                                        <div className='w-[5rem] pt-1 font-bold'>THU</div>
                                        <div>
                                            {
                                                data.thu.length ? (
                                                    <div>
                                                        {
                                                            data.thu.map((element:any, index:number) => (
                                                                <div key={index} className='mb-2'>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.start} onChange={(e) => onChangeThuStart(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span> &nbsp;-&nbsp; </span>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.end} onChange={(e) => onChangeThuEnd(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee] ml-3' onClick={() => onRemoveThu(index)}>&times;</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='pt-1 text-[#aaa]'>Unavailable</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee]' onClick={addTimeThu}>&#43;</span>
                                    </div>
                                </div>

                                {/* Friday */}
                                <div className='flex px-5 my-4 text-text-color'>
                                    <div className='w-11/12 block sm:flex text-[20px] leading-[40px]'>
                                        <div className='w-[5rem] pt-1 font-bold'>FRI</div>
                                        <div>
                                            {
                                                data.fri.length ? (
                                                    <div>
                                                        {
                                                            data.fri.map((element:any, index:number) => (
                                                                <div key={index} className='mb-2'>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.start} onChange={(e) => onChangeFriStart(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span> &nbsp;-&nbsp; </span>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.end} onChange={(e) => onChangeFriEnd(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee] ml-3' onClick={() => onRemoveFri(index)}>&times;</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='pt-1 text-[#aaa]'>Unavailable</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee]' onClick={addTimeFri}>&#43;</span>
                                    </div>
                                </div>

                                {/* Saturday */}
                                <div className='flex px-5 my-4 text-text-color'>
                                    <div className='w-11/12 block sm:flex text-[20px] leading-[40px]'>
                                        <div className='w-[5rem] pt-1 font-bold'>SAT</div>
                                        <div>
                                            {
                                                data.sat.length ? (
                                                    <div>
                                                        {
                                                            data.sat.map((element:any, index:number) => (
                                                                <div key={index} className='mb-2'>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.start} onChange={(e) => onChangeSatStart(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span> &nbsp;-&nbsp; </span>
                                                                    <select className='border border-[#aaa] border-solid rounded-[10px] px-4 py-3 text-[18px]' value={element.end} onChange={(e) => onChangeSatEnd(e, index)}>
                                                                        {
                                                                            times.map((el:string, i:number) => (<option key={i}>{el}</option>))
                                                                        }
                                                                    </select>
                                                                    <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee] ml-3' onClick={() => onRemoveSat(index)}>&times;</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                ) : (
                                                    <div className='pt-1 text-[#aaa]'>Unavailable</div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='w-1/12 text-center'>
                                        <span className='px-3 py-2 text-[30px] rounded-[10px] hover:cursor-pointer hover:bg-[#eee]' onClick={addTimeSat}>&#43;</span>
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