import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    name: string;
    slug: string;
    image: { sourceUrl: string };
    price: string;
    regularPrice?: string;
    brand?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const isSale = product.regularPrice && product.regularPrice !== product.price;

  return (
    <Link href={`/product/${product.slug}`} className="group flex flex-col gap-3">
      <div className="relative aspect-[3/4] overflow-hidden bg-background-secondary">
        <Image
          src={product.image.sourceUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isSale && (
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-2 py-1 font-bebas tracking-widest">
            SALE
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        {product.brand && (
          <span className="text-[10px] uppercase tracking-widest text-tertiary font-bebas">
            {product.brand}
          </span>
        )}
        <h3 className="text-sm font-medium line-clamp-1">{product.name}</h3>
        <div className="flex gap-2 items-center">
          <span className="text-sm font-bold">{product.price}</span>
          {isSale && (
            <span className="text-xs text-tertiary line-through">{product.regularPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
