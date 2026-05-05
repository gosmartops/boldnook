import { getProducts } from '@/lib/wordpress';
import ProductCard from '@/components/ProductCard';

interface CategoryPageProps {
  params: { category: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const products = await getProducts();
  
  // Filter products by category (mock logic)
  const filteredProducts = products.filter((p: any) => 
    p.categories.some((cat: string) => cat.toLowerCase() === category.toLowerCase())
  );

  const categoryTitles: { [key: string]: { title: string, description: string } } = {
    women: {
      title: "Women's Fashion",
      description: "Shop women's clothing on Boldnook — tops, dresses, co-ords, asoebi and more. New styles drop daily."
    },
    men: {
      title: "Men's Fashion",
      description: "Shop men's fashion on Boldnook — tees, shirts, chinos, traditional wear and streetwear."
    },
    asoebi: {
      title: "Asoebi & Occasion",
      description: "Wedding? Owambe? Graduation? Shop Boldnook's occasion edit — everything you need to show up and show out."
    }
  };

  const meta = categoryTitles[category.toLowerCase()] || { title: category, description: "" };

  return (
    <div className="container py-12">
      <div className="flex flex-col gap-4 mb-12 border-b border-tertiary pb-8">
        <h1 className="text-4xl font-bebas tracking-widest">{meta.title}</h1>
        <p className="text-secondary max-w-3xl font-dm">{meta.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs uppercase tracking-widest text-tertiary">{filteredProducts.length} Products Found</span>
          <div className="flex gap-4">
            <button className="text-xs uppercase tracking-widest border-b border-black">Sort</button>
            <button className="text-xs uppercase tracking-widest border-b border-black">Filter</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-secondary">No products found in this category. We're stocking up!</p>
        </div>
      )}
    </div>
  );
}
