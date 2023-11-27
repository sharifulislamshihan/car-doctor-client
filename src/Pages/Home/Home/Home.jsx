import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import ServicesHome from "../ServicesHome/ServicesHome";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServicesHome></ServicesHome>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;