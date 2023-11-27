import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import OurProduct from "../OurProduct/OurProduct";
import ServicesHome from "../ServicesHome/ServicesHome";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServicesHome></ServicesHome>
            <ContactInfo></ContactInfo>
            <OurProduct></OurProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;