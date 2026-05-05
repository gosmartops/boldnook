import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  variable: "--font-dm",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOLDNOOK | Fashion. Delivered. Nigerian.",
  description: "Nigeria's premier fashion destination. Hundreds of labels, international and homegrown, delivered nationwide.",
  keywords: ["fashion", "Nigeria", "clothing", "online shopping", "Lagos fashion", "Boldnook"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="font-dm">
        <header className="border-b border-secondary py-4 sticky top-0 bg-white z-50">
          <div className="container flex justify-between items-center">
            <div className="text-2xl font-bebas tracking-widest">BOLDNOOK</div>
            <nav className="hidden md:flex gap-8 font-bebas text-sm tracking-widest">
              <a href="/women" className="hover:opacity-70 transition-opacity">Women</a>
              <a href="/men" className="hover:opacity-70 transition-opacity">Men</a>
              <a href="/brands" className="hover:opacity-70 transition-opacity">Brands</a>
              <a href="/sale" className="text-red-600 hover:opacity-70 transition-opacity">Sale</a>
            </nav>
            <div className="flex gap-4">
              <button aria-label="Search">🔍</button>
              <button aria-label="Account">👤</button>
              <button aria-label="Cart">🛒</button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-background-secondary border-t border-secondary py-12 mt-24">
          <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="mb-6">Help & Info</h3>
              <ul className="text-sm space-y-3 text-secondary">
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Track My Order</a></li>
                <li><a href="#">Delivery Info</a></li>
                <li><a href="#">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6">About Boldnook</h3>
              <ul className="text-sm space-y-3 text-secondary">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6">More From Us</h3>
              <ul className="text-sm space-y-3 text-secondary">
                <li><a href="#">Download the App</a></li>
                <li><a href="#">Style Feed</a></li>
                <li><a href="#">Boldnook Rewards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6">Newsletter</h3>
              <p className="text-sm text-secondary mb-4">Get the latest drops and exclusive offers.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="border p-2 w-full text-sm" />
                <button className="btn btn-primary px-4">Join</button>
              </div>
            </div>
          </div>
          <div className="container mt-12 pt-8 border-t border-tertiary text-center text-xs text-tertiary tracking-widest uppercase">
            Boldnook — Dress how you move. © 2026 Boldnook Ltd. Made in Nigeria.
          </div>
        </footer>
      </body>
    </html>
  );
}
