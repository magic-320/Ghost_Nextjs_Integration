'use client';

import React, { FC, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import DefaultButton from '../../components/buttons/DefaultButton';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import Calendar from '../../components/Calendar';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const bookTimes = [
    {
        time: "3:30 pm"
    },
    {
        time: "4:00 pm"
    },
    {
        time: "4:30 pm"
    },
    {
        time: "5:00 pm"
    },
    {
        time: "5:30 pm"
    }
]


const Meet: FC = () => {

    const router = useRouter();

    const params = new URLSearchParams({
        client_id: '987314413429-pr2eka5h8amiftjmhaprkhelrunnhdjn.apps.googleusercontent.com',
        redirect_uri: 'http://localhost:4000/',
        response_type: 'code',
        scope: 'https://www.googleapis.com/auth/calendar.events',
        access_type: 'offline',
        prompt: 'consent',
    });

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    console.log(authUrl)

    
    const aa = async() => {
        const code = '4/0AeanS0ZZfL0tU3urD_yDT2vVaxWsVyZtQzSWi_gqN2aTLhco20L9GvuTU12H_Q_vsl7CEA';
        const params = new URLSearchParams({
            code,
            client_id: '987314413429-pr2eka5h8amiftjmhaprkhelrunnhdjn.apps.googleusercontent.com',
            client_secret: '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',
            redirect_uri: 'http://localhost:4000/',
            grant_type: 'authorization_code',
          });
          
          const response = await axios.post('https://oauth2.googleapis.com/token', params.toString(), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });

          console.log(response)
          
    }

    aa();



    const [timezoneDropdown, setTimezoneDropdown] = useState<boolean>(false);
    const [timezone, setTimezone] = useState<any>([
        '(GMT -11:00) Midway Island, Samoa',
        '(GMT -10:00) Hawaii',
        '(GMT -9:00) Alaska',
        '(GMT -8:00) Chihuahua, La Paz, Mazatlan',
        '(GMT -8:00) Pacific Time (US & Canada); Tijuana',
        '(GMT -7:00) Arizona',
        '(GMT -7:00) Mountain Time (US & Canada)',
        '(GMT -6:00) Central America',
        '(GMT -6:00) Central Time (US & Canada)',
        '(GMT -6:00) Guadalajara, Mexico City, Monterrey',
        '(GMT -6:00) Saskatchewan',
        '(GMT -5:00) Bogota, Lima, Quito',
        '(GMT -5:00) Eastern Time (US & Canada)',
        '(GMT -5:00) Indiana (East)',
        '(GMT -4:00) Caracas, La Paz',
        '(GMT -4:00) Atlantic Time (Canada); Greenland',
        '(GMT -4:00) Santiago',
        '(GMT -3:30) Newfoundland',
        '(GMT -3:00) Buenos Aires, Brasilia, Georgetown',
        '(GMT -2:00) Fernando de Noronha',
        '(GMT -1:00) Azores',
        '(GMT -1:00) Cape Verde Is.',
        '(GMT) UTC',
        '(GMT +0:00) Casablanca, Monrovia',
        '(GMT +0:00) Dublin, Edinburgh, London',
        '(GMT +1:00) Amsterdam, Berlin, Rome, Stockholm, Vienna',
        '(GMT +1:00) Belgrade, Bratislava, Budapest, Prague',
        '(GMT +1:00) Brussels, Copenhagen, Madrid, Paris',
        '(GMT +1:00) Sarajevo, Skopje, Warsaw, Zagreb',
        '(GMT +1:00) West Central Africa',
        '(GMT +2:00) Athens, Beirut, Bucharest, Istanbul',
        '(GMT +2:00) Cairo, Egypt',
        '(GMT +2:00) Harare',
        '(GMT +2:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
        '(GMT +2:00) Jerusalem',
        '(GMT +2:00) Pretoria',
        '(GMT +3:00) Baghdad',
        '(GMT +3:00) Kuwait, Nairobi, Riyadh',
        '(GMT +3:00) Moscow, St.Petersburg, Volgograd',
        '(GMT +3:30) Tehran',
        '(GMT +4:00) Abu Dhabi, Muscat',
        '(GMT +4:00) Baku, Tbilsi, Yerevan',
        '(GMT +4:30) Kabul',
        '(GMT +5:00) Islamabad, Karachi, Tashkent',
        '(GMT +5:00) Yekaterinburg',
        '(GMT +5:30) Chennai, Calcutta, Mumbai, New Delhi',
        '(GMT +5:45) Katmandu',
        '(GMT +6:00) Almaty, Novosibrisk',
        '(GMT +6:00) Astana, Dhaka, Sri Jayawardenepura',
        '(GMT +6:30) Rangoon',
        '(GMT +7:00) Bangkok, Hanoi, Jakarta',
        '(GMT +7:00) Krasnoyarsk',
        '(GMT +8:00) Beijing, Chongqing, Hong Kong, Urumqi',
        '(GMT +8:00) Irkutsk, Ulaan Bataar',
        '(GMT +8:00) kuala Lumpur, Perth, Singapore, Taipei',
        '(GMT +9:00) Osaka, Sapporo, Tokyo',
        '(GMT +9:00) Seoul',
        '(GMT +9:00) Yakutsk',
        '(GMT +9:30) Adelaide',
        '(GMT +9:30) Darwin',
        '(GMT +10:00) Brisbane, Guam, Port Moresby',
        '(GMT +10:00) Canberra, Hobart, Melbourne, Sydney, Vladivostok',
        '(GMT +11:00) Magadan, Soloman Is., New Caledonia',
        '(GMT +12:00) Auckland, Wellington',
        '(GMT +12:00) Fiji, Kamchatka, Marshall Is.',
        '(GMT +12:00) International Date Line West'
    ]);


    return (
        <div className='w-full h-full bg-[#F9F9F9] rounded-[22px] px-7 py-10'>
            <div className='w-full h-full bg-[#FFF] rounded-[22px]'>
                <h1 className='text-[20px] md:text-[24px] font-bold font-inter font-[#344054] px-7 py-5 text-text-color'>
                    Services &gt; Meet &gt; Personal Coaching
                </h1>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mx-5">
                    <div className='w-full h-full bg-m-demo-color rounded-[22px] p-4'>
                        <h1 className='text-[20px] md:text-[24px] font-bold text-center text-[#101828]'>
                            Personal Coaching
                        </h1>
                        <div className='text-center py-3'>
                            <Calendar />
                        </div>
                        <div 
                            className='w-full flex justify-center hover:cursor-pointer' 
                            onClick={() => setTimezoneDropdown(!timezoneDropdown)}
                        >
                            Eastern Time - US & Canada <span className="ml-2 my-1">{timezoneDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className="text-[25px] md:text-[36px] leading-11 font-bold text-text-color my-5">
                            Book your slot with Edosa
                        </div>

                        {
                            bookTimes.map((el:any, index:number) => (
                                <div key={index} className='flex justify-center items-center hover:cursor-pointer w-full h-[60px] text-text-color border border-solid border-m-main-color rounded-[22px] px-6 mt-3 font-bold text-m-main-color'>
                                    {el.time}
                                </div>
                            ))
                        }

                        

                        <div className='mt-12 flex gap-3 text-center justify-center w-full'>
                            <Link href="#" 
                                className="w-[210px] h-[40px] font-bold text-[#344054] px-3 py-3 text-xs text-center bg-white rounded-[20px] border border-solid border-[#475467]"
                                onClick={() => window.open('https://calendar.google.com/calendar/')}
                            >
                                <button>Go to Calendar</button>
                            </Link>
                            <Link href="#" onClick={() => window.open('https://calendly.com/edosa/personalised-value-driven-strategy')}>
                                <DefaultButton className='w-[210px] h-[40px] font-bold px-3 py-[10px] text-xs text-center'>
                                    Book Now
                                </DefaultButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meet;

