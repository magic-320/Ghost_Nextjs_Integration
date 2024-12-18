'use client';
import type { NextPage } from "next";
import { Suspense } from 'react';
import Header from '../header';
import LearnMainComponent from './learnmaincomponent';
import Footer from '../footer';
import LearnStyle from "./learnstyle";
import BuildPackage from "./buildpackage";
import ReviewComponent from "../components/reviewcomponent";
import Courses from "./courses";

const Learn: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Suspense>
                    <Header />
                    <LearnMainComponent />
                    <LearnStyle />
                    <BuildPackage />
                    <Courses />
                    <ReviewComponent />
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
};

export default Learn;