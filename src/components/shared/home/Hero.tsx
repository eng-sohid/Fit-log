"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { FitLogContext } from "../../context/FitLogContext";
import heroImage from "@/src/assets/banner.png";

const Hero = () => {
  const { plan, saved } = useContext(FitLogContext);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-2 lg:py-24">
        {/* Content */}
        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            Build a focused workout routine with exercises designed to help you
            train consistently, track your progress, and stay accountable.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#library"
              className="inline-flex items-center gap-2 rounded-xl bg-[#ccff00] px-6 py-3 text-sm font-black text-black transition hover:bg-white"
            >
              BROWSE WORKOUTS
              <span>↓</span>
            </a>

            <Link
              href="/my-plan"
              className="rounded-xl border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-black"
            >
              MY PLAN
            </Link>
          </div>

          {/* Counters */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/my-plan"
              className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black transition hover:bg-white"
            >
              Plan {plan.length}
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white transition hover:border-white"
            >
              Saved {saved.length}
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={heroImage}
            alt="Workout training"
            className="h-[400px] w-full object-cover sm:h-[500px]"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
