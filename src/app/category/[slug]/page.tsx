import Link from "next/link";
import products from "@/data/products.json";

export async function generateStaticParams() {
  const categories = ["Oversized Tees", "Regular Tees", "Hoodies", "Bottoms", "Accessories"];
  return categories.map((slug) => ({
    slug: slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const decodedSlug = decodeURIComponent(slug);
  const categoryProducts = products.filter(p => p.category === decodedSlug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8 flex items-center space-x-2">
        <Link href="/" className="hover:text-black dark:hover:text-white transition">Home</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">{decodedSlug}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold uppercase tracking-tight mb-6">Filters</h2>

            <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="font-bold mb-3 uppercase text-sm">Size</h3>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <div key={size} className="border border-gray-300 dark:border-gray-700 w-10 h-10 flex items-center justify-center text-sm cursor-pointer hover:border-black dark:hover:border-white transition">{size}</div>
                ))}
              </div>
            </div>

            <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="font-bold mb-3 uppercase text-sm">Color</h3>
              <div className="flex flex-wrap gap-2">
                {['#000000', '#ffffff', '#1e3a8a', '#4b5563', '#4d7c0f'].map(color => (
                  <div key={color} className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 cursor-pointer" style={{ backgroundColor: color }}></div>
                ))}
              </div>
            </div>

            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 font-bold uppercase text-sm">Apply Filters</button>
          </div>
        </div>

        {/* Product Grid & Sort */}
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-black uppercase tracking-tight">{decodedSlug} <span className="text-gray-400 text-lg font-medium">({categoryProducts.length})</span></h1>
            <select className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium focus:outline-none">
              <option>Best Selling</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {categoryProducts.length === 0 ? (
             <div className="text-center py-20">
               <p className="text-gray-500">No products found in this category.</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <div key={product.id} className="group relative bg-white dark:bg-gray-800 flex flex-col">
                  <div className="relative aspect-[3/4] bg-gray-200 dark:bg-gray-900 overflow-hidden">
                    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                    <img src={product.hoverImage || product.image} alt="back view" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                    <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:text-red-500 transition z-10" title="Add to Wishlist">
                      ♥
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                      <Link href={`/product/${product.id}`} className="w-full block text-center bg-white text-black font-bold py-2 text-sm uppercase hover:bg-gray-200">
                        Quick View
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4 pb-2">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate mb-1">
                      <Link href={`/product/${product.id}`}>{product.name}</Link>
                    </h3>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
