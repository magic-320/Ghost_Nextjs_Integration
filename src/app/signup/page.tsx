import type { NextPage } from "next";
import Header from '../header';
import Footer from '../footer';
import RegisterForm from "./registerform";

const SignUp: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <RegisterForm />
                <Footer />
            </div>
        </div>
    );
};

export default SignUp;