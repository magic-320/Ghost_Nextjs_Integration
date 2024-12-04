'use client';
import type { NextPage } from "next";
import Image from "next/image";
import WOMAN from "@/public/assets/images/women.png";
import STAR from "@/public/assets/svg/star.svg";
import DOTS from "@/public/assets/svg/threedot.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// review photo
import Dion from '@/public/assets/review_photo/Dion.webp';
import Gero from '@/public/assets/review_photo/Gero.webp';
import Graeme from '@/public/assets/review_photo/Graeme.webp';
import Andrew from '@/public/assets/review_photo/Andrew.webp';
import JC from '@/public/assets/review_photo/JC.webp';
import Johanna from '@/public/assets/review_photo/Johanna.webp';
import Rowland from '@/public/assets/review_photo/Rowland.webp';
import Simone from '@/public/assets/review_photo/Simone.webp';
import Ram from '@/public/assets/review_photo/Ram.webp';
import Mona from '@/public/assets/review_photo/Mona.webp';
import Stylianos from '@/public/assets/review_photo/Stylianos.webp';
import Sam from '@/public/assets/review_photo/Sam.webp';
import MakingDataWork from '@/public/assets/review_photo/makingDataWork.png';
import Book1 from '@/public/assets/review_photo/book1.png';
import NoUser from '@/public/assets/review_photo/noUser.jpg';


const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 40000, min: 30000 },
      items: 1
  },
  desktop: {
      breakpoint: { max: 30000, min: 10240, },
      items: 1
  },
  tablet: {
      breakpoint: { max: 10240, min: 4640 },
      items: 1
  },
  mobile: {
      breakpoint: { max: 4640, min: 0 },
      items: 1
  }
};

const reviews:any[] = [
  {
    content: "Provides insightful frameworks and considerations for every organisation that wants to get more value out of data and analytics.",
    name: "Gero Martin Gunkel",
    job: "Data Science Leader & Chief Operating Officer (ZCAM) at Zurich Insurance",
    photo: Gero,
    bookImg: Book1
  },
  {
    content: "Value Driven Data cuts through the rumours and hearsay with real-life, no-nonsense examples of creating a data vision and value in practice.",
    name: "Graeme McDermott",
    job: "Chief Data Officer @ Tempcover",
    photo: Graeme,
    bookImg: Book1
  },
  {
    content: "My clients, senior sales executives, grapple with how to make sense of mountains of data residing in multiple databases and in processes driven by short-term targets. Edosa’s insights about leveraging AI are perfect for opening their eyes about better ways to use data to achieve sales targets.",
    name: "Andrew Brown",
    job: "Founder @ Bridgemaker Referral Programs",
    photo: Andrew,
    bookImg: Book1
  },
  {
    content: "Edosa brings his experience and expertise together to remind us all of how expressing data value is fundamental to data driven transformation.",
    name: "JC Lionti",
    job: "Managing Director and Chief Data Officer @ Mizuho",
    photo: JC,
    bookImg: Book1
  },
  {
    content: "Value-Driven Data is a timely and practical guide to support us all with the challenge of unlocking and measuring the value of data.",
    name: "Dr Johanna Hutchinson",
    job: "Chief Data Officer, BAE Systems and Board Member, The Royal Statistics Society",
    photo: Johanna,
    bookImg: Book1
  },
  {
    content: "Value-Driven Data provides a comprehensive framework for developing a data vision that aligns with the overall strategy of an organisation.",
    name: "Rowland Agidee",
    job: "Chief Analytics Officer at University Hospitals of Derby and Burton NHS Foundation Trust",
    photo: Rowland,
    bookImg: Book1
  },
  {
    content: "Offers a combination of deep knowledge and practical value for leaders guiding organisations through the responsible use of data. I hope his shared knowledge will reach data professionals around the world and contribute to their success.",
    name: "Simone Steel",
    job: "Chief Data and Analytics Officer & CIO for Enterprise Data Platforms, Nationwide Building Society",
    photo: Simone,
    bookImg: Book1
  },
  {
    content: "Edosa has done terrific work in producing this masterpiece!",
    name: "Ram Kumar",
    job: "Chief Data and Analytics Officer, International Health @ Cigna",
    photo: Ram,
    bookImg: Book1
  },
  {
    content: "Edosa has masterfully stitched together a collection of great examples with a set of tangible principles to guide readers on how to enhance their potential with data.",
    name: "Mona Soni",
    job: "Chief Technology Officer, formerly at S&P Global and Dow Jones",
    photo: Mona,
    bookImg: Book1
  },
  {
    content: "Wow! Leaders at The House of Influence just experienced Edosa's powerful session on AI and Data. Tackling leaders' knowledge gaps, angst and anxieties, his clear, engaging approach sparked excitement and enlightenment. Renowned for simplifying complex topics, Edosa left us all both captivated and empowered. Salute!",
    name: "Dion Johnson",
    job: "Board-Level Leadership Coach",
    photo: Dion,
    bookImg: Book1
  },
  {
    content: "A valuable instrument in an era of cost optimisation, providing knowledge to aid in directing and articulating vision, value and creating pathways to overcome obstacles.",
    name: "Stylianos Taxidis",
    job: "Manager Data & Technology Consulting in Sustainable Finance @ EY",
    photo: Stylianos,
    bookImg: Book1
  },
  {
    content: "Business Leaders, whilst interested, do not really care how we as data professionals do it. Influencing top line, cost avoidance and bottom line are central to 99.9% of business strategies and so should also be the main focus when creating data strategies.",
    name: "Sam Richmond",
    job: "Group Head of Data at The Go-Ahead Group",
    photo: Sam,
    bookImg: Book1
  },
  {
    content: 'This book offers fresh insight about how to solve the interactional frictions that hamper the flow of data, information and knowledge across organisations. Yet, rather than being stuck with endless polarising debates such as breaking down silos, it shifts focus back towards the ultimate "to what end."',
    name: "Tim Carmichael",
    job: "Chief Data Officer, Chalhoub Group",
    photo: NoUser,
    bookImg: MakingDataWork
  },
  {
    content: "If you care about AI transformation, empowering people or advancing organisational success in an increasingly digital world, then you should read this book.",
    name: "Jacky Wright",
    job: "Chief Digital Officer (CDO), Microsoft US",
    photo: NoUser,
    bookImg: MakingDataWork
  },
  {
    content: "Making Data Work explores real-world examples of data mismanagement, highlighting the risks of failed implementations, and offers guidance on leveraging data and AI effectively to drive digital transformation, empower people, and achieve better outcomes.",
    name: "Yomi Ibosiola",
    job: "Chief Data and Analytics Officer, Union Bank",
    photo: NoUser,
    bookImg: MakingDataWork
  }
]



const ReviewComponent: NextPage = () => {

  return (
    <Carousel responsive={responsive} autoPlay={true} infinite={true} arrows={true} autoPlaySpeed={3000}>
        {
          reviews.map((el:any, index:number) => {
            return (
                <div key={index} className='flex flex-col md:flex-row md:row-span-2 relative mt-5 md:mt-10 rounded-2xl bg-[#F3F8FE] h-[auto] w-[100%]'>
                  <div className="flex flex-col ml-6 md:ml-16 mt-16">
                    <div className="flex flex-row gap-2">
                      <Image src={STAR} alt="star"></Image>
                      <Image src={STAR} alt="star"></Image>
                      <Image src={STAR} alt="star"></Image>
                      <Image src={STAR} alt="star"></Image>
                      <Image src={STAR} alt="star"></Image>
                    </div>
                    <div className="text-xl md:text-2xl mt-4 mr-4 font-inter md:mt-6">
                      {el.content}
                    </div>
                    <div className="text-xl font-bold font-inter w-3/5 mt-6">
                      — {el.name}
                    </div>
                    <div className="text-xl font-inter md:first-letter:w-3/5 mt-3">
                      {el.job}
                    </div>
                    <div className="mt-6 flex gap-3">
                      {
                        reviews.map((j:any, i:number) => (
                          index == i ? (
                            <div key={i} className="w-[12px] aspect-[1/1] bg-[#6941c6] rounded-[50%] hover:cursor-pointer"></div>
                          ) : (
                            <div key={i} className="w-[12px] aspect-[1/1] bg-[#aaa] rounded-[50%] hover:cursor-pointer"></div>
                          )
                        ))
                      }
                      
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end mb-5 md:mb-0 w-full h-[auto]">
                    <Image src={el.photo} alt="user image" height={448} className="rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl mt-4 md:mt-0" />
                  </div>
                </div>
            )
          })
        }
    </Carousel>
  );
};

export default ReviewComponent;