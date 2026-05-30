import Link from "next/link";
import products from "@/data/products.json";
import ProductClient from "./ProductClient";
import PincodeChecker from "@/components/ui/PincodeChecker";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) return { title: "Not Found | EXTRAALAYER" };
  return { title: `${product.name} | EXTRAALAYER`, description: product.description };
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
               <ImageWithFallback src={product.image} alt={product.name} />
             </div>
             <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 relative">
               <ImageWithFallback src={hoverImage || product.image} alt="Detail 1" />
             </div>
             <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 relative">
               <ImageWithFallback src={product.image} alt="Detail 2" />
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

          <PincodeChecker />
        </div>
      </div>

      {/* Cross-selling Mock */}
      <div className="mb-20">
        <h2 className="text-2xl font-black uppercase tracking-tight mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(10, 14).map(p => (
            <Link key={p.id} href={`/product/${p.id}`} className="group block">
              <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden mb-3">
                <ImageWithFallback src={p.image} alt={p.name} className="group-hover:scale-105 transition duration-500" />
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
