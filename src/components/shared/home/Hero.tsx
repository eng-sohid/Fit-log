"use client";

import Image from "next/image";
import heroImage from "@/src/assets/banner.png";

const Hero = () => {
  return (
    <section className="bg-[#08080a] py-6 sm:py-8">
      {/* Outer Container matching website max-width */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Dark Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#12141a] px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Left Text Content */}
            <div className="relative z-10 lg:col-span-7">
              {/* Category Label */}
              <p className="text-xs font-bold tracking-[0.2em] text-[#ccff00]">
                WORKOUT LIBRARY
              </p>

              {/* Main Heading */}
              <h1 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                TRAIN WITH INTENT. LOG EVERY SET.
              </h1>

              {/* Subtitle Description */}
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              {/* Single CTA Button */}
              <div className="mt-8">
                <a
                  href="#library"
                  className="inline-block rounded-xl bg-[#ccff00] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-black transition-all duration-300 hover:bg-white hover:scale-105"
                >
                  BROWSE WORKOUTS
                </a>
              </div>
            </div>

            {/* Right Transparent Model Image */}
            <div className="relative z-10 flex justify-center lg:col-span-5 lg:justify-end">
              <div className="relative h-64 w-full max-w-md sm:h-80 lg:h-[380px]">
                <Image
                  src={heroImage}
                  alt="FitLog Workout Model"
                  priority
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
