'use client';
import { FC, useState, useEffect, useRef } from 'react';
import React from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LOGO from '@/public/assets/images/logo.png';
import SEARCHICON from '@/public/assets/svg/search.svg';
import DefaultButton from './components/buttons/DefaultButton';

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;


const links: Array<{ text: string, link: string, textColor: string, bgColor: string }> = [
  {
    text: "Learn",
    link: "/learn",
    textColor: "#5c76ff",
    bgColor: "#F3F8FE"
  },
  {
    text: "Read",
    link: "/read",
    textColor: "#FF6E3E",
    bgColor: "#FFF7F4"
  },
  {
    text: "Watch",
    link: "/watch",
    textColor: "#9E77ED",
    bgColor: "#F7F6FF"
  },
  {
    text: "Meet",
    link: "/meet",
    textColor: "#95DA79",
    bgColor: "#F2FAEC"
  },
];

interface userStyle {
    jwtToken: any,
    member: any
}


const Header: FC = () => {
  const currentUrl = usePathname();
  const headerPanelRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<userStyle | null>();
  const hasRun = useRef(false);

  useEffect(() => {
    if (headerPanelRef.current) {
      const activeLink = links.find(item => currentUrl === item.link);
      if (activeLink) {
        headerPanelRef.current.style.background = activeLink.bgColor;
        headerPanelRef.current.style.border = "none"; // Hides the border
      } else {
        headerPanelRef.current.style.border = ""; // Resets border if no active link
      }
    }
  }, [currentUrl]);

  useEffect(() => {

    if (hasRun.current) return;
    hasRun.current = true;     

    const getToken = async() => {
      try {
          const res = await fetch('/api/getUserInfo/members');
          const response = await res.json();

          const jwtToken = response.jwtToken;
          const member = response.member;

          setUser({
              jwtToken: jwtDecode(jwtToken),
              member: member
          });
          localStorage.setItem('edosaJwtToken', jwtToken);
          localStorage.setItem('edosaMember', JSON.stringify(member));

          toast.success(`Welcome back!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            style: {width: '250px', marginLeft: '50px'}
          });
      } catch (err) {
          console.log(err);
      }
    }

    if (localStorage.getItem('edosaJwtToken') && localStorage.getItem('edosaMember')) {
        const jwtToken = localStorage.getItem('edosaJwtToken');
        const member = localStorage.getItem('edosaMember');
        setUser({
            jwtToken: jwtToken && jwtDecode(jwtToken),
            member: member && JSON.parse(member)
        });

    } else {
        getToken();
    }

  }, [])


  return (
    <>
      <div className='block lg:hidden flex justify-center my-3 w-full'>
        <Link href="/">
          <Image src={LOGO} width={250} className='block lg:hidden' alt='Logo' />
        </Link>
      </div>
      <div className='flex items-center justify-between relative my-1 sm:my-2'>
        <div className='hidden lg:block'>
          <Link href="/">
            <Image src={LOGO} width={360} className='hidden lg:block ml-[20px] xl:ml-[85px]' alt='Logo' />
          </Link>
        </div>

        <div
          ref={headerPanelRef}
          className="panel border-2 border-text-color rounded-full bg-white py-1 md:py-1.5 px-4 sm:px-8 flex items-center justify-center gap-5 sm:gap-10"
        >
          {links.map((item, index) => {
            const newStyle = currentUrl === item.link
              ? `text-[${item.textColor}] font-bold`
              : "font-normal";
            return (
              <Link
                href={item.link}
                key={index}
                className={`text-[14px] md:text-[20px] font-inter ${newStyle}`}
              >
                {item.text}
              </Link>
            );
          })}
        </div>

        <div className='flex items-center justify-center mr-2 md:mr-10 px-1 sm:px-3 gap-3'>
          <Image src={SEARCHICON} className='w-5 h-5 hover:cursor-pointer' alt='search' />

            {
              !user ? (
                <Link href='/signin'><DefaultButton className='text-[14px] md:text-[20px] py-[8px]'>Aceess</DefaultButton></Link>
              ) : (
                <Link href='/Dashboard'><DefaultButton className='text-[14px] md:text-[20px] py-[8px]'>{user.member.name}</DefaultButton></Link>
              )
            }  
        
          {/* <DefaultButton className='max-w-3 aspect-square'>&nbsp;</DefaultButton> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Header;
function clearCookie(cookieName: string) {
  throw new Error('Function not implemented.');
}

