import AboutUsContent from "../AboutUsContent/AboutUsContent";
import AboutUsPic from "../AboutUsPic/AboutUsPic";

const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-12">
            <div>
                <AboutUsPic></AboutUsPic>
            </div>

            <div>
                <AboutUsContent></AboutUsContent>
            </div>
        </div>
    );
};

export default AboutUs;