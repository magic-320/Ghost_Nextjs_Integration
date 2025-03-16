import React, { FC } from 'react';
import Image from 'next/image';
import GrayPackageIcon from '@/public/assets/svg/grayPackageIcon.svg';
import BluePackageIcon from '@/public/assets/svg/bluePackageIcon.svg';

interface IndividualPackageProps {
    enable: boolean,
    mainColor: string,
    price: string,
    title: string,
    content: string,
    isChecked: boolean
}

const IndividualPackage: FC <IndividualPackageProps> = ({
    enable,
    mainColor,
    price,
    title,
    content,
    isChecked
}: IndividualPackageProps) => {

    return (
        <>
            {
                enable ? (

                    <div className={`flex w-full h-auto items-start gap-1 p-4 relative bg-white rounded-xl border-2 border-solid border-[${mainColor}]`}>
                        <div className="flex items-start gap-4 relative flex-1 grow mb-[-1px]">
                            {/* Icon container */}
                            <div className="relative w-[52px] h-[52px] mt-[-6px] ml-[-6px] bg-[#f3f8fe] rounded-full border-[6px] border-solid border-white">
                                <Image
                                    className="absolute w-5 h-5 top-[10px] left-[10px]"
                                    alt="Layers two"
                                    src={mainColor == '#5d5fef' && BluePackageIcon}
                                />
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col items-start gap-0.5 relative flex-1 grow">
                            <div className="inline-flex items-start gap-1.5 relative">
                                <h3 className="mt-[-1px] font-medium text-gray-700 text-xl leading-6">
                                    {title}
                                </h3>
                                <span className="mt-[-1px] text-gray-600 text-md leading-6 mx-3">
                                    {price.toLowerCase() !== 'free' ? '$'+price : "Free"}
                                </span>
                            </div>

                            <p className="self-stretch text-gray-600 text-md leading-6">
                                {content}
                            </p>
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="relative w-5 h-5 rounded-md overflow-hidden border border-solid border-white">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                // checked={isChecked}
                            />
                        </div>
                    </div>

                ) : (
                    
                    <div className="flex w-full h-auto items-start gap-1 p-4 relative bg-gray-50 rounded-xl border-2 border-solid border-[#eaecf0]">
                        <div className="flex items-start gap-4 relative flex-1 grow">
                            {/* Icon container */}
                            <div className="relative w-[52px] h-[52px] mt-[-6px] ml-[-6px] bg-gray-100 rounded-full border-[6px] border-solid border-[#f8f9fb]">
                                <Image
                                    className="absolute w-5 h-5 top-[10px] left-[10px]"
                                    alt="Layers two"
                                    src={GrayPackageIcon}
                                />
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col items-start gap-0.5 relative flex-1 grow">
                            <div className="inline-flex items-start gap-1.5 relative">
                                <h3 className="mt-[-1px] font-medium text-gray-700 text-xl leading-6">
                                    {title}
                                </h3>
                                <span className="mt-[-1px] text-gray-600 text-md leading-6 mx-3">
                                    {price.toLowerCase() !== 'free' ? '$'+price : "Free"}
                                </span>
                            </div>

                            <p className="self-stretch text-gray-600 text-md leading-6">
                                {content}
                            </p>
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="relative w-5 h-5 rounded-md overflow-hidden border border-solid border-white">
                            <input
                                type="checkbox"
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                checked={isChecked}
                                disabled
                            />
                        </div>
                    </div>

                )
            }
        </>

        
        
      
    )
}

export default IndividualPackage;