import Image from 'next/image';

const POSTS = [
  {
    title: "How to Rock Your Asoebi This Season",
    excerpt: "Owambe season is here. Here's how to stand out without breaking the bank.",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=800",
    slug: "asoebi-style-guide"
  },
  {
    title: "Top 10 Nigerian Brands You Need to Watch",
    excerpt: "From Lagos streetwear to Abuja luxury, these are the labels moving the needle.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    slug: "top-nigerian-brands"
  },
  {
    title: "Streetwear in Lagos: A Cultural Shift",
    excerpt: "Why the youth of Lagos are redefining fashion one hoodie at a time.",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
    slug: "lagos-streetwear"
  }
];

export default function StyleFeed() {
  return (
    <section className="container py-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bebas tracking-widest">Style Feed</h2>
          <p className="text-secondary font-dm">Outfit ideas, brand guides, and what's trending.</p>
        </div>
        <a href="/style-feed" className="text-xs uppercase tracking-widest border-b border-black">Read More</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <div key={post.slug} className="flex flex-col gap-4 group">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bebas tracking-wider group-hover:underline cursor-pointer">{post.title}</h3>
            <p className="text-sm text-secondary font-dm line-clamp-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
