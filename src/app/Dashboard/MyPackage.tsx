'use client'
import React, { FC, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import PackageDemoCard from '../components/cards/PackageDemoCard';
import Calendar from '../components/Calendar';
import wholePackage from '../learn/allPackages/WholePackage';


const MyPackage: FC = () => {

    const [packageName, setPackageName] = useState<string>('');
    const [isMore, setIsMore] = useState<boolean>(false);
    const [packageDemoCardList, setPackageDemoCardList] = useState<any>([]);

    React.useEffect(() => {
        if ( localStorage.getItem('edosaMember') ) {
            const getMember = localStorage.getItem('edosaMember');
            const member = getMember && JSON.parse(getMember);
            
            let demoPackageDemoCardList:any = [];
            
            if (member.paid) {
                setPackageName(member.subscriptions[0].tier.description.split('with')[0]);
                wholePackage.map((j:any) => {
                    if (j.badge == member.subscriptions[0].tier.name) {
                        const demoData = {
                            type: j.type,
                            title: j.title,
                            learnURL: '#',
                            mainURL: '#',
                            buttonName: j.button2
                        }
                        demoPackageDemoCardList.push(demoData);
                    }
                })
            } else {
                setPackageName('Start Your Journey');
                wholePackage.map((j:any) => {
                    if (j.badge == 'Growth') {
                        const demoData = {
                            type: j.type,
                            title: j.title,
                            learnURL: '#',
                            mainURL: '#',
                            buttonName: j.button2
                        }
                        demoPackageDemoCardList.push(demoData);
                    }
                })
            }

            setPackageDemoCardList(demoPackageDemoCardList);
        }
    }, [])

    return (
        <div className="w-full h-auto bg-[#F9F9F9] rounded-[22px] px-7 py-10 block xl:flex">
            <div className={`w-full ${isMore ? 'xl:w-full' : 'xl:w-8/12'} rounded-[22px] p-7 bg-[#FFF] mr-3`}>
                <div className="block md:flex justify-between">
                    <h1 className='text-[20px] md:text-[24px] font-bold font-inter'>
                        My Package: {packageName}
                    </h1>
                    <span className='text-[15px] underline font-bold font-inter my-3'>
                        <Link href="#" onClick={() => setIsMore(!isMore)}>Show {isMore ? 'less' : 'all'}</Link>
                    </span>
                </div>
                <div className={`mt-3 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 ${isMore && 'xl:grid-cols-3'} gap-5`}>
                    {
                        packageDemoCardList.map((el: any, index:number) => {
                            if (!isMore && index >= 4) return;
                            return (
                                <PackageDemoCard 
                                    key={index}
                                    type={el.type} 
                                    title={el.title} 
                                    learnURL={el.learnURL} 
                                    mainURL={el.mainURL} 
                                    buttonName={el.buttonName} 
                                />
                            )
                        })
                    }
                </div>
            </div>

            {
                !isMore && (
                    <div className="w-full xl:w-4/12 mt-3 xl:mt-0">
                        <div className='rounded-[22px] bg-[#FFF] rounded-[22px] p-7'>
                            <h1 className='text-[23px] font-bold font-inter'>Latest</h1>
                            <div className="flex items-start space-x-2">
                                <span className="h-[7px] rounded-full bg-purple-500 mt-[10px] aspect-square"></span>
                                <p className="text-gray-800 font-inter text-[18px]">
                                    You can now join Edosa’s Maven course about Demystifying & Accelerating AI Value
                                </p>
                            </div>
                        </div>

                        <div className='rounded-[22px] bg-[#FFF] rounded-[22px] p-7 mt-3'>
                            <div className='flex justify-center'>
                                <div className="w-[30px] h-[30px] flex justify-center items-center mr-2 rounded-[18px] bg-[#95da79] text-[14px] text-[#FFF] font-bold">M</div>
                                <span className='text-[22px] font-bold font-inter'>Book a Call with Edosa</span>
                            </div>
                            <div className='text-center mt-2'>
                                <Calendar />
                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    )
};

export default MyPackage;