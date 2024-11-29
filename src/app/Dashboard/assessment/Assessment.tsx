'use client';

import React, { FC, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import DefaultButton from '../../components/buttons/DefaultButton';

interface dataStyle {
    name: string,
    url: string
}

const Assessment: FC = () => {

    const [data, setData] = useState<dataStyle[]>([]);

    React.useEffect(() => {
        const getAssessment = async() => {
            try {
                const res = await axios.get<dataStyle[]>('/api/assessment/getAssessment');
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        getAssessment();
    }, [])

    return (
        <div className='relative w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-[600px] bg-[#FFF] rounded-[22px] px-10 py-5 pb-3 overflow-auto'>
                <h1 className='text-[2rem] font-bold text-text-color mb-5'>Assessment</h1>
                <div>
                    {
                        data.map((el: dataStyle, index:number) => {
                            return (
                                <Link key={index} href='#' onClick={() => window.open(el.url)}>
                                    <DefaultButton className='my-5'>{el.name}</DefaultButton>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Assessment;