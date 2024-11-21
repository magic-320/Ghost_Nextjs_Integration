'use client';
import React, { FC, useState } from 'react';
import axios from 'axios';
import PackageCard from '../../components/cards/PackageCard';

type TiersResponse = {
    tiers: any
}

const ViewPackage: FC = () => {

    const packages = [
        {
            type: 'read',
            title: 'Interactive Value Driven Workbooks',
            badge: 'Growth',
            isChecked: false,
            prince: 'Free',
            content: 'Get Limited Edition Value Driven Interactive Workbooks',
            imgUrl: '',
            linkUrl: '',
            button: 'Get Now'
        },
        {
            type: 'watch',
            title: 'Data & AI Value Video Coaching',
            badge: 'Growth',
            isChecked: false,
            prince: 'Free',
            content: 'Claim 12 Day of Data & AI Value Video Coaching',
            imgUrl: '',
            linkUrl: '',
            button: 'Claim Here'
        },
        {
            type: 'learn',
            title: 'AI Value Advisor Cheat Sheets',
            badge: 'Growth',
            isChecked: false,
            prince: 'Free',
            content: 'Access Regular AI Value Advisor Cheat Sheets',
            imgUrl: '',
            linkUrl: '',
            button: 'Access Now'
        },
        {
            type: 'learn',
            title: 'AI Value Advisor Email Course',
            badge: 'Growth',
            isChecked: false,
            prince: 'Free',
            content: 'Get Your Individual 2 Week Email Course on Becoming an AI Value Advisor',
            imgUrl: '',
            linkUrl: '',
            button: 'Get Now'
        },
        {
            type: 'learn',
            title: 'Starter Self Assessment Scorecard',
            badge: 'Growth',
            isChecked: false,
            prince: '$0',
            content: 'Access Your Personalised Starter Self Assessment Scorecard',
            imgUrl: '',
            linkUrl: '',
            button: 'Access Now'
        },
        {
            type: 'read',
            title: 'Book Discount Bundle',
            badge: 'Growth',
            isChecked: false,
            prince: 'Free',
            content: 'Redeem a package of multiple book discounts',
            imgUrl: '',
            linkUrl: '',
            button: 'Redeem Here'
        },
        {
            type: 'read',
            title: 'Value Driven Newsletters',
            badge: 'Growth',
            isChecked: false,
            prince: 'Free',
            content: 'Get ALL Value Driven Newsletters',
            imgUrl: '',
            linkUrl: '',
            button: 'Get Here'
        },
        {
            type: 'read',
            title: 'Value Driven Executive Handbook',
            badge: 'Amplify',
            isChecked: false,
            prince: '$35',
            content: 'Claim Exclusive Value Driven Executive Handbook which is not available at bookstores',
            imgUrl: '',
            linkUrl: '',
            button: 'Claim Now'
        },
        {
            type: 'learn',
            title: 'Advanced Self Assessment Scorecard',
            badge: 'Amplify',
            isChecked: false,
            prince: '$0',
            content: 'Access Your Advanced Self Assessment Scorecard Session',
            imgUrl: '',
            linkUrl: '',
            button: 'Access Now'
        },
        {
            type: 'meet',
            title: 'Bonus 1-2-1 Scorecard Feedback',
            badge: 'Amplify',
            isChecked: false,
            prince: '$0',
            content: 'Redeem Your Bonus 1-2-1 Scorecard Feedback Session',
            imgUrl: '',
            linkUrl: '',
            button: 'Apply Here'
        },
        {
            type: 'meet',
            title: '12 Month 1-2-1 Coaching',
            badge: 'Amplify',
            isChecked: false,
            prince: '$550',
            content: 'Get 12 Months of 1-2-1 Coaching with Options to Extend',
            imgUrl: '',
            linkUrl: '',
            button: 'Apply Here'
        },
        {
            type: 'read',
            title: 'The AI Value Advisory Network',
            badge: 'Amplify',
            isChecked: false,
            prince: '$0',
            content: 'Get Exclusive Access to The AI Value Advisory Network',
            imgUrl: '',
            linkUrl: '',
            button: 'Apply Here'
        },
        {
            type: 'meet',
            title: 'PERSONALISED AI Value Advisory COACHING',
            badge: 'Platinum Max',
            isChecked: false,
            prince: '$650',
            content: 'Gain EXCLUSIVE access to the PERSONALISED AI Value Advisory COACHING Program',
            imgUrl: '',
            linkUrl: '',
            button: 'Apply Here'
        },
        {
            type: 'learn',
            title: 'NEW ValueBot Data & AI Value Chatbot',
            badge: 'Platinum Max',
            isChecked: false,
            prince: 'Free',
            content: 'Claim FREE access to the NEW ValueBot Data & AI Value Chatbot',
            imgUrl: '',
            linkUrl: '',
            button: 'Claim Now'
        },
        {
            type: 'watch',
            title: 'Data & AI Value Video Coaching',
            badge: 'Platinum Max',
            isChecked: false,
            prince: 'Free',
            content: 'Claim 12 Day of Data & AI Value Video Coaching',
            imgUrl: '',
            linkUrl: '',
            button: 'Claim Now'
        },
        {
            type: 'read',
            title: 'Interactive Value Driven Workbooks',
            badge: 'Platinum Max',
            isChecked: false,
            prince: 'Free',
            content: 'Get Limited Edition Value Driven Interactive Workbooks',
            imgUrl: '',
            linkUrl: '',
            button: 'Get now'
        },
        {
            type: 'read',
            title: 'Book Discount Bundle',
            badge: 'Platinum Max',
            isChecked: false,
            prince: 'Free',
            content: 'Redeem a package of multiple book discounts',
            imgUrl: '',
            linkUrl: '',
            button: 'Redeem Here'
        },
        {
            type: 'learn',
            title: 'NEW ValueBot Data & AI Value Chatbot',
            badge: 'Platinum Max',
            isChecked: false,
            prince: 'Free',
            content: 'Claim FREE access to the NEW ValueBot Data & AI Value Chatbot',
            imgUrl: '',
            linkUrl: '',
            button: 'Redeem Here'
        },
        {
            type: 'learn',
            title: 'Data & AI Value Driven Business Readiness Assessment',
            badge: 'Platinum Max',
            isChecked: false,
            prince: '$0',
            content: 'Get FREE and UNLIMITED access to the Data & AI Value Driven Business Readiness Assessment',
            imgUrl: '',
            linkUrl: '',
            button: 'Access now'
        },
        {
            type: 'read',
            title: 'Interactive Value Driven Workbooks',
            badge: 'Platinum Max',
            isChecked: false,
            prince: 'Free',
            content: 'Get Limited Edition Value Driven Interactive Workbooks',
            imgUrl: '',
            linkUrl: '',
            button: 'Get now'
        },
        {
            type: 'watch',
            title: 'Data & AI Value Video Coaching',
            badge: 'Platinum Max',
            isChecked: false,
            prince: 'Free',
            content: 'Claim 12 Day of Data & AI Value Video Coaching',
            imgUrl: '',
            linkUrl: '',
            button: 'Claim Here'
        }
    ]

    const [activeItem, setActiveItem] = useState<string | null>('View All');
    // const [packages, setPackages] = useState<any[]>([]);

    React.useEffect(() => {
        const getTiers = async() => {
            try {
                const res = await axios.post<TiersResponse>('/api/content/tiers', {
                    payload: '&limit=all&include=monthly_price,benefits'
                });
                console.log(res.data.tiers)
                
                let demoPackage:any = [];

                res.data.tiers.map((el: any) => {
                    el.benefits.map((j: any) => {
                        demoPackage.push({
                            type: 'learn',
                            title: j,
                            badge: 'badge',
                            isChecked: false,
                            prince: '10.00',
                            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
                            imgUrl: '',
                            linkUrl: ''
                        });
                    })
                })

                // setPackages(demoPackage);

            } catch (err) {
                console.log(err);
            }
        }
  
        getTiers();
    }, []);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className='w-full'>
            
            <nav className="bg-white shadow">
                <div className="max-w-7xl px-4">
                    <div className="flex justify-between h-16">
                    <div className="flex space-x-4">
                        {['View All', 'Learn', 'Read', 'Watch', 'Meet'].map((item) => (
                        <button
                            key={item}
                            onClick={() => handleItemClick(item)}
                            className={`text-gray-900 hover:text-gray-700 px-2 py-1 text-[14px] sm:text-[18px] ${
                            activeItem === item ? 'font-bold' : ''
                            }`}
                        >
                            {item}
                        </button>
                        ))}
                    </div>
                    </div>
                </div>
            </nav>
            
            <div className='grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
                {
                    packages.map((el, index) => {
                        return (
                            activeItem == 'View All' ? (
                                <PackageCard 
                                    key={index}
                                    type={el.type} 
                                    title={el.title} 
                                    badge={el.badge} 
                                    isChecked={el.isChecked} 
                                    price={el.prince} 
                                    content={el.content} 
                                    imgUrl={el.imgUrl}
                                    linkUrl={el.linkUrl}
                                    button={el.button}
                                />
                            ) : (
                                el.type == activeItem?.toLowerCase() && (
                                    <PackageCard 
                                        key={index}
                                        type={el.type} 
                                        title={el.title} 
                                        badge={el.badge} 
                                        isChecked={el.isChecked} 
                                        price={el.prince} 
                                        content={el.content} 
                                        imgUrl={el.imgUrl}
                                        linkUrl={el.linkUrl}
                                        button={el.button}
                                    />
                                )
                            )
                        )
                    })
                }
            </div>            
            
        </div>
    )
}

export default ViewPackage;