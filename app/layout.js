import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/NavBar.jsx";
import Footer from "./Footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashok Jangid | Full Stack PHP Developer",
  description: "Full Stack PHP Developer with 5+ years experience in Laravel, CodeIgniter, scalable APIs and performance optimization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
