'use client';
import { FC } from 'react';
const ReadMainComponent: FC = () => {

    return (
        <div className='bg-[#FFF7F4] rounded-[20px] h-[330px] sm:h-[500px] lg:h-[736px]'>
            <div className='ml-[20px] mr-[20px] relative'>

                <div className="inset-0 flex ml-4 sm:ml-[50px] lg:ml-[94px] pt-[30px] sm:pt-[70px] lg:pt-[168px]">
                    <h2 className="text-2xl sm:text-[40px] lg:text-[60px] font-bold text-[#475467] leading-10 sm:leading-[50px] lg:leading-[72px]">
                        Expand Your Knowledge <br /> with Expert Insights
                    </h2>
                </div>
                <div className="inset-0 flex mt-4 sm:mt-[45px] ml-4 sm:ml-[50px] lg:ml-[94px]">
                    <h2 className="text-lg sm:text-2xl lg:text-3xl text-[#475467] leading-8 sm:leading-[35px] lg:leading-[44px]">
                        Choose the plan that best fits your <br /> needs and
                        <span className='text-[#FF6E3E] font-bold'> start transforming data <br /> into decisions. </span>
                    </h2>
                </div>
            </div>
        </div >
    );
};

export default ReadMainComponent;