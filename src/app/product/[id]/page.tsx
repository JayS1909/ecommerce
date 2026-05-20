import Link from "next/link";
import products from "@/data/products.json";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">We couldn&apos;t find the product you&apos;re looking for.</p>
        <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-w-3 aspect-h-4 shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-900 dark:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/category/${product.category}`} className="hover:text-gray-900 dark:text-white">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">{product.name}</span>
          </nav>

          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">${product.price.toFixed(2)}</p>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Description</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Size</h3>
            <div className="flex space-x-3">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button key={size} className="w-12 h-12 rounded border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black dark:bg-white dark:text-black hover:text-white transition">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <Link href="/cart" className="flex-1 bg-black dark:bg-white dark:text-black text-white text-center px-6 py-4 rounded-md font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition">
              Add to Cart
            </Link>
          </div>

          {/* Delivery Info */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li className="flex items-center"><span className="mr-2">🚚</span> Free standard shipping on orders over $50</li>
              <li className="flex items-center"><span className="mr-2">🔄</span> 30-day return policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
