'use client';

import React, { FC, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios';
import BOOK2 from "@/public/assets/images/books/book2.png";
import DefaultButton from '../../components/buttons/DefaultButton';


type PostsResponse = {
    posts: any;
};

const Read: FC = () => {

    const [data, setData] = useState<any>([]);

    React.useEffect(() => {
        const getPosts = async() => {
            try {
                const res = await axios.post<PostsResponse>('/api/content/posts', {
                    payload: "&limit=all&filter=tag:hash-books"
                });
                setData(res.data);
            } catch (err) {
              console.log(err);
            }
        }
  
        getPosts();
    }, [])

    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px]'>
                <h1 className='text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-7 py-5 text-text-color'>
                    Services &gt; Read &gt; Interactive Workbook
                </h1>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-5">
                    <div>
                        <Image src={BOOK2} alt="learn image" className="pt-0 w-full rounded-2xl" />
                    </div>
                    <div className='relative h-[520px]'>
                        <div className="text-[25px] md:text-[36px] leading-11 font-bold mt-10 text-text-color text-center">
                            Interactive Workbook
                        </div>
                        <div className='absolute bottom-5 flex gap-3 text-center justify-center w-full'>
                            <Link href="#" className="w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]">
                                <button>Download</button>
                            </Link>
                            <Link href="#">
                                <DefaultButton className='w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                    Start Reading
                                </DefaultButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read;