import Image from 'next/image';
import { fetchAPI } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

async function getProduct(slug: string) {
  const data = await fetchAPI(
    `
    query ProductBySlug($slug: ID!) {
      productBy(slug: $slug) {
        id
        name
        slug
        description
        price
        regularPrice
        image {
          sourceUrl
        }
        brand
        categories
      }
    }
    `,
    { variables: { slug } }
  );
  return data?.productBy;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="relative aspect-[3/4] bg-background-secondary overflow-hidden">
          <Image
            src={product.image.sourceUrl}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-widest text-tertiary font-bebas">
              {product.brand}
            </span>
            <h1 className="text-4xl font-bebas tracking-widest">{product.name}</h1>
            <div className="flex gap-4 items-center mt-2">
              <span className="text-2xl font-bold">{product.price}</span>
              {product.regularPrice !== product.price && (
                <span className="text-lg text-tertiary line-through">{product.regularPrice}</span>
              )}
            </div>
          </div>

          <div className="border-t border-b border-tertiary py-6">
            <p className="text-secondary font-dm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-bebas">Size</label>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button key={size} className="border border-secondary w-12 h-12 flex items-center justify-center text-sm hover:border-black transition-colors">
                    {size}
                  </button>
                ))}
              </div>
              <button className="text-[10px] uppercase tracking-widest border-b border-tertiary self-start mt-1">
                Naija Size Guide
              </button>
            </div>

            <button className="btn btn-primary w-full py-4 text-base">Add to Bag</button>
            <button className="btn btn-outline w-full py-4 text-base">Add to Wishlist</button>
          </div>

          {/* Policy Info */}
          <div className="grid grid-cols-1 gap-4 mt-8">
            <div className="flex gap-4 items-start border p-4 bg-background-secondary">
              <span className="text-xl">🚚</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">Delivery Promise</p>
                <p className="text-xs text-secondary mt-1">We deliver nationwide — Lagos, Abuja, Port Harcourt, and more. Tracked. Trusted.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border p-4">
              <span className="text-xl">🔄</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">Returns Policy</p>
                <p className="text-xs text-secondary mt-1">Not your size? No wahala. Return it within 30 days — simple, no drama.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
