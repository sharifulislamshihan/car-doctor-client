import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ServicesHome from "../ServicesHome/ServicesHome";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServicesHome></ServicesHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;