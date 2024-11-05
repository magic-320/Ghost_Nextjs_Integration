import React, { FC } from "react";
import Image from "next/image";
import axios from "axios";
import CHECK from "@/public/assets/svg/check.svg";
import DefaultButton from "../buttons/DefaultButton";
import setupGhostApi from "../../utils/api";


const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_GHOST_ADMIN_API_KEY;
const CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;
const PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

const ghostAPI = setupGhostApi({
    apiUrl: API_URL,
    apiKey: ADMIN_API_KEY
})

interface LearnCardProps {
    tierid: string,
    title: string;
    header: string;
    text: string;
    items: string[];
    buttonName: string;
    backColor: string;
    border: string;
}
// const  tItems,setCurrentItems = useState<VisitorData[]>([]);
const LearnCard: FC<LearnCardProps> = ({
    tierid,
    title,
    header,
    text,
    items,
    buttonName,
    backColor,
    border
}: LearnCardProps) => {
    

    async function payFunc() {

        const response = await ghostAPI.member.checkoutPlan({
            plan: '',
            tierId: tierid,
            cadence: 'month',
            cancelUrl: `${PUBLIC_DOMAIN}/learn/?stripe=cancel`,
            successUrl: `${PUBLIC_DOMAIN}/learn/?stripe=success`,
            email: '',
            customerEmail: '',
            name: '',
            offerId: '',
            newsletters: '',
            metadata: {
                requestSrc: 'portal',
                urlHistory: []
            }
        } as any);
        console.log(response);

    }

    return (
        <div style={{ backgroundColor: backColor }}
            className={`sm:min-h-[350px] card flex flex-col justify-center items-center shadow-md gap-1 sm:gap-3 rounded-xl relative py-5 ${border} `}
        >
            <div className="text-lg sm:text-4xl leading-11 font-bold  text-black">
                {title}
            </div>
            <div className="text-lg sm:text-lg leading-8 font-bold  text-black">
                {header}
            </div>
            <div className="text-sm leading-8 text-text-color px-8">
                {text}
            </div>
            <div className="px-5" style={{height: '-webkit-fill-available'}}>
                {items.map((item, index) => (
                    <div key={index} className="flex flex-row">
                        <Image src={CHECK} width={24} height={24} alt="checked" />
                        <span className="text-sm text-text-color ml-2 my-2">{item}</span>
                    </div>
                ))}
            </div>
            <span onClick={payFunc} className="w-5/6 py-2">
                <DefaultButton>{buttonName}</DefaultButton>
            </span>
        </div>
    );
}

export default LearnCard;