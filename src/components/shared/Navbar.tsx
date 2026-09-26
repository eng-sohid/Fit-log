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
  const isPlanActive = pathname === "/my-plan/plan";
  const isSavedActive = pathname === "/my-plan/saved";
  const isMyPlanSection = isPlanActive || isSavedActive;

  const linkClass = (active: boolean) =>
    `rounded-full px-4 py-1 text-xs font-bold transition-all duration-200 ${
      active ? "bg-[#ccff00] text-black" : "text-zinc-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#08080a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
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
          <Link href="/my-plan/plan" className={linkClass(isMyPlanSection)}>
            My Plan
          </Link>
        </div>

        {/* Desktop: Plan / Saved */}
        <div className="hidden items-center gap-4 text-xs font-medium text-zinc-400 md:flex">
          <Link
            href="/my-plan/plan"
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
            href="/my-plan/saved"
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

        {/* Mobile: Plan/Saved badges + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/my-plan/plan"
            className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold transition ${
              isPlanActive
                ? "border-[#ccff00]/40 bg-[#ccff00]/10 text-[#ccff00]"
                : "border-white/10 bg-zinc-900 text-zinc-300"
            }`}
          >
            Plan
            <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-black text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan/saved"
            className={`flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold transition ${
              isSavedActive
                ? "border-white/30 bg-white/10 text-white"
                : "border-white/10 bg-zinc-900 text-zinc-300"
            }`}
          >
            Saved
            <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full border border-white/10 bg-zinc-800 px-1 text-[9px] font-bold text-white">
              {saved.length}
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-full border border-white/10 bg-zinc-900 p-1.5 text-white transition hover:border-white/20"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-40 border-t border-white/5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1.5 bg-[#08080a] px-4 py-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`rounded-lg px-3 py-2 text-sm font-bold transition ${
              isWorkoutActive
                ? "bg-[#ccff00] text-black"
                : "text-zinc-300 hover:bg-white/5"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan/plan"
            onClick={() => setOpen(false)}
            className={`rounded-lg px-3 py-2 text-sm font-bold transition ${
              isMyPlanSection
                ? "bg-[#ccff00] text-black"
                : "text-zinc-300 hover:bg-white/5"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
