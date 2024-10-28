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
            default:
                break;
        }

    }, [])

    return (
        <div className="w-full h-full px-12 py-10 text-[24px] bg-[#F9F9F9] rounded-[22px] relative">
            <Link href="/Dashboard">
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
                My Services <span className="ml-3 mt-2">{serviceHidden ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
            </div>
                <div className={`px-10 ${serviceHidden && 'hidden'}`}>
                    <Link href="/Dashboard/learn">
                        <div 
                            className={`mt-4 hover:cursor-pointer ${active == 'learn' && 'font-bold'}`}
                            onClick={() => setActive('learn')}
                        >
                            Learn
                        </div>
                    </Link>
                    <Link href="/Dashboard/read">
                        <div 
                            className={`mt-4 hover:cursor-pointer ${active == 'read' && 'font-bold'}`}
                            onClick={() => setActive('read')}
                        >
                            Read
                        </div>
                    </Link>
                    <Link href="/Dashboard/watch">
                        <div 
                            className={`mt-4 hover:cursor-pointer ${active == 'watch' && 'font-bold'}`}
                            onClick={() => setActive('watch')}
                        >
                            Watch
                        </div>
                    </Link>
                    <Link href="/Dashboard/meet">
                        <div 
                            className={`mt-4 hover:cursor-pointer ${active == 'meet' && 'font-bold'}`}
                            onClick={() => setActive('meet')}
                        >
                            Meet
                        </div>
                    </Link>
                </div>
            <div 
                className={`mt-4 hover:cursor-pointer ${active == 'chatbot' && 'font-bold'}`}
                onClick={() => setActive('chatbot')}
            >
                My Chatbot
            </div>
            <div 
                className={`mt-4 hover:cursor-pointer ${active == 'newsletter' && 'font-bold'}`}
                onClick={() => setActive('newsletter')}
            >
                My Newsletter
            </div>
            <div 
                className={`mt-4 hover:cursor-pointer ${active == 'assessment' && 'font-bold'}`}
                onClick={() => setActive('assessment')}
            >
                Assessment
            </div>

            <div 
                className={`absolute bottom-10 hover:cursor-pointer ${active == 'settings' && 'font-bold'}`}
                onClick={() => setActive('settings')}
            >
                Settings
            </div>
        </div>
    )
}

export default Sidebar;