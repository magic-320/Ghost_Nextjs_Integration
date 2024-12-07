'use client';
import React, { FC, useState } from 'react';
import AdminHeader from './adminHeader';
import Learn from './learn/page';
import Read from './read/page';
import Watch from './watch/page';
import Meet from './meet/page';
import Calendar from './calendar/page';
import Assessment from './assessment/page';


const Admin: FC = () => {

    const [selected, setSelected] = useState<string>('learn');

    return (
        <div className='max-w-[80em] mx-auto px-5 py-5'>
            <AdminHeader />
            <hr />
            <div className='mt-3 block md:flex'>
                <div className='w-full md:w-3/12 mr-4'>
                    <div className='w-full h-full py-10 text-[17px] xl:text-[22px] bg-[#F9F9F9] rounded-[22px] lg:block flex justify-center'>
                        <div className='text-left mx-[auto] max-w-[125px] xl:max-w-[155px]'>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'learn' && 'font-bold'}`}
                                onClick={() => setSelected('learn')}
                            >
                                Learn
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'read' && 'font-bold'}`}
                                onClick={() => setSelected('read')}
                            >
                                Read
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'watch' && 'font-bold'}`}
                                onClick={() => setSelected('watch')}
                            >
                                Watch
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'meet' && 'font-bold'}`}
                                onClick={() => setSelected('meet')}
                            >
                                Meet
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'calendar' && 'font-bold'}`}
                                onClick={() => setSelected('calendar')}
                            >
                                Calendar
                            </div>
                            <div 
                                className={`my-3 hover:cursor-pointer ${selected == 'assessment' && 'font-bold'}`}
                                onClick={() => setSelected('assessment')}
                            >
                                Assessment
                            </div>
                        </div>
                    </div>
                </div>

                {/* route component */}
                <div className='w-full md:w-9/12 mt-4 md:mt-0'>
                    { selected == 'learn' && (<Learn />) }
                    { selected == 'read' && (<Read />) }
                    { selected == 'watch' && (<Watch />) }
                    { selected == 'meet' && (<Meet />) }
                    { selected == 'calendar' && (<Calendar />) }
                    { selected == 'assessment' && (<Assessment />) }
                </div>
            </div>
        </div>
    )
}

export default Admin;