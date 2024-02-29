import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const backgroundImage = {
    backgroundImage: `url("/images/blue_background.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div className="h-max py-12 relative" id="home" style={backgroundImage}>
        <div className="absolute bottom-5 right-8">
          <svg
            width="128"
            height="20"
            viewBox="0 0 128 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="4"
              cy="16"
              r="4"
              transform="rotate(-90 4 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="4"
              cy="4"
              r="4"
              transform="rotate(-90 4 4)"
              fill="#D9D9D9"
            />
            <circle
              cx="19"
              cy="16"
              r="4"
              transform="rotate(-90 19 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="19"
              cy="4"
              r="4"
              transform="rotate(-90 19 4)"
              fill="#D9D9D9"
            />
            <circle
              cx="34"
              cy="16"
              r="4"
              transform="rotate(-90 34 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="34"
              cy="4"
              r="4"
              transform="rotate(-90 34 4)"
              fill="#D9D9D9"
            />
            <circle
              cx="49"
              cy="16"
              r="4"
              transform="rotate(-90 49 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="49"
              cy="4"
              r="4"
              transform="rotate(-90 49 4)"
              fill="#D9D9D9"
            />
            <circle
              cx="64"
              cy="16"
              r="4"
              transform="rotate(-90 64 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="64"
              cy="4"
              r="4"
              transform="rotate(-90 64 4)"
              fill="#D9D9D9"
            />
            <circle
              cx="79"
              cy="16"
              r="4"
              transform="rotate(-90 79 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="79"
              cy="4"
              r="4"
              transform="rotate(-90 79 4)"
              fill="#D9D9D9"
            />
            <circle
              cx="94"
              cy="16"
              r="4"
              transform="rotate(-90 94 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="94"
              cy="4"
              r="4"
              transform="rotate(-90 94 4)"
              fill="#D9D9D9"
            />
            <circle
              cx="109"
              cy="16"
              r="4"
              transform="rotate(-90 109 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="109"
              cy="4"
              r="4"
              transform="rotate(-90 109 4)"
              fill="#D9D9D9"
            />
            <circle
              cx="124"
              cy="16"
              r="4"
              transform="rotate(-90 124 16)"
              fill="#D9D9D9"
            />
            <circle
              cx="124"
              cy="4"
              r="4"
              transform="rotate(-90 124 4)"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className="absolute top-5 md:top-28 left-5 md:left-10">
          <svg
            width="20"
            height="128"
            viewBox="0 0 20 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="4" r="4" fill="#D9D9D9" />
            <circle cx="4" cy="19" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="19" r="4" fill="#D9D9D9" />
            <circle cx="4" cy="34" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="34" r="4" fill="#D9D9D9" />
            <circle cx="4" cy="49" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="49" r="4" fill="#D9D9D9" />
            <circle cx="4" cy="64" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="64" r="4" fill="#D9D9D9" />
            <circle cx="4" cy="79" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="79" r="4" fill="#D9D9D9" />
            <circle cx="4" cy="94" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="94" r="4" fill="#D9D9D9" />
            <circle cx="4" cy="109" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="109" r="4" fill="#D9D9D9" />
            <circle cx="4" cy="124" r="4" fill="#D9D9D9" />
            <circle cx="16" cy="124" r="4" fill="#D9D9D9" />
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center pt-0 md:pt-14">
          <Image
            width={300}
            height={300}
            src="/images/my-picture2.jpg"
            alt="my image"
            className="w-48 h-48 object-cover rounded-full border-[#FF8911] border-4"
          />

          <p className="text-white text-center text-[25px] sm:text-[38px] font-bold leading-normal tracking-[-0.76px] mt-4">
            Hi, This is Tanmoy Sharma
          </p>
          <p className="w-[90%] sm:w-[516px]  text-[#FFFFFFD9] text-center font-normal leading-[150%] tracking-[-0.36px] text-[16px] sm:text-[18px]">
            I am a highly passionate and dedicated software engineer based in
            Bangladesh, with a flair for creative design.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-5 z-10">
            <Link href="#projects">
              <Button variant="own" size="own">
                My Work
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outlineOwn"
                size="own"
                className="gap-2.5  mb-10 sm:mb-0 hover:bg-[#FF8911]"
              >
                <Image
                  width={15}
                  alt="hello icon"
                  height={15}
                  src="/images/say-hello.svg"
                />{" "}
                Say hello
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
