"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import logo from "@/src/assets/logo.png";
import { FitLogContext } from "../context/FitLogContext";

const Navbar = () => {
  const { plan, saved } = useContext(FitLogContext);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FITLOG Logo" width={40} height={40} />

          <span className="text-2xl font-bold">FITLOG</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Workout
          </Link>

          <Link href="/my-plan" className="text-sm font-medium hover:underline">
            My Plan
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-1 text-sm font-semibold"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-black px-3 py-1 text-sm font-semibold"
          >
            Saved {saved.length}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
