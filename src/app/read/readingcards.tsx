"use client"; // Add this line at the top

import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import UpdatedCard from "../components/cards/UpdatedCard";

type PostsResponse = {
    posts: any;
};

const ReadingCards: FC = () => {
    const [drivenItems, setDrivenItems] = useState<any[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const course = await axios.post<PostsResponse>('/api/content/posts', {
                    payload: "&limit=all&filter=featured:true"
                });

                const items = course.data.posts.map((post: any) => ({
                    typeName: "",
                    typeColor: "#FF4405",
                    header: post.title,
                    content: post.excerpt,
                    cardColor: "#FFF7F4",
                    imgUrl: post.feature_image,
                    linkUrl: '',
                    wholeData: post
                }));

                setDrivenItems(items);
            } catch (err) {
                console.error(err);
            }
        };

        getPosts();
    }, []);


    return (
        <div className="mt-4 sm:mt-14 px-4 sm:px-10">
            <div>
                <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">Stay Updated</span>
            </div>
            <div className="text-lg sm:text-5xl leading-15 font-bold mt-4 sm:mt-8 text-text-color">
                Latest Readings from Edosa
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10 mt-6">
                {drivenItems.map((item, index) => {
                    if (index >= 6) return;
                    return (
                        <UpdatedCard
                            key={index}
                            header={item.header}
                            content={item.content}
                            cardColor={item.cardColor}
                            typeName={item.typeName}
                            typeColor={item.typeColor}
                            imgUrl={item.imgUrl}
                            wholeData={item.wholeData}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default ReadingCards;
