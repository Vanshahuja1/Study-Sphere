import Image from 'next/image'
import { LayoutDashboard } from 'lucide-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick'
const NextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 -translate-y-1/2 right-2 z-10 cursor-pointer text-gray-800 hover:text-gray-600"
        onClick={onClick}
    >
        <ChevronRight size={32} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 -translate-y-1/2 left-2 z-10 cursor-pointer text-gray-800 hover:text-gray-600"
        onClick={onClick}
    >
        <ChevronLeft size={32} />
    </div>
);
export default function ImageGallery({ images, title, subtitle, font, textColor }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };
    return (
        <>
            <section className={`w-full ${font}  bg-white py-5`}>
                <div className="container max-w-5xl mx-auto px-5">
                    <h1 className={`text-3xl my-4 ${textColor} text-blue-500 flex  gap-3 items-center justify-center`}>{title} <LayoutDashboard className='h-8'></LayoutDashboard> </h1>
                    <h3 className='text-center my-3 text-xl'>A walk in Our Hood,Check out our Gallery </h3>
                    {/* <h3 className='text-xl my-4 text-center'>{subtitle}</h3> */}

                    <div className="mt-6 relative">
                        <Slider {...settings}>
                            {images.map((img, i) => (
                                <div key={i} className="px-2">
                                    <Image
                                        src={img}
                                        alt={`image-${i}`}
                                        width={400}
                                        height={400}
                                        className="rounded-2xl object-cover w-full h-70"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>
            </section>
        </>)
}