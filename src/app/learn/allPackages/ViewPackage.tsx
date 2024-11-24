'use client';
import React, { FC, useState } from 'react';
import PackageCard from '../../components/cards/PackageCard';
import wholePackage from './WholePackage';


const ViewPackage: FC = () => {

    const [activeItem, setActiveItem] = useState<string | null>('View All');
    const [packages, setPackages] = useState<any[]>([]);

    React.useEffect(() => {

        let demoPackage:any = [];
        wholePackage.map((el:any, index:number) => {
            const data = {
                type: el.type,
                title: el.title,
                badge: el.badge,
                isChecked: el.isChecked,
                price: el.price,
                content: el.content,
                imgUrl: el.imgUrl,
                button: localStorage.getItem('edosaMember') ? el.button2 : el.button1
            }
            demoPackage.push(data);
        });

        setPackages(demoPackage);
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
                                    price={el.price} 
                                    content={el.content} 
                                    imgUrl={el.imgUrl}
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
                                        price={el.price} 
                                        content={el.content} 
                                        imgUrl={el.imgUrl}
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