import React, { FC, useState } from "react";
import Image from "next/image";
import CHECK from "@/public/assets/svg/check.svg";
import DefaultButton from "../buttons/DefaultButton";
import setupGhostApi from "../../utils/api";
import { useRouter } from 'next/navigation';
import Link from "next/link";

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
    button: string;
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
    button,
    backColor,
    border
}: LearnCardProps) => {

    const router = useRouter();
    
    const [isMore, setIsMore] = useState<Boolean>(false);
    const edosaJwtToken = localStorage.getItem('edosaJwtToken');
    const edosaMember = localStorage.getItem('edosaMember');
    const member = edosaMember && JSON.parse(edosaMember);
    // console.log(member);

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

    const onFreeAccess = () => {
        if (edosaJwtToken) {
            router.push('/Dashboard');
        } else {
            router.push('/signin');
        }
    }

    const onMemberAccess = () => {
        router.push('/Dashboard');
    }

    return (
        <div style={{ backgroundColor: backColor }}
            className={`sm:min-h-[350px] card flex flex-col justify-center items-center shadow-md gap-1 sm:gap-3 rounded-xl relative py-5 ${border} `}
        >
            <div className="text-lg sm:text-4xl leading-11 font-bold text-text-color font-inter">
                {title}
            </div>
            <div className="text-lg sm:text-lg leading-8 font-bold text-text-color font-inter">
                {header}
            </div>
            <div className="text-sm leading-8 text-text-color px-8">
                {text}
            </div>
            
            <div className="px-5" style={{height: '-webkit-fill-available'}}>
                {items.map((item, index) => {
                    if (!isMore) return;
                    return (
                        <div key={index} className="flex flex-row">
                            <Image src={CHECK} width={24} height={24} alt="checked" />
                            <span className="text-sm text-text-color ml-2 my-2">{item}</span>
                        </div>
                    )
                })}
            </div>

            <div className="underline text-[rgb(0,150,250)] hover:cursor-pointer">
                {
                    isMore ? (
                        <span onClick={() => setIsMore(!isMore)}>Less</span>
                    ) : (
                        <span onClick={() => setIsMore(!isMore)}>More</span>
                    )
                }
            </div>
            <div className="w-5/6 py-2">
                {
                    button == 'paid' ? (
                        <div>
                            {
                                member && member.paid ? (
                                    <span onClick={onMemberAccess}>
                                        <DefaultButton>Member Access</DefaultButton>
                                    </span>
                                ) : (
                                    <div className="flex justify-between">
                                        <span className="w-[48%]" onClick={payFunc}>
                                            <DefaultButton>SOLD OUT</DefaultButton>
                                        </span>
                                        <span className="w-[48%]">
                                            <DefaultButton className="bg-[#FFF] border border-[#475467]">
                                                <span style={{color: '#475467'}}>Join Waiting List</span>
                                            </DefaultButton>
                                        </span>
                                    </div>
                                )
                            }
                        </div>
                    ) : (
                        <span onClick={onFreeAccess}>
                            <DefaultButton>Free Access</DefaultButton>
                        </span>
                    )
                }
            </div>

            <div className="w-5/6 text-center text-text-color">
                Already a member? <Link href="/signin" className="text-[rgb(0,150,250)]">Sign In Here</Link>
            </div>
        </div>
    );
}

export default LearnCard;