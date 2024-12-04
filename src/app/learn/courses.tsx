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
    <div className='sm:ml-14 pb-5 mt-10 sm:mt-24'>
      {/* course 1 */}
      {
        data.course1 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6`}>
            <div>
              <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
                Course 1
              </div>
              <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                $Million AI Value Advisor - 12 Steps Kickstarting Your Journey
              </div>
              <div className="text-sm sm:text-lg leading-8 mt-4 sm:mt-8 text-text-color mr-10 sm:w-3/4">
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
              <div className="flex flex-row mt-8 ml-4 ">
                <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Start Here</DefaultButton>
                <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
              </div>
            </div>
            <div>
              <Image src={IMAGE1} alt="learn image" className="sm:pt-0 pt-4" />
            </div>
          </div>
        )
      }

      {/* course 2 */}
      {
        data.course2 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-24`}>
            <div>
              <Image src={IMAGE1} alt="learn image" className="sm:pt-0 pt-4" />
            </div>
            <div>
              <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
                Course 2
              </div>
              <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                Demystifying & Accelerating AI Value
              </div>
              <div className="text-sm sm:text-lg leading-8 mt-4 sm:mt-8 text-text-color mr-10 sm:w-3/4">
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
              <div className="flex flex-row mt-8 ml-4 ">
                <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Apply for Next Cohort</DefaultButton>
                <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
              </div>
            </div>
          </div>
        )
      }

      {/* eCoaching */}
      {
        data.eCoaching && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-24`}>
            <div>
              <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
                eCoaching
              </div>
              <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                AI Value eCoaching Series
              </div>
              <div className="text-sm sm:text-lg leading-8 mt-4 sm:mt-8 text-text-color mr-10 sm:w-3/4">
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
              <div className="flex flex-row mt-8 ml-4 ">
                <span onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}>
                  <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Start Here</DefaultButton>
                </span>
                <span onClick={() => window.open('https://www.edosaodaro.com/free-coaching-snippets/')}>
                  <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                </span>
              </div>
            </div>
            <div>
              <Image src={IMAGE2} alt="learn image" className="sm:pt-0 pt-4" />
            </div>
          </div>
        )
      }

      {/* personalised Coaching */}
      {
        data.personalisedCoaching && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-24`}>
            <div>
              <Image src={IMAGE2} alt="learn image" className="sm:pt-0 pt-4" />
            </div>
            <div>
              <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
                Personalised Coaching
              </div>
              <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                Value Driven AI Transformation
              </div>
              <div className="text-sm sm:text-lg leading-8 mt-4 sm:mt-8 text-text-color mr-10 sm:w-3/4">
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
              <div className="flex flex-row mt-8 ml-4 ">
                <span onClick={() => window.open('https://www.edosaodaro.com/value-driven-transformation/')}>
                  <DefaultButton buttonColor="white" className="!text-text-color !py-2 !sm-py-2 border-2 border-gray-800">Start Here</DefaultButton>
                </span>
                <span onClick={() => window.open('https://www.edosaodaro.com/value-driven-transformation/')}>
                  <DefaultButton className="ml-8 !py-2 !sm-py-2">Find Out More</DefaultButton>
                </span>
              </div>
            </div>
          </div>
        )
      }

    </div >
  );
};

export default Courses;