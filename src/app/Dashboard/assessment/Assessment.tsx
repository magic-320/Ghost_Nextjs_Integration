'use client';
import React, { FC, useState } from 'react';
import axios from 'axios';
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
            <div className='w-full h-[auto] bg-[#FFF] rounded-[22px] px-10 py-5 pb-3'>
                <h1 className='text-[2rem] font-bold text-text-color mb-5'>Assessment</h1>
                <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        data.map((el: dataStyle, index:number) => {
                            return (
                                <div key={index} className='relative w-full h-[278px] bg-[#EEE] rounded-[22px] py-7'>
                                    <span className='inline-block w-[auto] h-[25px] px-3 py-1 text-center text-[12px] text-white bg-[#333] rounded-full mx-7'>Assessment</span>
                                    <h1 className='text-[18px] font-bold font-inter mt-2 mx-7'>
                                        {el.name}
                                    </h1>
                                    <div className='absolute bottom-5 flex gap-3 text-center justify-center w-full'>
                                        <span onClick={() => window.open(el.url)}>
                                            <DefaultButton className='w-[auto] h-[40px] font-bold !px-10 py-[10px] text-xs text-center'>
                                                Visit Now
                                            </DefaultButton>
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Assessment;