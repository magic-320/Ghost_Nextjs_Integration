import React, { FC } from 'react';
import DefaultButton from '../buttons/DefaultButton';
import Link from 'next/link';

interface PackageDemoCardProps {
    type: string,
    title: string,
    learnURL: string,
    mainURL: string,
    buttonName: string
}

const PackageDemoCard: FC<PackageDemoCardProps> = ({
    type,
    title,
    learnURL,
    mainURL,
    buttonName
}: PackageDemoCardProps) => {

    return (
        <>
        
        {
            type == 'learn' && (
                    <section className="relative w-full h-[278px] bg-l-demo-color rounded-[22px] py-7">
                        <span className='inline-block w-[60px] h-[25px] py-1 text-center text-[12px] text-white bg-l-main-color rounded-full mx-7'>Learn</span>
                        <h1 className='text-[18px] font-bold font-inter mt-2 mx-7'>
                           {title} 
                        </h1>
                        <div className='absolute bottom-5 flex gap-3 text-center justify-center w-full'>
                            <Link href={`${learnURL}`} className="w-[115px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                                <button>Learn more</button>
                            </Link>
                            <Link href={`${mainURL}`}>
                                <DefaultButton className='w-[auto] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                    {buttonName}
                                </DefaultButton>
                            </Link>
                        </div>
                    </section>
            )
        }


        {
            type == 'read' && (
                <section className="relative w-full h-[278px] bg-r-demo-color rounded-[22px] py-7">
                    <span className='inline-block w-[60px] h-[25px] py-1 text-center text-[12px] text-white bg-r-main-color rounded-full mx-7'>Read</span>
                    <h1 className='text-[18px] font-bold font-inter mt-2 mx-7'>
                    {title} 
                    </h1>
                    <div className='absolute bottom-5 flex gap-3 text-center justify-center w-full'>
                        <Link href={`${learnURL}`} className="w-[115px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                            <button>Learn more</button>
                        </Link>
                        <Link href={`${mainURL}`}>
                            <DefaultButton className='w-[auto] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                {buttonName}
                            </DefaultButton>
                        </Link>
                    </div>
                </section>
            )
        }

        {
            type == 'meet' && (
                <section className="relative w-full h-[278px] bg-m-demo-color rounded-[22px] py-7">
                    <span className='inline-block w-[60px] h-[25px] py-1 text-center text-[12px] text-white bg-m-main-color rounded-full mx-7'>Meet</span>
                    <h1 className='text-[18px] font-bold font-inter mt-2 mx-7'>
                    {title} 
                    </h1>
                    <div className='absolute bottom-5 flex gap-3 text-center justify-center w-full'>
                        <Link href={`${learnURL}`} className="w-[115px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                            <button>Learn more</button>
                        </Link>
                        <Link href={`${mainURL}`}>
                            <DefaultButton className='w-[auto] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                {buttonName}
                            </DefaultButton>
                        </Link>
                    </div>
                </section>
            )
        }
        
        {
            type == 'watch' && (
                <section className="relative w-full h-[278px] bg-w-demo-color rounded-[22px] py-7">
                    <span className='inline-block w-[60px] h-[25px] py-1 text-center text-[12px] text-white bg-w-main-color rounded-full mx-7'>Watch</span>
                    <h1 className='text-[18px] font-bold font-inter mt-2 mx-7'>
                    {title} 
                    </h1>
                    <div className='absolute bottom-5 flex gap-3 text-center justify-center w-full'>
                        <Link href={`${learnURL}`} className="w-[115px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                            <button>Learn more</button>
                        </Link>
                        <Link href={`${mainURL}`}>
                            <DefaultButton className='w-[auto] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                {buttonName}
                            </DefaultButton>
                        </Link>
                    </div>
                </section>
            )
        }
        

        </>
    );
};

export default PackageDemoCard;
