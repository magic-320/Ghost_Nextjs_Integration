'use client';

import React, { FC, useState, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios';
import parse from 'html-react-parser';
import BOOK2 from "@/public/assets/images/books/book2.png";
import DefaultButton from '../../components/buttons/DefaultButton';
import '../card.css';
import Loading from '@/public/assets/loading/blue.gif';

const filterTags: string[] = ['hash-books'];

const Read: FC = () => {

    const hasRun = useRef(false);
    const [data, setData] = useState<any>([]);
    const [individual, setIndividual] = useState<any | undefined>(undefined);
    const [isReading, setIsReading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    React.useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const getPosts = async() => {
            try {
                let demoData: any = [];

                const res = await axios.get<any>('/api/admin/posts');
                for (const post of res.data.data) {
                    post.tags.map((el:any) => {
                        if (filterTags.includes(el.slug)) demoData.push(post);
                    })
                }
                
                const page_slug = 'cheatsheets-resources';
                const pages = await axios.get<any>('/api/admin/pages');
                for (const page of pages.data.data) {
                    if (page.slug == page_slug) demoData.push(page);
                }
                
                setData(demoData);
                setLoading(false);

                // const res = await axios.post<PostsResponse>('/api/content/posts', {
                //     payload: "&limit=all&filter=tag:hash-books"
                // });
            } catch (err) {
              console.log(err);
            }
        }
  
        getPosts();
    }, []);

    // init Individual for individual book
    const initIndividual = () => {
        setIndividual(undefined);
        setIsReading(false);
    }


    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px] pb-3'>
                <h1 className='text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-7 py-5 text-text-color'>
                    Services &gt; <span className='hover:cursor-pointer' onClick={initIndividual}>Read</span> {individual && ` > ` + individual.title}
                </h1>

                {
                    !individual && !isReading && (
                        <div className='px-12'>
                            {
                                loading && (
                                    <div className='flex justify-center'>
                                        <Image src={Loading} alt='loading' className='w-[60px] h-[60px]' />
                                    </div>
                                )
                            }
                            {
                                !loading && data.map((el:any, index:number) => (
                                    <div key={index} className="flex hover:cursor-pointer hover:bg-[#F9F9F9]" onClick={() => setIndividual(data[index])} >
                                        <div className='w-[10rem] h-[10rem] p-2 flex justify-center'>
                                            <img src={el.feature_image} className='h-full' />
                                        </div>
                                        <div className='px-5 flex items-center text-[1.7rem] font-bold text-text-color'>
                                            {el.title}
                                        </div>
                                    </div>
                                ))
                            }                            
                        </div>
                    )
                }

                {
                    individual && !isReading && (
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-5">
                            <div className='h-[350px] sm:h-[520px] flex justify-center'>
                                <img src={individual.feature_image} alt="learn image" className="h-full" />
                            </div>
                            <div className='h-[350px] sm:h-[520px] relative'>
                                <div className="text-[25px] md:text-[36px] leading-11 font-bold mt-10 text-text-color text-center">
                                    {individual.title}
                                </div>
                                <div className='absolute bottom-5 flex gap-3 text-center justify-center w-full'>
                                    <Link href="#" className="w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                                        <button>Download</button>
                                    </Link>
                                    <Link href="#" onClick={() => setIsReading(true)}>
                                        <DefaultButton className='w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                            Start Reading
                                        </DefaultButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    isReading && individual && (
                        <div className='p-5 text-text-color text-[1.2rem] leading-[2rem]' dangerouslySetInnerHTML={{ __html: individual?.html }}></div>
                    )
                }

            </div>
        </div>
    )
}

export default Read;