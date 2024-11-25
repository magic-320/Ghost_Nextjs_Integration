'use client';

import { NextPage } from 'next';
import React, { FC, useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import DefaultButton from '../../components/buttons/DefaultButton';
import NewsletterArrow from '@/public/assets/images/drivenSvgs/arrow2.svg';
import axios from 'axios';
import parse from 'html-react-parser';
import { useSearchParams } from "next/navigation";
import '../card.css';

const filterTags: string[] = ['hash-newsletter', 'hash-newsletteredition000', 'newsletters'];

const Newsletter: NextPage = () => {

    const searchParams = useSearchParams();

    const hasRun = useRef(false);
    const [data, setData] = useState<any>([]);
    const [viewAll, setViewAll] = useState<boolean>(false);
    const [detail, setDetail] = useState<any>({});

    React.useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const getPosts = async() => {
            try {
                
                const res = await axios.get<any>('/api/admin/posts');
                let demoData: any = [];

                for (const post of res.data.data) {
                    post.tags.map((el:any) => {
                        if (filterTags.includes(el.slug)) demoData.push(post);
                    })
                }
                setData(demoData);


                // const res = await axios.post<PostsResponse>('/api/content/posts', {
                //     payload: "&limit=all&filter=tag:[hash-newsletter,hash-newsletteredition000,newsletters]"
                // });

            } catch (err) {
                console.log(err);
            }
        }  
        getPosts();


        if (searchParams?.get('id')) {
            setDetail({
                title: searchParams?.get('title'),
                html: searchParams?.get('html')
            })
        }
    }, [])

    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px]'>
                <h1 className='text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-7 py-5 text-text-color'>
                    Services &gt; Newsletter &gt; <Link href="#" onClick={() => { setViewAll(false); setDetail({}); }}>My Newsletter</Link>
                </h1>

                {
                    !viewAll && !detail.title && (
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-5">
                            <div className='w-full h-[515px] bg-r-demo-color rounded-[22px]'>
                                
                            </div>
                            <div className='px-3'>
                                <div className="text-[25px] md:text-[36px] leading-11 font-bold text-text-color">
                                    Latest Newsletter
                                </div>
                                <div className='h-auto'>

                                    {
                                        data.map((el: any, index: number) => {
                                            if (index >= 5) return;
                                            return (
                                                <div key={index} className='flex justify-between items-center w-full h-auto text-text-color bg-r-demo-color rounded-[22px] px-6 py-2 mt-3'>
                                                    <div className='w-11/12 font-bold'>
                                                        {el.title}
                                                    </div>
                                                    <div className='w-1/12 flex justify-end'>
                                                        <Image 
                                                            alt={'arrow'}
                                                            className='w-6 h-6 my-2 hover:cursor-pointer'
                                                            src={NewsletterArrow} 
                                                            onClick={() => {
                                                                setDetail(data[index]);
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                                <div className='mt-12 gap-3 text-center flex justify-center w-full'>
                                    <Link href="#" className="w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                                        <button>Upgrade to Premium</button>
                                    </Link>
                                    <Link href="#" onClick={() => setViewAll(true)}>
                                        <DefaultButton className='w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                            View All
                                        </DefaultButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    viewAll && !detail.title && (
                        <div className="mx-5">
                            <div className='text-[#344054] font-bold text-[32px] px-3'>
                                My Newsletter
                            </div>

                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
                                {
                                    data.map((el: any, index: number) => {
                                        return (
                                            <div key={index} className='flex justify-between items-center w-full h-auto text-text-color bg-r-demo-color rounded-[22px] px-6 py-2 mt-3'>
                                                <div className='w-11/12 font-bold'>
                                                    {el.title}
                                                </div>
                                                <div className='w-1/12 flex justify-end'>
                                                    <Image 
                                                        alt={'arrow'}
                                                        className='w-6 h-6 my-2 hover:cursor-pointer'
                                                        src={NewsletterArrow} 
                                                        onClick={() => {
                                                            setDetail(data[index]);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }

                {
                    detail.title && (
                        <div className='mx-5'>
                            <div className='text-[#344054] font-bold text-[25px] px-3'>
                                {detail.title}
                            </div>
                            <div className='mt-5 leading-[30px] text-[#344054] font-inter text-[18px] px-3'>
                                {parse(detail.html)}
                            </div>
                        </div>
                    )
                }

                
            </div>
        </div>
    )
}

export default Newsletter;