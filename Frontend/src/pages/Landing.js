import Banner from '../components/Banner';
import FeaturedJobs from '../components/FeaturedJobs';
import HiringNow from '../components/HiringNow';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';

function Landing() {
    return (
        <div>
            <NavBar />
            <Banner />
            <FeaturedJobs />
            <HiringNow />
            <Footer />
        </div>
    )
}

export default Landing;