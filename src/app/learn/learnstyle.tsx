'use client';
import React, { FC, useState } from "react";
import axios from "axios";
import LearnCard from "../components/cards/LearnCard";

type TiersResponse = {
  tiers: any
}


const LearnStyle: FC = () => {

  const [learnItems, setLearnItems] = useState<any>([]);

  React.useEffect(() => {
      const getTiers = async() => {
          try {
              const res = await axios.post<TiersResponse>('/api/content/tiers', {
                  payload: '&limit=all&include=monthly_price,benefits'
              });
              let demoLearnItems: { title: string; header: any; text: any; items: any; buttonName: string; backColor: string; border: string; }[] = [];
              res.data.tiers
                .filter((item: { visibility: string; }) => item.visibility == 'public')
                .map((el: any, index: number) => {
                    const data = {
                      title: el.monthly_price ? '$'+el.monthly_price : "Free",
                      header: el.name,
                      text: el.description,
                      items: el.benefits,
                      buttonName: el.trial_days == 0 ? "Get Started" : `Start with ${el.trial_days}-day free trial`,
                      backColor: index%2 == 0 ? "white" : "#F3F8FE",
                      border: index%2 == 0 ? "border-2 border-gray-300" : "border-solid",

                    }
                    demoLearnItems.push(data)
                });
              setLearnItems(demoLearnItems);
          } catch (err) {
              console.log(err);
          }
      }

      getTiers();
  }, [])

  return (
    <div className="mt-4 sm:mt-14 sm:px-10 flex justify-center items-center flex-col">
      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-3 sm:px-5 py-1">
        Learn
      </div>
      <div className="text-lg sm:text-4xl leading-11 font-bold mt-4 sm:mt-8 text-text-color">
        Learn with Edosa Odaro
      </div>
      <div className="text-lg sm:text-xl leading-8 mt-4 sm:mt-8 text-text-color">
        Edosa Odaro’s learning resources are designed to support professionals at every <br />
        stage of their journey, from beginners to advanced leaders. Explore our range of <br />
        educational offerings to gain valuable skills and insights in data science and AI:
      </div>
      <div className="text-sm leading-8 font-bold rounded-full bg-[#667EFF] text-white px-3 sm:px-5 py- mt-8">
        Most Popular
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10 mt-6">
        {
          learnItems.map((item: { title: string; header: string; text: string; items: string[]; buttonName: string; backColor: string; border: string; }, index: React.Key | null | undefined) => (
            <LearnCard
              key={index}
              title={item.title}
              header={item.header}
              text={item.text}
              items={item.items}
              buttonName={item.buttonName}
              backColor={item.backColor}
              border={item.border}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LearnStyle;
