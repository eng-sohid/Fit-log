"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  sortBy: "duration" | "calories" | "rating";
  setSortBy: (sort: "duration" | "calories" | "rating") => void;
}

const PlanTabs = ({ activeTab, sortBy, setSortBy }: PlanTabsProps) => {
  return (
    <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      {/* Tabs */}
      <div className="inline-flex rounded-xl border border-white/5 bg-[#12141a] p-1.5">
        <Link
          href="/my-plan"
          className={`rounded-lg px-5 py-2 text-xs font-black tracking-wider uppercase transition-all ${
            activeTab === "plan"
              ? "bg-[#1f232d] text-white shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Today&apos;s Plan
        </Link>

        <Link
          href="/saved"
          className={`rounded-lg px-5 py-2 text-xs font-black tracking-wider uppercase transition-all ${
            activeTab === "saved"
              ? "bg-[#1f232d] text-white shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Saved
        </Link>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <span className="font-medium">Sort By</span>

        <div className="relative inline-block">
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#12141a] py-2 pr-9 pl-4 text-xs font-bold text-white transition-all hover:border-white/20 focus:ring-1 focus:ring-[#ccff00] focus:outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>

          <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
        </div>
      </div>
    </div>
  );
};

export default PlanTabs;
