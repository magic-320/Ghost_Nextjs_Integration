'use client'
import React, { FC, useState } from "react";
import Image from "next/image";
import Chevron_left from '@/public/assets/svg/chevron-left.svg';
import Chevron_right from '@/public/assets/svg/chevron-right.svg';
import axios from "axios";


// Define an interface for the calendar day items
interface CalendarDay {
    day: number;
    isCurrentMonth: boolean;
    isSelected?: boolean;
    hasDot?: boolean;
    isToday?: boolean;
}

const Calendar: FC = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [data, setData] = useState<CalendarDay[]>([]);
    const [isAnimating, setIsAnimating] = useState(false);

    React.useEffect(() => {
        const getEvents = async() => {
            try {
                const response = await axios.post('/api/calendly/list-events');
                console.log(response.data)
            } catch (err) {
                console.log(err);
            }
        };

        getEvents();
    }, []);

    React.useEffect(() => {
        generateCalendarDays(currentDate);
    }, [currentDate, selectedDate]);

    const generateCalendarDays = (date: Date) => {
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

            days.push({ 
                day: i, 
                isCurrentMonth: true,
                isToday: isToday,
                isSelected: isSelected,
            });
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
    };

    const handlePreviousMonth = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
            setIsAnimating(false);
        }, 300);
    };

    const handleNextMonth = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
            setIsAnimating(false);
        }, 300);
    };

    const handleTodayClick = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
    };

    return (
        <div className="inline-flex items-start relative bg-white rounded-xl shadow-lg overflow-hidden">
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

                    <div className={`grid grid-cols-7 gap-1 w-full mt-2 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                        {data.map((el, index) => (
                            <div 
                                key={index} 
                                onClick={() => el.isCurrentMonth && handleDateSelect(el.day)}
                                className={`relative w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-[#eee] 
                                    ${el.isSelected ? "bg-green-400 text-white" : el.isCurrentMonth ? "text-gray-700" : "text-gray-400"} 
                                    ${el.isToday ? "border border-green-500" : ""}`}
                            >
                                <span>{el.day}</span>
                                {el.hasDot && (
                                    <div className="absolute w-1 h-1 bg-purple-500 rounded-full bottom-1" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
