'use client';
import { FC, useState } from 'react';
import PackageCard from '../../components/cards/PackageCard';

const ViewPackage: FC = () => {

    const packages = [
        {
            type: 'learn',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        },
        {
            type: 'read',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        },
        {
            type: 'watch',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        },
        {
            type: 'meet',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        },
        {
            type: 'watch',
            title: '5-days',
            badge: 'Newsletter',
            isChecked: false,
            prince: '10.00',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: ''
        }
    ]

    const [activeItem, setActiveItem] = useState<string | null>('View All');

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