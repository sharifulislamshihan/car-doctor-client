// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// import image
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> {img1} </SwiperSlide>
                <SwiperSlide> {img2} </SwiperSlide>
                <SwiperSlide> {img3} </SwiperSlide>
                <SwiperSlide> {img4} </SwiperSlide>
                <SwiperSlide> {img5} </SwiperSlide>
                <SwiperSlide> {img6} </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;