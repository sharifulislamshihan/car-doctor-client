// import image
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">

            {/* img 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-left text-white pl-2 w-2/3 md:pl-10'>
                        <h3 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-7'>Affordable Price For Car Servicing</h3>
                        <p className='text-sm md:text-lg font-normal mb-2 md:mb-9'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex flex-col md:flex-row pr-28 md:pr-0'>
                            <button className="btn btn-active bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] mr-5 btn-sm md:btn-md">Discover More</button>
                            <button className="btn btn-outline btn-glass border-white text-white btn-sm md:btn-md hover:btn-glass">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❮</a>
                    <a href="#slide2" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❯</a>
                </div>

            </div>

            {/* img 2 */}

            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-left text-white pl-2 w-2/3 md:pl-10'>
                        <h3 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-7'>Affordable Price For Car Servicing</h3>
                        <p className='text-sm md:text-lg font-normal mb-2 md:mb-9'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=' flex flex-col md:flex-row pr-28 md:pr-0'>
                            <button className="btn btn-active bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] mr-5 btn-sm md:btn-md">Discover More</button>
                            <button className="btn btn-outline btn-glass border-white text-white btn-sm md:btn-md hover:btn-glass">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❮</a>
                    <a href="#slide3" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❯</a>
                </div>

            </div>

            {/* img 3 */}

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❮</a>
                    <a href="#slide4" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❯</a>
                </div>
            </div>

            {/* img 4 */}

            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❮</a>
                    <a href="#slide5" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❯</a>
                </div>

                {/* img 5 */}

                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" />

                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-left text-white pl-2 w-2/3 md:pl-10'>
                            <h3 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-7'>Affordable Price For Car Servicing</h3>
                            <p className='text-sm md:text-lg font-normal mb-2 md:mb-9'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=' flex flex-col md:flex-row pr-28 md:pr-0'>
                                <button className="btn btn-active bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] mr-5 btn-sm md:btn-md ">Discover More</button>
                                <button className="btn btn-outline btn-glass border-white text-white btn-sm md:btn-md  hover:btn-glass">Latest Project</button>
                            </div>
                        </div>
                    </div>


                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❮</a>
                        <a href="#slide6" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❯</a>
                    </div>
                </div>

                {/* img 6 */}

                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full" />

                    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-left text-white pl-2 w-2/3 md:pl-10'>
                            <h3 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-7'>Affordable Price For Car Servicing</h3>
                            <p className='text-sm md:text-lg font-normal mb-2 md:mb-9'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className=' flex flex-col md:flex-row pr-28 md:pr-0'>
                                <button className="btn btn-active bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] mr-5 btn-sm md:btn-md">Discover More</button>
                                <button className="btn btn-outline btn-glass border-white text-white btn-sm md:btn-md  hover:btn-glass">Latest Project</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❮</a>
                        <a href="#slide1" className="btn btn-circle text-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white ">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;