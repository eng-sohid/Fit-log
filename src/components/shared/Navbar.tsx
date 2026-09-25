"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { FitLogContext } from "../context/FitLogContext";
import logo from "@/src/assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { plan = [], saved = [] } = useContext(FitLogContext);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";
  const isSavedActive = pathname === "/saved";

  const linkClass = (active: boolean) =>
    `rounded-full px-4 py-1 text-xs font-bold transition-all duration-200 ${
      active ? "bg-[#ccff00] text-black" : "text-zinc-400 hover:text-white"
    }`;

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

        {/* Desktop: pill nav */}
        <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-zinc-900/80 p-1 md:flex">
          <Link href="/" className={linkClass(isWorkoutActive)}>
            Workouts
          </Link>
          <Link href="/my-plan" className={linkClass(isPlanActive)}>
            My Plan
          </Link>
        </div>

        {/* Desktop: Plan / Saved */}
        <div className="hidden items-center gap-4 text-xs font-medium text-zinc-400 md:flex">
          <Link
            href="/my-plan"
            className={`flex items-center gap-1.5 transition ${
              isPlanActive ? "text-white" : "hover:text-white"
            }`}
          >
            <span>Plan</span>
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[11px] font-black text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/saved"
            className={`flex items-center gap-1.5 transition ${
              isSavedActive ? "text-white" : "hover:text-white"
            }`}
          >
            <span>Saved</span>
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full border border-white/10 bg-zinc-800 px-1.5 text-[11px] font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>

        {/* Mobile: compact icons + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link href="/my-plan" className="relative text-zinc-300">
            <span className="text-[11px]">Plan</span>
            <span className="absolute -right-3 -top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-black text-black">
              {plan.length}
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-full border border-white/10 bg-zinc-900 p-1.5 text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-white/5 bg-[#08080a] px-4 py-3 md:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`rounded-lg px-3 py-2 text-sm font-bold ${
              isWorkoutActive ? "bg-[#ccff00] text-black" : "text-zinc-300"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            onClick={() => setOpen(false)}
            className={`rounded-lg px-3 py-2 text-sm font-bold ${
              isPlanActive ? "bg-[#ccff00] text-black" : "text-zinc-300"
            }`}
          >
            My Plan
          </Link>
          <Link
            href="/saved"
            onClick={() => setOpen(false)}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-bold ${
              isSavedActive ? "text-white" : "text-zinc-300"
            }`}
          >
            <span>Saved</span>
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full border border-white/10 bg-zinc-800 px-1.5 text-[11px] font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
