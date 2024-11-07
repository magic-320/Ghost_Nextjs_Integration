'use client';
import React, { FC, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios';
import BOOK1 from "@/public/assets/images/books/book1.png";
import BOOK2 from "@/public/assets/images/books/book2.png";
import BOOK3 from "@/public/assets/images/books/book3.png";
import BOOK4 from "@/public/assets/images/books/book4.png";
import DefaultButton from "../components/buttons/DefaultButton";

type PostsResponse = {
  posts: any;
};

const Books: FC = () => {

  const [data, setData] = useState<any>([]);

  React.useEffect(() => {
    const getPosts = async() => {
      try {
          const res = await axios.post<PostsResponse>('/api/content/posts', {
              payload: "&limit=all&filter=tag:hash-books"
          });
          console.log(res.data.posts);
          setData(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    }

    getPosts();    
  }, [])

  return (
    <div className='sm:ml-14 pb-5 mt-10 sm:mt-24'>

      {
          data.map((el: any, index: number) => (
              index%2 == 0 ? (

                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 sm:mx-16 mt-6 sm:mt-24">
                  <div>
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
                      Book
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      {el.title}
                    </div>
                    <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>{el.custom_excerpt}</p>
                  </div>
                  <div className='p-[0em] sm:p-[3em]'>
                    <img src={el.feature_image} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
                  </div>
                </div>

              ) : (

                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-6 sm:mt-24">
                  <div className='p-[0em] sm:p-[3em]'>
                    <img src={el.feature_image} alt="learn image" className="sm:pt-0 pt-4 w-full rounded-2xl" />
                  </div>
                  <div>
                    <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-5 sm:px-5 py-1 text-center max-w-52">
                      Book
                    </div>
                    <div className="text-lg sm:text-4xl leading-11 font-bold mt-6 sm:mt-10 text-text-color">
                      {el.title}
                    </div>
                    <p className='text-text-color mt-5 text-[15px] sm:text-[20px]'>{el.custom_excerpt}</p>
                  </div>
                </div>

              )
          ))
      }
      
    </div >
  );
};

export default Books;