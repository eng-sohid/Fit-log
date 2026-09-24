"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { FitLogContext } from "../context/FitLogContext";
import logo from "@/src/assets/logo.png";

const Navbar = () => {
  const { plan = [], saved = [] } = useContext(FitLogContext);
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#08080a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
          <span className="text-base font-black tracking-wider text-white uppercase">
            FITLOG
          </span>
        </Link>

        {/* Navigation Links - Center Pill Tabs */}
        <div className="flex items-center gap-1 rounded-full bg-zinc-900/80 p-1 border border-white/5">
          <Link
            href="/"
            className={`rounded-full px-4 py-1 text-xs font-bold transition-all duration-200 ${
              isWorkoutActive
                ? "bg-[#ccff00] text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1 text-xs font-bold transition-all duration-200 ${
              isPlanActive
                ? "bg-[#ccff00] text-black"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Counter Stats */}
        <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <span>Plan</span>
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[11px] font-black text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <span>Saved</span>
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-zinc-800 border border-white/10 px-1.5 text-[11px] font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
