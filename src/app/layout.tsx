import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import FitLogProvider from "../components/context/FitLogContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Your personal workout planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <FitLogProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
          <ToastContainer />
        </FitLogProvider>
      </body>
    </html>
  );
}
