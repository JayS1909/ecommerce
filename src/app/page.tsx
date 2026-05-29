import Link from "next/link";
import products from "@/data/products.json";
import ProductClient from "./product/[id]/ProductClient";

export default function Home() {
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="flex flex-col items-center w-full">

      {/* Hero Banner */}
      <section className="w-full relative h-[70vh] bg-black flex items-center justify-center transition-colors">
        <div className="absolute inset-0">
           <img
              src="https://via.placeholder.com/1920x1080/1a1a1a/ffffff?text=URBAN+STREETWEAR+COLLECTION"
              alt="Hero Banner"
              className="w-full h-full object-cover opacity-60"
            />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">Define Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Own Rules</span></h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium">Premium oversized tees and hoodies designed for the streets. Comfort meets unapologetic style.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/category/Oversized%20Tees" className="bg-white text-black px-8 py-4 rounded-none font-bold hover:bg-gray-200 transition uppercase tracking-wider text-sm">
              Shop Oversized
            </Link>
            <Link href="/category/Hoodies" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-none font-bold hover:bg-white hover:text-black transition uppercase tracking-wider text-sm">
              Shop Hoodies
            </Link>
          </div>
        </div>
      </section>

      {/* Brand USP Stripe */}
      <div className="w-full bg-blue-600 text-white py-4 border-y border-blue-700">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest text-center">
          <span className="flex items-center">✨ Premium Fabric</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center">👕 Comfort Fit</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center">🔄 Easy Returns</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center">💵 COD Available</span>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-10 text-center uppercase tracking-tight">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Oversized Tees", "Regular Tees", "Hoodies", "Bottoms", "Accessories"].map((cat) => (
            <Link key={cat} href={`/category/${encodeURIComponent(cat)}`} className="group relative block aspect-[4/5] bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <img
                src={`https://via.placeholder.com/400x500/e5e7eb/000000?text=${cat.split(' ')[0]}`}
                alt={cat}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 dark:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white uppercase">{cat}</h3>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors mt-1">Explore &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50 dark:bg-gray-900 w-full py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight">New Arrivals</h2>
            <Link href="/category/Oversized%20Tees" className="text-sm font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider hidden sm:block">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-10 text-center uppercase tracking-tight">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Acid Wash", img: "https://via.placeholder.com/600x800/333333/ffffff?text=ACID+WASH" },
            { name: "Anime Print", img: "https://via.placeholder.com/600x800/1e3a8a/ffffff?text=ANIME" },
            { name: "Minimalist", img: "https://via.placeholder.com/600x800/f3f4f6/000000?text=MINIMAL" }
          ].map((col) => (
            <Link key={col.name} href={`/category/Oversized%20Tees`} className="group relative block aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-gray-800">
               <img src={col.img} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
               <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300 flex items-center justify-center">
                 <div className="bg-white dark:bg-black px-8 py-4 text-center transform translate-y-4 group-hover:translate-y-0 transition">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase">{col.name}</h3>
                 </div>
               </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-10 text-center uppercase tracking-tight">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Gallery Mock */}
      <section className="w-full bg-black py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Join The Cult</h2>
            <p className="text-gray-400">Tag @UrbanFit on Instagram to be featured.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square relative group overflow-hidden bg-gray-900">
                <img
                  src={`https://via.placeholder.com/400x400/222222/555555?text=IG+Post+${i}`}
                  alt={`Instagram Post ${i}`}
                  className="w-full h-full object-cover group-hover:opacity-50 transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 flex flex-col">
      <div className="relative aspect-[3/4] bg-gray-200 dark:bg-gray-900 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} back view`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1">
            -{product.discount}%
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
           <Link href={`/product/${product.id}`} className="w-full block text-center bg-white text-black font-bold py-2 text-sm uppercase hover:bg-gray-200">
             Quick View
           </Link>
        </div>
      </div>
      <div className="pt-4 pb-2">
        <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate mb-1">
          <Link href={`/product/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
          {product.discount > 0 && (
             <p className="text-xs text-gray-500 line-through">${(product.price * (1 + product.discount/100)).toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
