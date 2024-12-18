import type { NextPage } from 'next';
import Header from '../../header';
import Footer from '../../footer';
import BuildOwnPackage from './BuildOwnPackage';
import ViewPackage from './ViewPackage';
import ChoosePackage from './ChoosePackage';
import ReviewComponent from '../../components/reviewcomponent';

const AllPackages: NextPage = () => {
    return (
        <div className='mx-5 pb-5'>
            <div className='max-w-[1440px] mx-auto'>
                <Header />
                <BuildOwnPackage />
                <ViewPackage />
                <ChoosePackage />
                <ReviewComponent />
                <Footer />
            </div>
        </div>
    )
}

export default AllPackages;