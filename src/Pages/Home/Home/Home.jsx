import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs/AboutUs";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;