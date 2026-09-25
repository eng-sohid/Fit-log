import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#08080a] px-4 text-center text-white">
      <h1 className="text-8xl font-black tracking-widest text-[#ccff00] sm:text-9xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl">
        PAGE NOT FOUND
      </h2>

      <p className="mt-2 max-w-md text-xs text-zinc-400 sm:text-sm">
        The workout route or page you are looking for does not exist or has been
        moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-[#ccff00] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-black transition-all hover:bg-white hover:scale-105"
      >
        Go to Workouts
      </Link>
    </main>
  );
}
