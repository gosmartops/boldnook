import { NextResponse } from 'next/server';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '@/lib/mock-data';

export async function POST(request: Request) {
  const { query, variables } = await request.json();

  // Simple Mock GraphQL Resolver
  if (query.includes('AllProducts') || query.includes('products')) {
    return NextResponse.json({
      data: {
        products: {
          nodes: MOCK_PRODUCTS
        }
      }
    });
  }

  if (query.includes('AllCategories') || query.includes('productCategories')) {
    return NextResponse.json({
      data: {
        productCategories: {
          nodes: MOCK_CATEGORIES
        }
      }
    });
  }

  if (query.includes('ProductBySlug')) {
    const slug = variables?.slug;
    const product = MOCK_PRODUCTS.find(p => p.slug === slug);
    return NextResponse.json({
      data: {
        productBy: product
      }
    });
  }

  return NextResponse.json({ data: {} });
}
