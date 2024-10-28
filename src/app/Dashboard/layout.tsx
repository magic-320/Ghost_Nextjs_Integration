'use client';

import Header from '../header';
import Sidebar from "../components/Sidebar";
import Footer from '../footer';

export default function DashboardLayout ({children}: {children: React.ReactNode}) {
    
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <div className="lg:flex block w-full">
                    <div className="lg:w-1/5 w-full">
                        <Sidebar />
                    </div>
                    <div className="lg:w-4/5 w-full ml-7">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};
