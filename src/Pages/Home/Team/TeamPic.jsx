// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


// import required modules
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamPic = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => {
                setSlides(data);
            })
    }, []);
    return (
        <div>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <div className="card w-96">
                                <figure><img src={slide.img} alt={slide.title} /></figure>
                                <div className="card-body text-center">
                                    <h2 className="text-[#444] text-2xl font-bold">{slide.title}</h2>
                                    <p className='text-[#737373] text-lg font-bold'>{slide.paragraph}</p>
                                    <div className="card-actions justify-center text-2xl">
                                        <FaFacebook></FaFacebook>
                                        <FaInstagram></FaInstagram>
                                        <FaLinkedin></FaLinkedin>
                                        <FaTwitter></FaTwitter>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default TeamPic;