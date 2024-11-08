import React, { FC } from "react";
import Link from "next/link";

interface DrivenCardProps {
    header: string;
    content: string;
    typeName: string;
    typeColor: string;
    cardColor: string;
    imgUrl?: string;
    linkUrl?: string;
    wholeData?: any
}

const DrivenCard: FC<DrivenCardProps> = ({
    header,
    content,
    typeName,
    typeColor,
    cardColor,
    imgUrl,
    linkUrl,
    wholeData
}: DrivenCardProps) => {

    return (
        <div style={{ backgroundColor: cardColor }} className={`sm:min-h-[350px] card flex flex-col shadow-md gap-1 sm:gap-3 rounded-xl relative`}>
            <div className="mx-4 sm:mx-5 mt-4 sm:mt-5">
                <img src={imgUrl?.toString()} className="w-full" />
            </div>
            <span style={{ color: typeColor }} className={`text-sm mt-2 ml-5 max-w-24`}>{typeName}</span>

            <div className="flex leading-4 sm:leading-8 text-base sm:text-3xl font-bold  sm:mx-5 flex mx-4">
                <div>{header}</div>
                <div className="w-[32px]">
                    <Link href={{pathname: '/Dashboard/newsletter', query: wholeData}}>
                        <img src="/assets/images/stayUpdated/link.svg" className="w-6 sm:w-8 h-6 sm:h-8 absolute right-0 mx-5 hover:cursor-pointer" />
                    </Link>
                </div>
            </div>
            <div className="leading-6 text-sm sm:text-lg mx-4 sm:mx-5 text-text-color pb-4 mb-6" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
}

export default DrivenCard;