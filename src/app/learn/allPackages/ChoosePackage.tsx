'use client';
import React, { FC, useState } from 'react';
import axios from 'axios';
import TierPackageCard from '../../components/cards/TierPackageCard';
import { badge } from '@material-tailwind/react';

type TiersResponse = {
    tiers: any
}

const TiersNames = ['Growth', 'Amplify', 'Peak'];

const ViewPackage: FC = () => {

    const [packages, setPackages] = useState<any[]>([]);

    React.useEffect(() => {
        const getTiers = async() => {
            try {
                const res = await axios.post<TiersResponse>('/api/content/tiers', {
                    payload: '&limit=all&include=monthly_price,benefits'
                });
                console.log(res.data.tiers)
                
                let demoPackages: any = [];

                res.data.tiers
                .filter((item: { name: string; }) => TiersNames.includes(item.name))
                .map((el: any, index:number) => {

                    const demoData = {
                        type: 'learn',
                        title: el.description.split(' with')[0],
                        badge: el.name,
                        isChecked: false,
                        price: el.monthly_price ? '$'+Number(el.monthly_price / 100) : 'Free',
                        content: el.description,
                        imgUrl: '',
                        linkUrl: '/learn/ownPackage',
                        benefit: el.benefits,
                        button: 'Learn more'
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
                            <TierPackageCard 
                                key={index}
                                type={el.type} 
                                title={el.title} 
                                badge={el.badge} 
                                isChecked={el.isChecked} 
                                price={el.price} 
                                content={el.content} 
                                imgUrl={el.imgUrl}
                                linkUrl={el.linkUrl}
                                benefit={el.benefit}
                                button={el.button}
                            />
                        )
                    })
                }
            </div>            
            
        </div>
    )
}

export default ViewPackage;