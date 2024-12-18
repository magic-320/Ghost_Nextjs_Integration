'use client';
import React, { FC, useState } from "react";
import axios from "axios";
import UpdatedCard from "../components/cards/UpdatedCard";


type PostsResponse = {
    posts: any;
};

interface drivenItemsStyle {
    wholeData: any;
    linkUrl: string | undefined;
    typeName: string,
    typeColor: string,
    header: string,
    content: string,
    cardColor: string,
    imgUrl: string,
}

const StayUpdated: FC = () => {

    const [drivenItems, setDrivenItems] = useState<drivenItemsStyle[]>([]);

    React.useEffect(() => {
        const getPosts = async() => {
            try {
                const course = await axios.post<PostsResponse>('/api/content/posts', {
                    payload: "&limit=all&filter=featured:true"
                });

                console.log(course.data)

                const learnObj = {
                    typeName: "",
                    typeColor: "#5D5FEF",
                    header: course.data.posts[0]?.title,
                    content: course.data.posts[0]?.excerpt,
                    cardColor: "#F3F8FE",
                    imgUrl: course.data.posts[0]?.feature_image,
                    linkUrl: '',
                    wholeData: course.data.posts[0]
                }

                const readObj = {
                    typeName: "",
                    typeColor: "#FF4405",
                    header: course.data.posts[1]?.title,
                    content: course.data.posts[1]?.excerpt,
                    cardColor: "#FFF7F4",
                    imgUrl: course.data.posts[1]?.feature_image,
                    linkUrl: '',
                    wholeData: course.data.posts[1]
                }

                const watchObj = {
                    typeName: "",
                    typeColor: "#9E77ED",
                    header: course.data.posts[2]?.title,
                    content: course.data.posts[2]?.excerpt,
                    cardColor: "#F7F6FF",
                    imgUrl: course.data.posts[2]?.feature_image,
                    linkUrl: '',
                    wholeData: course.data.posts[2]
                }

                let arr = [];
                arr.push(learnObj, readObj, watchObj);
                setDrivenItems(arr);

            } catch (err) {
              console.log(err);
            }
        }
  
        getPosts();
    }, [])

    return (
        <div className="mt-4 sm:mt-14 px-4 sm:px-10">
            <div>
                <span className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F5F5F5] px-3 sm:px-5 py-1">Stay Updated</span>
            </div>
            <div className="text-lg sm:text-5xl leading-15 font-bold mt-4 sm:mt-8 text-text-color">
                Editor’s Pick
            </div>
            <div className="text-base sm:text-2xl leading-6 sm:leading-8 mt-2 sm:mt-8 text-text-color">
                Discover the top articles, books, and videos personally selected by Edosa to enhance your understanding of data and AI.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10 mt-6">
                {
                    drivenItems.map((item, index) => (
                        <UpdatedCard
                            key={index}
                            header={item.header}
                            content={item.content}
                            cardColor={item.cardColor}
                            typeName={item.typeName}
                            typeColor={item.typeColor}
                            imgUrl={item.imgUrl}
                            linkUrl={item.linkUrl}
                            wholeData={item.wholeData}
                        />
                    ))
                }
            </div>

        </div>
    );

}

export default StayUpdated;