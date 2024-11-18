'use client'
import React, { FC, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import Link from "next/link";
import { usePathname } from 'next/navigation';


const Sidebar: FC = () => {

    const [active, setActive] = useState<string>('');
    const [serviceHidden, setServiceHiden] = useState<boolean>(false);

    const pathname = usePathname();

    React.useEffect(() => {
        
        switch(pathname) {
            case "/dashboard":
                setActive('dashboard');
                break;
            case "/dashboard/learn":
                setActive('learn');
                break;
            case "/dashboard/read":
                setActive('read');
                break;
            case "/dashboard/watch":
                setActive('watch');
                break;
            case "/dashboard/meet":
                setActive('meet');
                break;
            case "/dashboard/newsletter":
                setActive('newsletter');
                break;
            case "/dashboard/assessment":
                setActive('assessment');
                break;
            case "/dashboard/settings":
                setActive('settings');
                break;
            default:
                break;
        }

    }, [])

    return (
        <div className="w-full h-full py-10 text-[17px] xl:text-[22px] bg-[#F9F9F9] rounded-[22px] lg:block flex justify-center">
            <div className="text-center lg:text-left mx-[auto] max-w-[125px] xl:max-w-[155px]">
                <Link href="/dashboard">
                    <div 
                        className={`hover:cursor-pointer ${active == 'dashboard' && 'font-bold'}`} 
                        onClick={() => setActive('dashboard')}
                    >
                        My Dashboard
                    </div>
                </Link>
                <div 
                    className="mt-4 hover:cursor-pointer flex" 
                    onClick={() => setServiceHiden(!serviceHidden)}
                >
                    My Services <span className="ml-2 md:ml-3 mt-1 md:mt-2">{serviceHidden ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                </div>
                    <div className={`px-10 ${serviceHidden && 'hidden'}`}>
                        <Link href="/dashboard/learn">
                            <div 
                                className={`mt-4 hover:cursor-pointer ${active == 'learn' && 'font-bold'}`}
                                onClick={() => setActive('learn')}
                            >
                                Learn
                            </div>
                        </Link>
                        <Link href="/dashboard/read">
                            <div 
                                className={`mt-4 hover:cursor-pointer ${active == 'read' && 'font-bold'}`}
                                onClick={() => setActive('read')}
                            >
                                Read
                            </div>
                        </Link>
                        <Link href="/dashboard/watch">
                            <div 
                                className={`mt-4 hover:cursor-pointer ${active == 'watch' && 'font-bold'}`}
                                onClick={() => setActive('watch')}
                            >
                                Watch
                            </div>
                        </Link>
                        <Link href="/dashboard/meet">
                            <div 
                                className={`mt-4 hover:cursor-pointer ${active == 'meet' && 'font-bold'}`}
                                onClick={() => setActive('meet')}
                            >
                                Meet
                            </div>
                        </Link>
                    </div>
                <Link href="/dashboard/chatbot">
                    <div 
                        className={`mt-4 hover:cursor-pointer ${active == 'chatbot' && 'font-bold'}`}
                        onClick={() => setActive('chatbot')}
                    >
                        My Chatbot
                    </div>
                </Link>
                <Link href="/dashboard/newsletter">
                    <div 
                        className={`mt-4 hover:cursor-pointer ${active == 'newsletter' && 'font-bold'}`}
                        onClick={() => setActive('newsletter')}
                    >
                        My Newsletter
                    </div>
                </Link>
                <Link href="/dashboard/assessment">
                    <div 
                        className={`mt-4 hover:cursor-pointer ${active == 'assessment' && 'font-bold'}`}
                        onClick={() => setActive('assessment')}
                    >
                        Assessment
                    </div>
                </Link>

                <Link href="/dashboard/settings">
                    <div 
                        className={`mt-4 hover:cursor-pointer ${active == 'settings' && 'font-bold'}`}
                        onClick={() => setActive('settings')}
                    >
                        Settings
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;