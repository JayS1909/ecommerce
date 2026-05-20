import Link from "next/link";
import products from "@/data/products.json";

export async function generateStaticParams() {
  const categories = ["Men", "Women", "Kids", "Accessories"];
  return categories.map((slug) => ({
    slug: slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const decodedSlug = decodeURIComponent(slug);
  const categoryProducts = products.filter(p => p.category === decodedSlug);

  if (categoryProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Category not found</h1>
        <p className="text-gray-600 mb-8">We couldn&apos;t find any products in this category.</p>
        <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 capitalize">{decodedSlug}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoryProducts.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <Link href={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{product.category}</p>
                <p className="text-gray-900 dark:text-white font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
