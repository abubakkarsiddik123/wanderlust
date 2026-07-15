"use client";

import { useRef, useState } from "react";
import DestinationCard from "@/components/DestinationCard";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const HomePage = ({ destinations }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section dir="ltr" className="w-full px-4 lg:pl-[100px] py-20">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <h1 className="text-5xl font-semibold text-gray-900">
            Featured Destinations
          </h1>

          <p className="mt-3 text-gray-500 text-sm">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        <Link
          href="/destinations"
          className="
    flex items-center gap-3
    border border-sky-400
    px-6 py-3
    text-xs font-medium
    tracking-wider
    text-sky-500
    hover:bg-sky-500
    hover:text-white
    transition
  "
        >
          ALL DESTINATIONS
          <FiArrowRight />
        </Link>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {destinations?.map((destination) => (
          <SwiperSlide key={destination._id}>
            <DestinationCard destination={destination} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between mt-12">
        {/* Counter + Line */}
        <div className="flex items-center gap-6 flex-1">
          <span className="text-lg text-gray-900">
            {currentSlide}/{destinations?.length}
          </span>

          <div className="h-[1px] bg-gray-200 flex-1"></div>
        </div>

        {/* Arrows */}
        <div className="flex gap-3 ml-8">
          <button
            ref={prevRef}
            className="
            w-10 h-10
            rounded-full
            border border-gray-200
            flex items-center justify-center
            text-gray-400
            hover:bg-sky-500
            hover:text-white
            transition
            "
          >
            <FiArrowLeft />
          </button>

          <button
            ref={nextRef}
            className="
            w-10 h-10
            rounded-full
            border border-gray-200
            flex items-center justify-center
            text-gray-400
            hover:bg-sky-500
            hover:text-white
            transition
            "
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
