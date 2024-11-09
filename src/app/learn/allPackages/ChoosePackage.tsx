'use client';
import React, { FC, useState } from 'react';
import axios from 'axios';
import PackageCard from '../../components/cards/PackageCard';
import { badge } from '@material-tailwind/react';

type TiersResponse = {
    tiers: any
  }

const ViewPackage: FC = () => {

    // const packages = [
    //     {
    //         type: 'learn',
    //         title: 'Start your Journey',
    //         badge: 'for Beginners',
    //         isChecked: false,
    //         price: 'Free',
    //         content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
    //         imgUrl: '',
    //         linkUrl: '/learn/ownPackage'
    //     },
    //     {
    //         type: 'learn',
    //         title: 'Advanced your Skills',
    //         badge: 'for Leaders',
    //         isChecked: false,
    //         price: '1,950',
    //         content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
    //         imgUrl: '',
    //         linkUrl: '/learn/ownPackage'
    //     },
    //     {
    //         type: 'learn',
    //         title: 'Archieve Mastery',
    //         badge: 'for Executives',
    //         isChecked: false,
    //         price: '1,950',
    //         content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
    //         imgUrl: '',
    //         linkUrl: '/learn/ownPackage'
    //     }
    // ]

    const [activeItem, setActiveItem] = useState<string | null>('View All');
    const [packages, setPackages] = useState<any[]>([]);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
        console.log(packages)
    };

    React.useEffect(() => {
        const getTiers = async() => {
            try {
                const res = await axios.post<TiersResponse>('/api/content/tiers', {
                    payload: '&limit=all&include=monthly_price,benefits'
                });
                console.log(res.data.tiers)
                
                let demoPackages: any = [];

                res.data.tiers
                .filter((item: { visibility: string; }) => item.visibility == 'public')
                .map((el: any) => {
                    const demoData = {
                        type: 'learn',
                        title: el.name,
                        badge: el.name,
                        isChecked: false,
                        price: el.monthly_price ? el.monthly_price : 'free',
                        content: el.description,
                        imgUrl: '',
                        linkUrl: ''
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
                            />
                        )
                    })
                }
            </div>            
            
        </div>
    )
}

export default ViewPackage;