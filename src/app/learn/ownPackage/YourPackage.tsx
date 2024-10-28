'use client';
import { FC } from 'react';
import DefaultButton from '../../components/buttons/DefaultButton';
import IndividualPackage from '../../components/cards/IndividualPackage';

const IndividualPackageList = [
    {
        enable: false,
        mainColor: '#5d5fef',
        price: "10.00",
        title: 'AI Chatbot',
        content: 'Includes up to 10 users, 20GB individual data and access to all features.',
        isChecked: false
    },
    {
        enable: true,
        mainColor: '#5d5fef',
        price: "10.00",
        title: 'AI Chatbot',
        content: 'Includes up to 10 users, 20GB individual data and access to all features.',
        isChecked: false
    },
    {
        enable: true,
        mainColor: '#5d5fef',
        price: "10.00",
        title: 'AI Chatbot',
        content: 'Includes up to 10 users, 20GB individual data and access to all features.',
        isChecked: false
    },
    {
        enable: true,
        mainColor: '#5d5fef',
        price: "10.00",
        title: 'AI Chatbot',
        content: 'Includes up to 10 users, 20GB individual data and access to all features.',
        isChecked: false
    }
];


const AddMoreList = [
    {
        enable: true,
        mainColor: '#5d5fef',
        price: "10.00",
        title: 'AI Chatbot',
        content: 'Includes up to 10 users, 20GB individual data and access to all features.',
        isChecked: false
    },
    {
        enable: true,
        mainColor: '#5d5fef',
        price: "10.00",
        title: 'AI Chatbot',
        content: 'Includes up to 10 users, 20GB individual data and access to all features.',
        isChecked: false
    },
    {
        enable: true,
        mainColor: '#5d5fef',
        price: "10.00",
        title: 'AI Chatbot',
        content: 'Includes up to 10 users, 20GB individual data and access to all features.',
        isChecked: false
    }
];

const YourPackage: FC = () => {
    return (
        <div className='md:flex block w-full mt-3'>
            
            <div className='h-auto md:w-8/12 w-full bg-[#F3F8FE] rounded-[20px] sm:px-[50px] px-[30px] py-5 mr-4'>
                <DefaultButton 
                    buttonColor="#5C76FF" 
                    className={`w-[146px] text-[14px]`}
                >
                    Your Package
                </DefaultButton>

                <h1 className='sm:text-[50px] text-[30px] text-[#475467] font-bold my-5'>
                    Advance Your Skills
                </h1>
                <p className='sm:text-[24px] text-[20px] text-[#475467] leading-[40px]'>
                    Ideal for Leaders enhancing their strategic decision-making with data. Ideal for Leaders enhancing their strategic decision-making with data. Ideal for Leaders enhancing their strategic decision-making with data. Ideal for Leaders enhancing their strategic decision-making with data. Ideal for Leaders enhancing their strategic decision-making with data.
                </p>
                <h1 className='sm:text-[40px] text-[30px] text-[#475467] font-bold my-5'>
                    What it includes
                </h1>
                <div className='gap-2'>
                    {
                        IndividualPackageList.map((el: any) => (
                            <div className='my-2'>
                                <IndividualPackage 
                                    enable={el.enable} 
                                    mainColor={el.mainColor} 
                                    price={el.price} 
                                    title={el.title} 
                                    content={el.content} 
                                    isChecked={el.isChecked} 
                                />
                            </div>
                        ))
                    }
                </div>

                <h1 className='sm:text-[40px] text-[30px] text-[#475467] font-bold my-5'>
                    Add more
                </h1>
                {
                    AddMoreList.map((el: any) => (
                        <div className='my-2'>
                            <IndividualPackage 
                                enable={el.enable} 
                                mainColor={el.mainColor} 
                                price={el.price} 
                                title={el.title} 
                                content={el.content} 
                                isChecked={el.isChecked} 
                            />
                        </div>
                    ))
                }
            </div>

            <div className='h-[410px] md:w-4/12 w-full bg-[#F9F9F9] rounded-[20px] md:mt-0 mt-3 pb-10'>
                <h2 className='mx-12 md:pt-5 md:pt-10 pt-10 text-[30px] font-bold text-text-color leading-[36.31px] font-inter pb-4'>
                    Order Summery
                </h2>
                <div className='flex justify-between mx-8 text-[16px] font-bold text-text-color leading-[19.36px] font-inter mt-6'>
                    <div>SUBTOTAL</div>
                    <div>XX $</div>
                </div>

                <div className="flex items-center border border-gray-300 rounded-md mx-8 my-10 h-[50px]">
                    <input
                        type="text"
                        placeholder="Promo Code"
                        className="px-4 py-2 flex-grow text-gray-700 outline-none w-auto"
                    />
                    <button
                        className="bg-gray-700 text-white mx-2 my-2 w-[95px] h-[34px] rounded-[6px] hover:bg-gray-800"
                    >
                        Apply
                    </button>
                </div>

                <div className='flex justify-between mx-8 text-[16px] font-bold text-text-color leading-[19.36px] font-inter mt-6'>
                    <div>ESTIMATED TOTAL</div>
                    <div>XX $</div>
                </div>
                <div className='mx-8 mt-10'>
                    <DefaultButton className="w-full py-2 rounded-[9px]">Check Out</DefaultButton>
                </div>
            </div>

        </div>
    )
}

export default YourPackage;