import Image from "next/image";
import logo from "@/src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="FITLOG Logo" width={28} height={28} />

          <span className="text-lg font-black tracking-tight">FITLOG</span>
        </div>

        <p className="text-xs text-gray-400 sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
