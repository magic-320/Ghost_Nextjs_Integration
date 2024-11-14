import type { NextPage } from 'next';
import Header from '../../header';
import Footer from '../../footer';
import YourPackage from './YourPackage';
import ReviewComponent from '../../components/reviewcomponent';

const OwnPackage: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className='max-w-[1440px] mx-auto'>
                <Header />
                <YourPackage />
                <ReviewComponent />
                <Footer />
            </div>
        </div>
    )
}

export default OwnPackage;