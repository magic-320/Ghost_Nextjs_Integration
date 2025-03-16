'use client';
import type { NextPage } from "next";
import { Suspense } from 'react';
import Header from '../header';
import Footer from '../footer';
import RegisterForm from "./registerform";

const SignUp: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Suspense>
                    <Header />
                    <RegisterForm />
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
};

export default SignUp;