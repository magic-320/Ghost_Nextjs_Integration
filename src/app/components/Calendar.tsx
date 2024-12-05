'use client'
import React, { FC, useState } from "react";
import Image from "next/image";
import Chevron_left from '@/public/assets/svg/chevron-left.svg';
import Chevron_right from '@/public/assets/svg/chevron-right.svg';
import axios from "axios";
import Loading from '@/public/assets/loading/blue.gif';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

// Define an interface for the calendar day items
interface CalendarDay {
    day: number;
    isCurrentMonth: boolean;
    isSelected?: boolean;
    hasDot?: boolean;
    isToday?: boolean;
    info?: any;
}

const Calendar: FC = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [data, setData] = useState<CalendarDay[]>([]);
    const [calendarLoading, setCalendarLoading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    React.useEffect(() => {
        generateCalendarDays(currentDate);
    }, [currentDate, selectedDate]);


    const generateCalendarDays = async(date: Date) => {

        ///////////////////////// Get Gmail of account //////////////////////////
        let myEmail: string = '';
        if ( localStorage.getItem('edosaMember') ) {
            const getMember = localStorage.getItem('edosaMember');
            const member = getMember && JSON.parse(getMember);
            myEmail = member.email;
        }

        ///////////////////////// Get Events //////////////////////////

        let demoEvents:any[] = [];
        if (localStorage.getItem('grant_id')) {
            const response = await axios.post<any>('/api/nylas/getEvents', { grantId: localStorage.getItem('grant_id') });
            response.data.data.map((el:any) => {
                if (el.description == "Meet with Edosa Odaro") demoEvents.push(el)
            })
        }
        
        ///////////////////////// Show Calendar //////////////////////////

        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const startDayOfWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const days: CalendarDay[] = [];

        for (let i = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1; i > 0; i--) {
            const prevDate = new Date(date.getFullYear(), date.getMonth(), -i + 1);
            days.push({ day: prevDate.getDate(), isCurrentMonth: false });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const isToday = i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
            const isSelected = i === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth() && date.getFullYear() === selectedDate.getFullYear();

            let info: any[] = [];
            demoEvents.map((el:any, index:number) => {
                const demoDate = new Date(el.when.startTime * 1000).toISOString();
                const date = demoDate.split('.')[0].split('T')[0];
                const time = demoDate.split('.')[0].split('T')[1];

                const day = Number(date.split('-')[2]);
                if (day == i) {
                    const demoInfo = {
                        date: date,
                        time: time
                    }
                    info.push(demoInfo);
                }
            })
            const isDot = info.length ? true : false;

            days.push({ 
                day: i, 
                isCurrentMonth: true,
                isToday: isToday,
                isSelected: isSelected,
                hasDot: isDot,
                info: info
            });

            setCalendarLoading(false);
            setLoading(false);
        }

        const totalCells = Math.ceil((startDayOfWeek + daysInMonth) / 7) * 7;
        for (let i = 1; days.length < totalCells; i++) {
            days.push({ day: i, isCurrentMonth: false });
        }

        setData(days);
    };

    const handleDateSelect = (day: number) => {
        const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(selected);
        localStorage.setItem('selectDate', new Date(selected).toLocaleDateString('en-CA'));new Date(selected).toLocaleDateString('en-CA');
    };

    const handlePreviousMonth = () => {
        setCalendarLoading(true);
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCalendarLoading(true);
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleTodayClick = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
    };

    return (
        <div className="inline-flex items-start relative bg-white rounded-xl shadow-lg overflow-hidden">
            {
                loading && (
                    <div className='flex justify-center'>
                        <Image src={Loading} alt='loading' className='w-[60px] h-[60px]' />
                    </div>
                )
            }
            {
                !loading && (
                    <div className="flex flex-col w-full items-center relative">
                        <div className="flex flex-col items-start gap-4 px-6 py-5 relative w-full">
                            <div className="flex w-full items-center justify-between">
                                <button 
                                    onClick={handlePreviousMonth}
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
                                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                </div>

                                <button
                                    onClick={handleNextMonth}
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

                            <div className="flex items-center gap-3 w-full">
                                <div className="flex-1 bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2">
                                    <div className="text-gray-900">
                                        {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </div>
                                </div>

                                <button 
                                    onClick={handleTodayClick} 
                                    className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white"
                                >
                                    <span className="font-semibold text-gray-700">Today</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-7 gap-1 w-full text-center mt-4">
                                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                                    <div key={day} className="text-gray-700 font-medium">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            <div className={`grid grid-cols-7 gap-1 w-full mt-2 transition-opacity duration-300`}>
                                {
                                    calendarLoading && (
                                        <div className='flex justify-center items-center w-full h-full absolute top-[0] left-[0] z-[1000] bg-[#FFF] opacity-[.7]'>
                                            <Image src={Loading} alt='loading' className='w-[50px] h-[50px]' />
                                        </div>
                                    )
                                }
                                {
                                    data.map((el, index) => (
                                        <div 
                                            key={index} 
                                            onClick={() => el.isCurrentMonth && handleDateSelect(el.day)}
                                            className={`relative w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-[#eee] 
                                                ${el.isSelected ? "bg-green-400 text-white" : el.isCurrentMonth ? "text-gray-700" : "text-gray-400"} 
                                                ${el.isToday ? "border border-green-500" : ""} `}
                                            id={`tooltip${index}`}
                                        >
                                            
                                            <span>{el.day}</span>
                                            {el.hasDot && (
                                                <div className="absolute w-1 h-1 bg-purple-500 rounded-full bottom-1" />
                                            )}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {
                            data.map((el, index) => (
                                el.hasDot && (
                                    <Tooltip key={index} anchorSelect={`#tooltip${index}`} clickable>
                                        {
                                            el.info.map((j:any, j_index:number) => (
                                                <div key={j_index}>- {j.time} (ISO 8601)</div>
                                            ))
                                        }
                                    </Tooltip>
                                )
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Calendar;
