'use client'
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import axios from "axios";


interface SidebarProps {
    onCollapse?: boolean; // Define this based on your needs
}

const items = {
    dashboard: 'My Dashboard',
    learn: 'Learn',
    read: 'Read',
    watch: 'Watch',
    meet: 'Meet',
    chatbot: 'My Chatbot',
    newsletter: 'My Newsletter',
    assessment: 'Assessment'
}

function Sidebar( { onCollapse }: SidebarProps ) {

    const [active, setActive] = useState<string>('');
    const [serviceHidden, setServiceHiden] = useState<boolean>(false);
    const [isChatbot, setIsChatbot] = useState<boolean>(true);
    const [expand, setExpand] = useState<boolean>();

    const pathname = usePathname();

    React.useEffect(() => {

        onCollapse ? setExpand(false) : setExpand(true);

        switch (pathname) {
            case "/Dashboard":
                setActive('dashboard');
                break;
            case "/Dashboard/learn":
                setActive('learn');
                break;
            case "/Dashboard/read":
                setActive('read');
                break;
            case "/Dashboard/watch":
                setActive('watch');
                break;
            case "/Dashboard/meet":
                setActive('meet');
                break;
            case "/Dashboard/chatbot":
                setActive('chatbot');
                break;
            case "/Dashboard/newsletter":
                setActive('newsletter');
                break;
            case "/Dashboard/assessment":
                setActive('assessment');
                break;
            default:
                break;
        }


        // get Chatbot available status
        const getChatbotAvailable = async () => {
            const response = await axios.get<any>('/api/chatbotAdmin/getChatbot');
            setIsChatbot(response.data.enable);
        };

        getChatbotAvailable();

    }, []);

    return (
        <div className="w-full h-full py-3 lg:py-10 text-[17px] xl:text-[22px] bg-[#F9F9F9] rounded-[22px] lg:block">
            {
                onCollapse && (
                    <div 
                        className="text-center lg:text-left mx-[auto] font-bold text-[20px] text-text-color hover:cursor-pointer relative"
                        onClick={() => setExpand(!expand)}
                    >
                        {items[active as keyof typeof items]}
                        <span className="absolute top-1 right-5">
                            { !expand ? <IoIosArrowDown /> : <IoIosArrowUp /> }
                        </span>
                    </div>
                )
            }
            {
                expand && (
                    <div className="text-center lg:text-left mx-[auto] max-w-[125px] xl:max-w-[155px] mt-5 lg:mt-0">
                        <Link href="/Dashboard">
                            <div
                                className={`hover:cursor-pointer ${active == 'dashboard' && 'font-bold'}`}
                                onClick={() => {
                                    setActive('dashboard');
                                    onCollapse && setExpand(false);
                                }}
                            >
                                My Dashboard
                            </div>
                        </Link>
                        <div
                            className="mt-2 lg:mt-4 hover:cursor-pointer flex"
                            onClick={() => setServiceHiden(!serviceHidden)}
                        >
                            My Services <span className="ml-2 md:ml-3 mt-1 md:mt-2">{serviceHidden ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                        </div>
                        <div className={`px-10 ${serviceHidden && 'hidden'}`}>
                            <Link href="/Dashboard/learn">
                                <div
                                    className={`mt-2 lg:mt-4 hover:cursor-pointer ${active == 'learn' && 'font-bold'}`}
                                    onClick={() => {
                                        setActive('learn');
                                        onCollapse && setExpand(false);
                                    }}
                                >
                                    Learn
                                </div>
                            </Link>
                            <Link href="/Dashboard/read">
                                <div
                                    className={`mt-2 lg:mt-4 hover:cursor-pointer ${active == 'read' && 'font-bold'}`}
                                    onClick={() => {
                                        setActive('read');
                                        onCollapse && setExpand(false);
                                    }}
                                >
                                    Read
                                </div>
                            </Link>
                            <Link href="/Dashboard/watch">
                                <div
                                    className={`mt-2 lg:mt-4 hover:cursor-pointer ${active == 'watch' && 'font-bold'}`}
                                    onClick={() => {
                                        setActive('watch');
                                        onCollapse && setExpand(false);
                                    }}
                                >
                                    Watch
                                </div>
                            </Link>
                            <Link href="/Dashboard/meet">
                                <div
                                    className={`mt-2 lg:mt-4 hover:cursor-pointer ${active == 'meet' && 'font-bold'}`}
                                    onClick={() => {
                                        setActive('meet');
                                        onCollapse && setExpand(false);
                                    }}
                                >
                                    Meet
                                </div>
                            </Link>
                        </div>
                        {isChatbot && (
                            <Link href="/Dashboard/chatbot">
                                <div
                                    className={`mt-2 lg:mt-4 hover:cursor-pointer ${active == 'chatbot' && 'font-bold'}`}
                                    onClick={() => {
                                        setActive('chatbot');
                                        onCollapse && setExpand(false);
                                    }}
                                >
                                    My Chatbot
                                </div>
                            </Link>
                        )}
                        <Link href="/Dashboard/newsletter">
                            <div
                                className={`mt-2 lg:mt-4 hover:cursor-pointer ${active == 'newsletter' && 'font-bold'}`}
                                onClick={() => {
                                    setActive('newsletter');
                                    onCollapse && setExpand(false);
                                }}
                            >
                                My Newsletter
                            </div>
                        </Link>
                        <Link href="/Dashboard/assessment">
                            <div
                                className={`mt-2 lg:mt-4 hover:cursor-pointer ${active == 'assessment' && 'font-bold'}`}
                                onClick={() => {
                                    setActive('assessment');
                                    onCollapse && setExpand(false);
                                }}
                            >
                                Assessment
                            </div>
                        </Link>

                    </div>
                )
            }
        </div>
    );
}

export default Sidebar;