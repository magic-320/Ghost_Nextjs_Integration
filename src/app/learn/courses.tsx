'use client';
import type { NextPage } from "next";
import React, { useState } from 'react';
import Image from "next/image";
import IMAGE1 from "@/public/assets/images/learn/image1.png";
import IMAGE2 from "@/public/assets/images/learn/image2.png";
import DefaultButton from "../components/buttons/DefaultButton";
import axios from "axios";

const Courses: NextPage = () => {

  const [data, setData] = useState<any>({});

  React.useEffect(() => {
    const getCourse = async() => {
      const response = await axios.get<any>('/api/learnAdmin/getCourse');
      setData(response.data);
    }

    getCourse();
  }, [])

  return (
    <div className='sm:mx-14 pb-5 mt-10 sm:mt-24'>
      {/* course 1 */}
      {
        data.course1 && (
            <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
                {/* mobile */}
                <div className="w-full lg:w-6/12 sm:px-5 py-5 rounded-2xl block lg:hidden">

                    <div className="flex justify-center">
                      <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                        Courses
                      </div>
                      <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                        $Million AI Advisor - 12 Steps for Kickstarting Your Journey
                      </div>
                      <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        Dummy Text
                      </div>
                      <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                          <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                            Apply for Next Cohort
                          </div>
                          <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                            Find Out More
                          </div>
                      </div>
                    </div>  
                </div>
                {/* PC */}
                <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Courses
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      $Million AI Advisor - 12 Steps for Kickstarting Your Journey
                    </div>
                    <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                      Dummy Text
                    </div>
                    <div className="flex flex-row mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                          Apply for Next Cohort
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

      {/* course 2 */}
      {
        data.course2 && (
          <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
              {/* mobile */}
              <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden" >

                  <div className="flex justify-center overflow-hidden">
                    <Image src={IMAGE1} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      Courses
                    </div>
                    <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Demystifying & Accelerating AI Value
                    </div>
                    <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        <h2>What You’ll Learn:</h2>
                        <ul className="list-disc ml-10 mt-4">
                          <li><strong>Fundamental AI Concepts:</strong> Dive into the core of AI in 3 weeks.</li>
                          <li><strong>Practical AI Applications:</strong> Discover how to boost your career.</li>
                          <li><strong>Smart Data & AI Investments:</strong> Ensure strategic success.</li>
                          <li><strong>Pitfall Prevention:</strong> Learn to avoid common errors in AI projects.</li>
                        </ul>

                        <h2 className="my-4">Course Benefits:</h2>
                        <ul className="list-disc ml-10">
                          <li><strong>Exclusive Cohort:</strong> Join business leaders and professionals.</li>
                          <li><strong>Interactive Sessions:</strong> Enhance your AI understanding.</li>
                          <li><strong>Networking:</strong> Connect with peers of mutual career growth.</li>
                          <li><strong>Industry Insights:</strong> Gain direct access to valuable industry insights and success strategies.</li>
                        </ul>
                    </div>
                    <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                        <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800">
                          Apply for Next Cohort
                        </div>
                        <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0">
                          Find Out More
                        </div>
                    </div>
                  </div>  
              </div>
              {/* PC */}
              <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${IMAGE1.src})` }} ></div>
              </div>
              <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                  <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                    Courses
                  </div>
                  <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                    Demystifying & Accelerating AI Value
                  </div>
                  <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                      <h2>What You’ll Learn:</h2>
                      <ul className="list-disc ml-10 mt-4">
                        <li><strong>Fundamental AI Concepts:</strong> Dive into the core of AI in 3 weeks.</li>
                        <li><strong>Practical AI Applications:</strong> Discover how to boost your career.</li>
                        <li><strong>Smart Data & AI Investments:</strong> Ensure strategic success.</li>
                        <li><strong>Pitfall Prevention:</strong> Learn to avoid common errors in AI projects.</li>
                      </ul>

                      <h2 className="my-4">Course Benefits:</h2>
                      <ul className="list-disc ml-10">
                        <li><strong>Exclusive Cohort:</strong> Join business leaders and professionals.</li>
                        <li><strong>Interactive Sessions:</strong> Enhance your AI understanding.</li>
                        <li><strong>Networking:</strong> Connect with peers of mutual career growth.</li>
                        <li><strong>Industry Insights:</strong> Gain direct access to valuable industry insights and success strategies.</li>
                      </ul>
                  </div>
                  <div className="flex flex-row mt-8 ml-4 gap-4">
                      <div className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800">
                        Apply for Next Cohort
                      </div>
                      <div className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer">
                        Find Out More
                      </div>
                  </div>
              </div>
          </div>
        )
      }

      {/* eCoaching */}
      {
        data.eCoaching && (
          <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('/Dashboard/learn?slug=free-coaching-snippets')}>
              {/* mobile */}
              <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">

                  <div className="flex justify-center overflow-hidden">
                    <Image src={IMAGE2} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      eCoaching
                    </div>
                    <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      AI Value eCoaching Series
                    </div>
                    <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        Free Coaching Snippets To Help You Reach Your Full Value Driven Potential
                    </div>
                    <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('/Dashboard/learn?slug=free-coaching-snippets')}
                        >
                          Start Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                          onClick={() => window.open('/Dashboard/learn?slug=free-coaching-snippets')}
                        >
                          Find Out More
                        </div>
                    </div>
                  </div>  
              </div>
              {/* PC */}
              <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                  <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                    eCoaching
                  </div>
                  <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                    AI Value eCoaching Series
                  </div>
                  <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                      Free Coaching Snippets To Help You Reach Your Full Value Driven Potential
                  </div>
                  <div className="flex flex-row mt-8 ml-4 gap-4">
                      <div 
                        className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                        onClick={() => window.open('/Dashboard/learn?slug=free-coaching-snippets')}
                      >
                        Start Here
                      </div>
                      <div 
                        className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                        onClick={() => window.open('/Dashboard/learn?slug=free-coaching-snippets')}
                      >
                        Find Out More
                      </div>
                  </div>
              </div>
              <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${IMAGE2.src})` }} ></div>
              </div>
          </div>
        )
      }

      {/* eResources */}
      {
        data.resource1 && (
          <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer">
              {/* mobile */}
              <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                  
                  <div className="flex justify-center">
                    <div className="bg-[#eee] max-w-[570px] w-full min-h-[200px] rounded-2xl"></div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      eResources
                    </div>
                    <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      $Million AI Advisor Toolkit
                    </div>
                    <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                      Free tools and resources to accelerate your AI Advisory transformation!
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
                  <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                    eResources
                  </div>
                  <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                    $Million AI Advisor Toolkit
                  </div>
                  <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[5em] sm:min-h-[10em]'>
                    Free tools and resources to accelerate your AI Advisory transformation!
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

      {/* eResources */}
      {
        data.resource2 && (
          <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('/Dashboard/read?slug=cheatsheets-resources')}>
              {/* mobile */}
              <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                  
                  <div className="flex justify-center overflow-hidden">
                    <Image src={IMAGE2} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                      eResources
                    </div>
                    <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      Free Value Driven CheatSheets
                    </div>
                    <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        <h2>What You’ll Learn:</h2>
                        <ul className="list-disc ml-10 mt-4">
                          <li><strong>Fundamental AI Concepts:</strong> Dive into the core of AI in 3 weeks.</li>
                          <li><strong>Practical AI Applications:</strong> Discover how to boost your career.</li>
                          <li><strong>Smart Data & AI Investments:</strong> Ensure strategic success.</li>
                          <li><strong>Pitfall Prevention:</strong> Learn to avoid common errors in AI projects.</li>
                        </ul>

                        <h2 className="my-4">Course Benefits:</h2>
                        <ul className="list-disc ml-10">
                          <li><strong>Exclusive Cohort:</strong> Join business leaders and professionals.</li>
                          <li><strong>Interactive Sessions:</strong> Enhance your AI understanding.</li>
                          <li><strong>Networking:</strong> Connect with peers of mutual career growth.</li>
                          <li><strong>Industry Insights:</strong> Gain direct access to valuable industry insights and success strategies.</li>
                        </ul>
                    </div>
                    <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('/Dashboard/read?slug=cheatsheets-resources')}
                        >
                          Get it Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                          onClick={() => window.open('/Dashboard/read?slug=cheatsheets-resources')}
                        >
                          Find Out More
                        </div>
                    </div>
                  </div>  
              </div>
              {/* PC */}
              <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                  <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-52">
                    eResources
                  </div>
                  <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                    Free Value Driven CheatSheets
                  </div>
                  <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                      <h2>What You’ll Learn:</h2>
                      <ul className="list-disc ml-10 mt-4">
                        <li><strong>Fundamental AI Concepts:</strong> Dive into the core of AI in 3 weeks.</li>
                        <li><strong>Practical AI Applications:</strong> Discover how to boost your career.</li>
                        <li><strong>Smart Data & AI Investments:</strong> Ensure strategic success.</li>
                        <li><strong>Pitfall Prevention:</strong> Learn to avoid common errors in AI projects.</li>
                      </ul>

                      <h2 className="my-4">Course Benefits:</h2>
                      <ul className="list-disc ml-10">
                        <li><strong>Exclusive Cohort:</strong> Join business leaders and professionals.</li>
                        <li><strong>Interactive Sessions:</strong> Enhance your AI understanding.</li>
                        <li><strong>Networking:</strong> Connect with peers of mutual career growth.</li>
                        <li><strong>Industry Insights:</strong> Gain direct access to valuable industry insights and success strategies.</li>
                      </ul>
                  </div>
                  <div className="flex flex-row mt-8 ml-4 gap-4">
                      <div 
                        className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                        onClick={() => window.open('/Dashboard/read?slug=cheatsheets-resources')}
                      >
                        Get it Here
                      </div>
                      <div 
                        className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                        onClick={() => window.open('/Dashboard/read?slug=cheatsheets-resources')}
                      >
                        Find Out More
                      </div>
                  </div>
              </div>
              <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${IMAGE2.src})` }} ></div>
              </div>
          </div>
        )
      }

      {/* personalised Coaching */}
      {
        data.personalisedCoaching && (
          <div className="block lg:flex w-full mt-6 sm:mt-24 hover:cursor-pointer" onClick={() => window.open('https://personal-value-driven.scoreapp.com/?ref=edosaodaro.com')}>
              {/* mobile */}
              <div className="w-full lg:w-6/12 px-0 sm:px-5 py-5 rounded-2xl block lg:hidden">
                  
                  <div className="flex justify-center overflow-hidden">
                    <Image src={IMAGE2} alt="learn" className="transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" />
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-[14em]">
                      Personalised Coaching
                    </div>
                    <div className="text-lg sm:text-3xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                       Value Driven AI Transformation
                    </div>
                    <div className="text-text-color mt-5 text-[15px] sm:text-[20px]">
                        Moving yourself from just knowledge to full and tangible self transformation
                    </div>
                    <div className="block sm:flex flex-row justify-center mt-8 ml-4 gap-4">
                        <div 
                          className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer border-2 border-gray-800"
                          onClick={() => window.open('https://personal-value-driven.scoreapp.com/?ref=edosaodaro.com')}
                        >
                          Start Here
                        </div>
                        <div 
                          className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 sm:py-3 px-4 sm:px-6 hover:cursor-pointer mt-2 sm:mt-0"
                          onClick={() => window.open('https://personal-value-driven.scoreapp.com/?ref=edosaodaro.com')}
                        >
                          Find Out More
                        </div>
                    </div>
                  </div>  
              </div>
              {/* PC */}
              <div className="w-full lg:w-6/12 mx-10 rounded-2xl overflow-hidden">
                <div className="h-full rounded-2xl bg-cover bg-center transition-all duration-400 ease-linear hover:grayscale hover:scale-105 hover:cursor-pointer transform" style={{ backgroundImage: `url(${IMAGE2.src})` }} ></div>
              </div>
              <div className="w-full lg:w-6/12 px-5 py-5 hidden lg:block">
                  <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-l-demo-color px-5 sm:px-5 py-1 text-center max-w-[14em]">
                    Personalised Coaching
                  </div>
                  <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                     Value Driven AI Transformation
                  </div>
                  <div className='text-text-color mt-5 text-[15px] sm:text-[20px] min-h-[10em] sm:min-h-[18em]'>
                      Moving yourself from just knowledge to full and tangible self transformation
                  </div>
                  <div className="flex flex-row mt-8 ml-4 gap-4">
                      <div 
                        className="bg-[#FFF] text-text-color rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer border-2 border-gray-800"
                        onClick={() => window.open('https://personal-value-driven.scoreapp.com/?ref=edosaodaro.com')}
                      >
                        Start Here
                      </div>
                      <div 
                        className="bg-text-color text-[#FFF] rounded-full bold text-center text-[14px] sm:text-[16px] py-1.5 md:py-3 px-4 md:px-6 hover:cursor-pointer"
                        onClick={() => window.open('https://personal-value-driven.scoreapp.com/?ref=edosaodaro.com')}
                      >
                        Find Out More
                      </div>
                  </div>
              </div>
          </div>
        )
      }


    </div >
  );
};

export default Courses;