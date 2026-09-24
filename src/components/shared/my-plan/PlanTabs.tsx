"use client";

import { ChevronDown } from "lucide-react";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
  sortBy: "duration" | "calories" | "rating";
  setSortBy: (sort: "duration" | "calories" | "rating") => void;
}

const PlanTabs = ({
  activeTab,
  setActiveTab,
  sortBy,
  setSortBy,
}: PlanTabsProps) => {
  return (
    <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      {/* Dark Pill Tab Group */}
      <div className="inline-flex rounded-xl bg-[#12141a] p-1.5 border border-white/5">
        <button
          onClick={() => setActiveTab("plan")}
          className={`rounded-lg px-5 py-2 text-xs font-black uppercase tracking-wider transition-all ${
            activeTab === "plan"
              ? "bg-[#1f232d] text-white shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-lg px-5 py-2 text-xs font-black uppercase tracking-wider transition-all ${
            activeTab === "saved"
              ? "bg-[#1f232d] text-white shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Sort Filter Dropdown */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <span className="font-medium text-zinc-400">Sort By</span>
        <div className="relative inline-block">
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="appearance-none rounded-xl border border-white/10 bg-[#12141a] py-2 pl-4 pr-9 text-xs font-bold text-white transition-all hover:border-white/20 focus:outline-none focus:ring-1 focus:ring-[#ccff00] cursor-pointer"
          >
            <option value="duration" className="bg-[#12141a] text-white">
              Duration
            </option>
            <option value="calories" className="bg-[#12141a] text-white">
              Calories
            </option>
            <option value="rating" className="bg-[#12141a] text-white">
              Rating
            </option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
        </div>
      </div>
    </div>
  );
};

export default PlanTabs;
