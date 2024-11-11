'use client';
import React, { FC, useState } from 'react';
import axios from 'axios';
import PackageCard from '../../components/cards/PackageCard';
import { badge } from '@material-tailwind/react';

type TiersResponse = {
    tiers: any
  }

const ViewPackage: FC = () => {

    const TiersContent: string[][] = [
        [
            'Limited Edition Value Driven Interactive Workbook',
            'Access 12 Day - Data & AI - Video Coaching',
            'Regular - Data & AI - Value CheatSheets',
            'Get 2-Week - AI Value - Email Course',
            'Starter Self Assessment Scorecard',
            'Claim Multiple Book Discounts',
            'Get ALL Value Driven Newsletters'
        ],
        [
            'Get Exclusive - NOT FOR SALE - Executive Handbook',
            'Advanced Self Assessment Scorecard',
            'Bonus 1-2-1 Scorecard Feedback Session',
            '3 Month 1-2-1 Coaching with Options to Extend'
        ],
        [
            'Get Personal Choice of All Published Books',
            'Personalised Self Assessment Session',
            'Bonus 1-2-1 Assessment Feedback Session',
            '12 Month 1-2-1 Coaching with Options to Extend',
            'Get Exclusive Access to The AI Value Advisory Network',
            'Access Full Range of Curated Library of Value Driven eBooks'
        ]
    ]

    const [activeItem, setActiveItem] = useState<string | null>('View All');
    const [packages, setPackages] = useState<any[]>([]);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    React.useEffect(() => {
        const getTiers = async() => {
            try {
                const res = await axios.post<TiersResponse>('/api/content/tiers', {
                    payload: '&limit=all&include=monthly_price,benefits'
                });
                console.log(res.data.tiers)
                
                let demoPackages: any = [];
                const packageName: string[] = ['Start your Journey', 'Advance your Skills', 'Achieve Mastery'];

                res.data.tiers
                .filter((item: { visibility: string; }) => item.visibility == 'public')
                .map((el: any, index:number) => {

                    let cards: string[] = [];

                    if (index == 2) {
                        cards = [...TiersContent[0], ...TiersContent[1], ...TiersContent[2]]
                    } else if (index == 1) {
                        cards = [...TiersContent[0], ...TiersContent[1]];
                    } else if (index == 0) {    
                        cards = TiersContent[0];
                    }

                    const demoData = {
                        type: 'learn',
                        title: packageName[index],
                        badge: el.name,
                        isChecked: false,
                        price: el.monthly_price ? el.monthly_price : 'free',
                        content: el.description,
                        imgUrl: '',
                        linkUrl: '/learn/ownPackage',
                        card: cards
                    }
                    demoPackages.push(demoData);
                })

                setPackages(demoPackages);

            } catch (err) {
                console.log(err);
            }
        }
  
        getTiers();
    }, [])

    return (
        <div className='w-full'>
            
            <h1 className='sm:text-[40px] text-[30px] text-[#475467] font-bold py-10 px-4'>
                Choose your Package
            </h1>
            
            <div className='grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
                {
                    packages.map((el:any, index:number) => {
                        return (
                            <PackageCard 
                                key={index}
                                type={el.type} 
                                title={el.title} 
                                badge={el.badge} 
                                isChecked={el.isChecked} 
                                price={el.price} 
                                content={el.content} 
                                imgUrl={el.imgUrl}
                                linkUrl={el.linkUrl}
                                card={el.card}
                            />
                        )
                    })
                }
            </div>            
            
        </div>
    )
}

export default ViewPackage;