interface PlanTabsProps {
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
}

const PlanTabs = ({ activeTab, setActiveTab }: PlanTabsProps) => {
  return (
    <div className="mt-8 flex gap-2 border-b">
      <button
        onClick={() => setActiveTab("plan")}
        className={`px-4 py-3 text-sm font-semibold ${
          activeTab === "plan" ? "border-b-2 border-black" : "text-gray-500"
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        onClick={() => setActiveTab("saved")}
        className={`px-4 py-3 text-sm font-semibold ${
          activeTab === "saved" ? "border-b-2 border-black" : "text-gray-500"
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;
