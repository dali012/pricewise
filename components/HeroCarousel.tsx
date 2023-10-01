"use client";

import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { heroImages } from "@/lib/constant";

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((img) => (
          <Image
            key={img.alt}
            src={img.imgUrl}
            alt={img.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>
      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="Arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0"
      />
    </div>
  );
};

export default HeroCarousel;
