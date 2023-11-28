import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesHome = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])
    return (
        <div className=" text-center my-16">
            <div className="space-y-5">
                <h3 className="text-[#FF3811] text-xl font-bold">Service</h3>
                <h2 className="text-[#151515] text-5xl font-bold">Our Service Area</h2>
                <h3 className="text-[#737373] text-base font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-5 md:mx-16 my-16">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default ServicesHome;