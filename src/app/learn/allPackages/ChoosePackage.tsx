'use client';
import { FC, useState } from 'react';
import PackageCard from '../../components/cards/PackageCard';

const ViewPackage: FC = () => {

    const packages = [
        {
            type: 'learn',
            title: 'Start your Journey',
            badge: 'for Beginners',
            isChecked: false,
            prince: 'Free',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: '/learn/ownPackage'
        },
        {
            type: 'learn',
            title: 'Advanced your Skills',
            badge: 'for Leaders',
            isChecked: false,
            prince: '1,950',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: '/learn/ownPackage'
        },
        {
            type: 'learn',
            title: 'Archieve Mastery',
            badge: 'for Executives',
            isChecked: false,
            prince: '1,950',
            content: 'Watch the latest video, where Edosa discusses the role of AI in modern organizations.',
            imgUrl: '',
            linkUrl: '/learn/ownPackage'
        }
    ]

    const [activeItem, setActiveItem] = useState<string | null>('View All');

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    return (
        <div className='w-full'>
            
            <h1 className='sm:text-[40px] text-[30px] text-[#475467] font-bold py-10 px-4'>
                Choose your Package
            </h1>
            
            <div className='grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
                {
                    packages.map((el, index) => {
                        return (
                            <PackageCard 
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
                    })
                }
            </div>            
            
        </div>
    )
}

export default ViewPackage;