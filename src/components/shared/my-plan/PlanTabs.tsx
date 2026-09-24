"use client";

import { ChevronDown } from "lucide-react";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
}

const PlanTabs = ({ activeTab, setActiveTab }: PlanTabsProps) => {
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

      {/* Sort Filter Button */}
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <span className="font-medium text-zinc-500">Sort by:</span>
        <button className="flex items-center gap-1.5 rounded-lg border border-white/5 bg-[#12141a] px-3 py-2 text-xs font-bold text-white hover:border-white/20 transition-all">
          <span>Duration</span>
          <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
        </button>
      </div>
    </div>
  );
};

export default PlanTabs;
