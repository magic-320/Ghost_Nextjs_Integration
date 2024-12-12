'use client';
import React, { FC, useState } from 'react';
import Image from "next/image";
import axios from 'axios';
import BOOK1 from "@/public/assets/images/books/book1.png";
import BOOK2 from "@/public/assets/images/books/book2.png";
import BOOK3 from "@/public/assets/images/books/book3.png";
import BOOK4 from "@/public/assets/images/books/book4.png";
import BOOK5 from "@/public/assets/images/books/book5.png";
import DefaultButton from "../components/buttons/DefaultButton";


const Books: FC = () => {

  const [data, setData] = useState<any>({});

  React.useEffect(() => {
    const getCourse = async() => {
      const response = await axios.get<any>('/api/readAdmin/getBooks');
      setData(response.data);
    }

    getCourse();
  }, [])

  return (
    <div className='sm:ml-14 pb-5 mt-10 sm:mt-24'>

        {/* Blogs */}
        {
          data.blogs && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  Blogs
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  The AI Values Podcast
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  Navigating the value, values, issues and future of AI. We can’t wait to welcome you to the show to share the latest advancements in the AI world and the big questions that you are currently wanting to answer.
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Get it Here</DefaultButton>
                  </span>
                  <span>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
              <div className='min-h-[400px] aspect-[1/1] bg-[#eee] rounded-2xl'>
                {/* <Image src={BOOK2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" /> */}
              </div>
            </div>
          )
        }

        {/* eBooks 1 */}
        {
          data.eBook1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div className='min-h-[400px] aspect-[1/1] bg-[#eee] rounded-2xl'>
                {/* <Image src={BOOK2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" /> */}
              </div>
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  eBooks
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  Coming Soon
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  Next book title dropping soon!
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Register Your Interest</DefaultButton>
                  </span>
                  <span>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
            </div>
          )
        }


        {/* eBooks 2 */}
        {
          data.eBook2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  eBooks
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  Coming Soon
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  Next book title dropping soon!
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Register Your Interest</DefaultButton>
                  </span>
                  <span>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
              <div className='min-h-[400px] aspect-[1/1] bg-[#eee] rounded-2xl'>
                {/* <Image src={BOOK2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" /> */}
              </div>
            </div>
          )
        }


        {/* Book1 */}
        {
          data.book1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div className='min-h-[400px] aspect-[1/1] bg-[#eee] rounded-2xl'>
                {/* <Image src={BOOK2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" /> */}
              </div>
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  Published
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  Coming Soon
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  next book title dropping soon! 
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Register Your Interest</DefaultButton>
                  </span>
                  <span>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
            </div>
          )
        }


        {/* Book2 */}
        {
          data.book2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  Published
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  Value Driven Data - The Workbook (Anniversary Special)
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  Enhance your 'Value Driven Data' experience with this dedicated workbook
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span onClick={() => window.open('https://drive.google.com/file/d/1u35UsBuqZ3XfWE74L4O2faadGCWfyzn3/view?ref=edosaodaro.com')}>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Download it Here</DefaultButton>
                  </span>
                  <span onClick={() => window.open('https://www.edosaodaro.com/workbook-anniversary-edition/')}>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
              <div>
                <Image src={BOOK2} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
              </div>
            </div>
          )
        }


        {/* Book3 */}
        {
          data.book3 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div>
                <Image src={BOOK1} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
              </div>
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  Published
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  Value Driven Data
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  Translate data into tangible business value with this strategic guide
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span onClick={() => window.open('https://www.amazon.co.uk/Value-Driven-Data-Identifying-Communicating-Delivering/dp/1398608629?_encoding=UTF8&tag=edosa-21&linkCode=ur2&linkId=f67ebc6158182b49165bec261d756022&camp=1634&creative=6738&ref=edosaodaro.com')}>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Get it Here</DefaultButton>
                  </span>
                  <span onClick={() => window.open('https://www.edosaodaro.com/value-driven-data/')}>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
            </div>
          )
        }


        {/* Book4 */}
        {
          data.book4 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  Published
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  Making Data Work
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  Translate data into tangible business value with this strategic guide
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span onClick={() => window.open('https://www.amazon.co.uk/dp/1032224436?ref_=cm_sw_r_cp_ud_dp_NPE905G65VQF17YVQW8H&ref=edosaodaro.com')}>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Get it Here</DefaultButton>
                  </span>
                  <span onClick={() => window.open('https://www.edosaodaro.com/making-data-work/')}>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
              <div>
                <Image src={BOOK4} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
              </div>
            </div>
          )
        }


        {/* Book5 */}
        {
          data.book5 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div>
                <Image src={BOOK3} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
              </div>
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  Published
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  Value Driven Data - The Executive Handbook
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  An executive guide to data for strategic business value creation
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Request Here</DefaultButton>
                  </span>
                  <span onClick={() => window.open('https://www.edosaodaro.com/value-driven-data-the-executive-handbook/')}>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
            </div>
          )
        }


        {/* Book6 */}
        {
          data.book6 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  Published
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  BULK ORDER
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  bulk order
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Order Here</DefaultButton>
                  </span>
                  <span onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
              <div className='min-h-[400px] aspect-[1/1] bg-[#eee] rounded-2xl'>
                {/* <Image src={BOOK3} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" /> */}
              </div>
            </div>
          )
        }


        {/* Book7 */}
        {
          data.book7 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
              <div className='min-h-[400px] aspect-[1/1] bg-[#eee] rounded-2xl'>
                {/* <Image src={BOOK3} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" /> */}
              </div>
              <div className='relative h-full min-h-[400px]'>
                <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                  Published
                </div>
                <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                  PERSONALISED ORDER
                </div>
                <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>
                  personalised order
                </p>
                <div className="flex flex-row mt-8 ml-4 absolute bottom-10">
                  <span onClick={() => window.open('https://www.edosaodaro.com/bespoke-contact/')}>
                    <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Order Here</DefaultButton>
                  </span>
                  <span onClick={() => window.open('https://www.edosaodaro.com/bespoke-contact/')}>
                    <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                  </span>
                </div>
              </div>
            </div>
          )
        }

    </div>
  );
};

export default Books;