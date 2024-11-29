'use client';

import React, { FC, useState, useRef } from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import axios from 'axios';
import Edosa_mark from '@/public/assets/images/O_edosa.png';
import { AiOutlineRobot } from "react-icons/ai";


interface ChatBoxProps {
    messages: string[];
}

const Chatbot: FC = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [data, setData] = useState<any[]>([
        {
            isMe: true,
            content: "Hello, My name is Edosa Odaro and I can .... aaaaa bbbbb cccc ddddd eeee fffff ggggg"
        },
        {
            isMe: false,
            content: "Hello, I and I can .... aaaaa bbbbb cccc ddddd eeee fffff ggggg ddddd cccccc vvvvvv"
        },
        {
            isMe: true,
            content: "Hello, My name is Edosa Odaro"
        },
        {
            isMe: false,
            content: "Hello, I and I can .... aaaaa bbbbb cccc ddddd eeee fffff ggggg ddddd cccccc vvvvvv"
        },
        {
            isMe: true,
            content: "Hello, My name is Edosa Odaro and I can .... aaaaa bbbbb cccc ddddd eeee fffff ggggg"
        },
        {
            isMe: false,
            content: "Hello, I and I can .... aaaaa bbbbb cccc ddddd eeee fffff ggggg ddddd cccccc vvvvvv"
        },
        {
            isMe: true,
            content: "Hello, My name is Edosa Odaro and I can .... aaaaa bbbbb cccc ddddd eeee fffff ggggg"
        },
        {
            isMe: false,
            content: "Hello, I and I can .... aaaaa bbbbb cccc ddddd eeee fffff ggggg ddddd cccccc vvvvvv"
        }
    ]);

    const [inputValue, setInputValue] = useState<string>('');

    React.useEffect(() => {
        console.log('================== Effect =================')

        const sendMsg = async() => {
            const response = await axios.post<any>('/api/openai/chatbot', {prompt: 'Hello, how are you?'});
            console.log(response);
        }

        sendMsg();
    }, []);

    React.useEffect(() => {
        // Scroll to the bottom whenever messages change
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [data]);

    const onHandleText = (event: any) => {
        if (event.key === 'Enter') {
            updateChat();
        }
    };


    const updateChat = () => {
        if (inputValue.trim() === '') return;

        let readyData = [...data];
        readyData.push({
            isMe: true,
            content: inputValue
        })
        setData(readyData);
        setInputValue('');
    }

    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='relative w-full h-[750px] bg-[#FFF] rounded-[22px] pb-3'>
                <h1 className='text-[24px] font-bold font-inter font-[#344054] px-7 py-5 text-text-color'>
                    My Chatbot
                </h1>
                <div className='overflow-auto h-[570px]' ref={containerRef}>
                    {
                        data.map((el: any, index:number) => {
                            return el.isMe ? (
                                <div key={index} className="mx-5 my-3 flex flex-row-reverse">
                                    <div className="w-[40px] aspect-[1/1] border-2 border-solid border-[#F15F31] font-[MuseoModerno] font-bold text-[#344054] rounded-full flex justify-center items-center self-end mb-[8px]">
                                        <Image 
                                            className="w-5" 
                                            alt={'edosa_mark'} 
                                            src={Edosa_mark} 
                                        />
                                    </div>
                                    <div className="mx-3 p-4 w-auto max-w-[550px] h-auto bg-[#FFF7F4] font-[#344054] font-inter rounded-[10px]">
                                        {parse(el.content)}
                                    </div>
                                </div>
                            ) : (
                                <div key={index} className="mx-5 my-3 flex">
                                    <div className="w-[40px] aspect-[1/1] border-2 border-solid border-[#344054] font-[MuseoModerno] font-bold text-[#344054] rounded-full flex justify-center items-center self-end mb-[8px]">
                                        <AiOutlineRobot size={25} fontWeight={600} />
                                    </div>
                                    <div className="mx-3 p-4 w-auto max-w-[550px] h-auto bg-[#F4F4F4] font-[#344054] font-inter rounded-[10px]">
                                        {parse(el.content)}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='absolute bottom-5 w-full px-10'>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Chat here..."
                            className="w-full px-4 py-2 pr-10 border-2 border-orange-500 rounded-[18px] focus:outline-none text-text-color"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={onHandleText}
                        />
                        <Image 
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 hover:cursor-pointer" 
                            alt={'edosa_mark'} 
                            src={Edosa_mark} 
                            onClick={() => updateChat()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatbot;
