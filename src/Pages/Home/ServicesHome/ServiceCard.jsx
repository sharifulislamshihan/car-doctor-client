/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({service}) => {
    const { title, img, price } = service;
    return (
        <div className="card shadow-xl">
            <figure><img className=" h-48 md:h-60 rounded-lg" src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#444] text-2xl font-bold">{title}</h2>
                <p className="card-title text-[#FF3811] text-xl font-semibold">Price: ${price}</p>
                <div className="card-actions justify-end text-[#FF3811] text-xl">
                 <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;