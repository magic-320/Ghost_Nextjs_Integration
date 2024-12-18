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
    <div className='sm:mx-14 pb-5 mt-10 sm:mt-24'>

        {/* Book2 */}
        {
          data.book2 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('/Dashboard/read?slug=workbook-anniversary-edition')}>
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                  <div className="flex justify-center overflow-hidden">
                    <Image src={BOOK2} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                  </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Published
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        Value Driven Data - The Workbook (Anniversary Special)
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                          Enhance your 'Value Driven Data' experience with this dedicated workbook
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div 
                            className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                            onClick={() => window.open('https://drive.google.com/file/d/1u35UsBuqZ3XfWE74L4O2faadGCWfyzn3/view?ref=edosaodaro.com')}
                          >
                            Download it Here
                          </div>
                          <div 
                            className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                            onClick={() => window.open('/Dashboard/read?slug=workbook-anniversary-edition')}
                          >
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Published
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Value Driven Data - The Workbook (Anniversary Special)
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                        Enhance your 'Value Driven Data' experience with this dedicated workbook
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('https://drive.google.com/file/d/1u35UsBuqZ3XfWE74L4O2faadGCWfyzn3/view?ref=edosaodaro.com')}
                        >
                          Download it Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                          onClick={() => window.open('/Dashboard/read?slug=workbook-anniversary-edition')}
                        >
                          Find Out More
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                  <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${BOOK2.src})` }} ></div>
                </div>
            </div>
          )
        }


        {/* Book3 */}
        {
          data.book3 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('/Dashboard/read?slug=value-driven-data')}>
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                  <div className="flex justify-center overflow-hidden">
                    <Image src={BOOK1} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                  </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Published
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        Value Driven Data
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                          Translate data into tangible business value with this strategic guide
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div 
                            className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                            onClick={() => window.open('https://www.amazon.co.uk/Value-Driven-Data-Identifying-Communicating-Delivering/dp/1398608629?_encoding=UTF8&tag=edosa-21&linkCode=ur2&linkId=f67ebc6158182b49165bec261d756022&camp=1634&creative=6738&ref=edosaodaro.com')}
                          >
                            Get it Here
                          </div>
                          <div 
                            className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                            onClick={() => window.open('/Dashboard/read?slug=value-driven-data')}
                          >
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                  <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${BOOK1.src})` }} ></div>
                </div>
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Published
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Value Driven Data
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                        Translate data into tangible business value with this strategic guide
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('https://www.amazon.co.uk/Value-Driven-Data-Identifying-Communicating-Delivering/dp/1398608629?_encoding=UTF8&tag=edosa-21&linkCode=ur2&linkId=f67ebc6158182b49165bec261d756022&camp=1634&creative=6738&ref=edosaodaro.com')}
                        >
                          Get it Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                          onClick={() => window.open('/Dashboard/read?slug=value-driven-data')}
                        >
                          Find Out More
                        </div>
                    </div>
                </div>
            </div>
          )
        }

        {/* Book5 */}
        {
          data.book5 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('/Dashboard/read?slug=value-driven-data-the-executive-handbook')}>
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                  <div className="flex justify-center overflow-hidden">
                    <Image src={BOOK3} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                  </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Published
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        Value Driven Data - The Executive Handbook
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                          An executive guide to data for strategic business value creation
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div 
                            className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                            onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}
                          >
                            Request Here
                          </div>
                          <div 
                            className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                            onClick={() => window.open('/Dashboard/read?slug=value-driven-data-the-executive-handbook')}
                          >
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Published
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Value Driven Data - The Executive Handbook
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                        An executive guide to data for strategic business value creation
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}
                        >
                          Request Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                          onClick={() => window.open('/Dashboard/read?slug=value-driven-data-the-executive-handbook')}
                        >
                          Find Out More
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                  <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${BOOK3.src})` }} ></div>
                </div>
            </div>
          )
        }


        {/* Book4 */}
        {
          data.book4 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('/Dashboard/read?slug=making-data-work')}>
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                  <div className="flex justify-center overflow-hidden">
                    <Image src={BOOK4} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                  </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Published
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        Making Data Work
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                          Translate data into tangible business value with this strategic guide
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div 
                            className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                            onClick={() => window.open('https://www.amazon.co.uk/dp/1032224436?ref_=cm_sw_r_cp_ud_dp_NPE905G65VQF17YVQW8H&ref=edosaodaro.com')}
                          >
                            Get it Here
                          </div>
                          <div 
                            className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                            onClick={() => window.open('/Dashboard/read?slug=making-data-work')}
                          >
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                  <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${BOOK4.src})` }} ></div>
                </div>
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Published
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Making Data Work
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                        Translate data into tangible business value with this strategic guide
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('https://www.amazon.co.uk/dp/1032224436?ref_=cm_sw_r_cp_ud_dp_NPE905G65VQF17YVQW8H&ref=edosaodaro.com')}
                        >
                          Get it Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                          onClick={() => window.open('/Dashboard/read?slug=making-data-work')}
                        >
                          Find Out More
                        </div>
                    </div>
                </div>
            </div>
          )
        }


        {/* Book6 */}
        {
          data.book6 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}>
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center">
                      <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Published
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        BULK ORDER
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        bulk order 
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div 
                            className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                            onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}
                          >
                            Order Here
                          </div>
                          <div 
                            className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                            onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}
                          >
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Published
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      BULK ORDER
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                      bulk order 
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}
                        >
                          Order Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                          onClick={() => window.open('https://www.edosaodaro.com/bulk-contact/')}
                        >
                          Find Out More
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl bg-[#eee]"></div>
            </div>
          )
        }


        {/* Book7 */}
        {
          data.book7 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('https://www.edosaodaro.com/bespoke-contact/')}>
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center">
                      <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Published
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        PERSONALISED ORDER
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        personalised order 
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div 
                            className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                            onClick={() => window.open('https://www.edosaodaro.com/bespoke-contact/')}
                          >
                            Order Here
                          </div>
                          <div 
                            className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                            onClick={() => window.open('https://www.edosaodaro.com/bespoke-contact/')}
                          >
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl bg-[#eee]"></div>
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Published
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      PERSONALISED ORDER
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                      personalised order 
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('https://www.edosaodaro.com/bespoke-contact/')}
                        >
                          Order Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                          onClick={() => window.open('https://www.edosaodaro.com/bespoke-contact/')}
                        >
                          Find Out More
                        </div>
                    </div>
                </div>
            </div>
          )
        }


        {/* Book1 */}
        {
          data.book1 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center">
                      <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Published
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        Coming Soon
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        Next book title dropping soon!  
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                            Register Your Interest
                          </div>
                          <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Published
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Coming Soon
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                      Next book title dropping soon!  
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                          Register Your Interest
                        </div>
                        <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                          Find Out More
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl bg-[#eee]"></div>
            </div>
          )
        }


        {/* Blogs */}
        {
          data.blogs && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center">
                      <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Blogs
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        The AI Values Podcast
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        Navigating the value, values, issues and future of AI. We can’t wait to welcome you to the show to share the latest advancements in the AI world and the big questions that you are currently wanting to answer.
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                            Get it Here
                          </div>
                          <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl bg-[#eee]"></div>
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Blogs
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      The AI Values Podcast
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                      Navigating the value, values, issues and future of AI. We can’t wait to welcome you to the show to share the latest advancements in the AI world and the big questions that you are currently wanting to answer.
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                          Get it Here
                        </div>
                        <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                          Find Out More
                        </div>
                    </div>
                </div>
            </div>
          )
        }

        {/* eBooks 1 */}
        {
          data.eBook1 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center">
                      <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        eBooks
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        Coming Soon
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        Next book title dropping soon! 
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                            Register Your Interest
                          </div>
                          <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      eBooks
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Coming Soon
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                      Next book title dropping soon! 
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                          Register Your Interest
                        </div>
                        <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                          Find Out More
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl bg-[#eee]"></div>
            </div>
          )
        }


        {/* eBooks 2 */}
        {
          data.eBook2 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                {/* mobile */}
                <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                    
                    <div className="flex justify-center">
                      <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        eBooks
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        Coming Soon
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        Next book title dropping soon! 
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                            Register Your Interest
                          </div>
                          <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 mx-10 rounded-2xl bg-[#eee]"></div>
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-r-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      eBooks
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Coming Soon
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                      Next book title dropping soon! 
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                          Register Your Interest
                        </div>
                        <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                          Find Out More
                        </div>
                    </div>
                </div>
            </div>
          )
        }

    </div>
  );
};

export default Books;