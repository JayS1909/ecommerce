import Link from "next/link";
import products from "@/data/products.json";
import ProductClient from "./ProductClient";

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
        <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  const { fabric, fit, washCare, hoverImage } = product;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8 flex items-center space-x-2">
        <Link href="/" className="hover:text-black dark:hover:text-white transition">Home</Link>
        <span>/</span>
        <Link href={`/category/${encodeURIComponent(product.category)}`} className="hover:text-black dark:hover:text-white transition">{product.category}</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
             <div className="col-span-2 aspect-[3/4] bg-gray-100 dark:bg-gray-800 relative">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 relative">
               <img src={hoverImage || product.image} alt="Detail 1" className="w-full h-full object-cover" />
             </div>
             <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 relative">
               <img src={product.image} alt="Detail 2" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 flex flex-col pt-4">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-2">{product.name}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
            <div className="flex text-yellow-400 text-sm">
              ★★★★★ <span className="text-gray-500 ml-2">(124 Reviews)</span>
            </div>
          </div>

          <div className="prose prose-sm dark:prose-invert text-gray-600 dark:text-gray-300 mb-8">
            <p>{product.description}</p>
            <ul className="mt-4 space-y-1">
              <li><strong>Fabric:</strong> {fabric || 'Premium Cotton'}</li>
              <li><strong>Fit:</strong> {fit || 'Regular Fit'}</li>
              <li><strong>Wash Care:</strong> {washCare || 'Machine wash cold'}</li>
            </ul>
          </div>

          <ProductClient product={product} />

          <div className="mt-10 border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-bold text-sm uppercase mb-4 flex items-center"><span className="mr-2">🚚</span> Delivery & Returns</h3>
            <div className="flex space-x-2 mb-4">
              <input type="text" placeholder="Enter Pincode" className="flex-1 border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm focus:outline-none" />
              <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold uppercase">Check</button>
            </div>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>Free delivery on orders over $50</li>
              <li>Cash on Delivery available</li>
              <li>Easy 30 days return and exchange</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cross-selling Mock */}
      <div className="mb-20">
        <h2 className="text-2xl font-black uppercase tracking-tight mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(10, 14).map(p => (
            <Link key={p.id} href={`/product/${p.id}`} className="group block">
              <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <h3 className="text-sm font-bold truncate">{p.name}</h3>
              <p className="text-sm text-gray-500">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
