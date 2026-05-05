import Image from "next/image";
import { getProducts } from "@/lib/wordpress";
import ProductCard from "@/components/ProductCard";
import StyleFeed from "@/components/StyleFeed";

export default async function Home() {
  const products = await getProducts();
  const trendingProducts = products.slice(0, 4);
  const vibes = [
    { name: "Office Looks", icon: "💼" },
    { name: "Party Season", icon: "🎉" },
    { name: "Casual Naija", icon: "🇳🇬" },
    { name: "Asoebi", icon: "✨" },
    { name: "Gym & Active", icon: "💪" },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-black flex items-center justify-center text-white">
        <Image
          src="/hero.png"
          alt="Boldnook Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="container relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl mb-4 tracking-widest font-bebas">Dress how you move.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl font-dm">
            Thousands of styles. Delivered to your door. Pay with what you know.
          </p>
          <div className="flex gap-4">
            <a href="/women" className="btn btn-primary bg-white text-black hover:bg-transparent hover:text-white border-white">Shop Women</a>
            <a href="/men" className="btn btn-primary bg-white text-black hover:bg-transparent hover:text-white border-white">Shop Men</a>
          </div>
        </div>
      </section>

      {/* Vibe Selector */}
      <section className="container">
        <h2 className="text-2xl mb-8 text-center">What are you shopping for?</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {vibes.map((vibe) => (
            <button
              key={vibe.name}
              className="border p-8 text-center flex flex-col items-center justify-center gap-4 hover:border-black transition-colors bg-background-secondary"
            >
              <span className="text-3xl">{vibe.icon}</span>
              <span className="font-bebas text-sm tracking-widest">{vibe.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="container">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bebas tracking-widest">The streets are talking.</h2>
            <p className="text-secondary font-dm">Pieces everyone's grabbing right now.</p>
          </div>
          <a href="/new-in" className="text-xs uppercase tracking-widest border-b border-black">View All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[600px] bg-background-tertiary flex items-end p-8 overflow-hidden group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity z-10" />
          <div className="relative z-20">
            <h2 className="text-4xl mb-4">Nigerian Labels</h2>
            <p className="mb-6 text-secondary font-dm">The best local designers, all in one place.</p>
            <a href="/brands/nigerian" className="btn btn-outline border-black">Shop Now</a>
          </div>
        </div>
        <div className="relative h-[600px] bg-background-tertiary flex items-end p-8 overflow-hidden group">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity z-10" />
          <div className="relative z-20">
            <h2 className="text-4xl mb-4">New Arrivals</h2>
            <p className="mb-6 text-secondary font-dm">Fresh styles, in before everyone else.</p>
            <a href="/new-in" className="btn btn-outline border-black">Explore</a>
          </div>
        </div>
      </section>

      {/* Style Feed */}
      <StyleFeed />

      {/* Trust Strip */}
      <section className="bg-black text-white py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2">Free Returns</p>
            <p className="text-sm font-dm opacity-70">30 days, no wahala</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-2">Pay Securely</p>
            <p className="text-sm font-dm opacity-70">Paystack & Flutterwave</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-2">Nationwide</p>
            <p className="text-sm font-dm opacity-70">Delivered to your door</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-2">1,000+ Brands</p>
            <p className="text-sm font-dm opacity-70">Local & International</p>
          </div>
        </div>
      </section>
    </div>
  );
}
