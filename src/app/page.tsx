import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Promotional Banner */}
      <div className="w-full bg-red-600 text-white text-center py-2 text-sm font-medium">
        SUMMER SALE: Get up to 50% off on all items! Use code SUMMER50
      </div>

      {/* Hero Section */}
      <section className="w-full relative h-[60vh] bg-gray-200 flex items-center justify-center">
        <div className="absolute inset-0">
           <img
              src="https://via.placeholder.com/1920x1080?text=Summer+Collection"
              alt="Hero Banner"
              className="w-full h-full object-cover"
            />
        </div>
        <div className="relative z-10 text-center bg-white bg-opacity-75 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">New Arrivals Are Here</h1>
          <p className="text-xl text-gray-700 mb-6">Discover the latest trends in fashion.</p>
          <Link href="/category/Men" className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Men", "Women", "Kids", "Accessories"].map((cat) => (
            <Link key={cat} href={`/category/${cat}`} className="group relative block h-64 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={`https://via.placeholder.com/400x400?text=${cat}`}
                alt={cat}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{cat}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <Link href={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                  <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Feed Mock */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Follow Us on Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
                <img
                  src={`https://via.placeholder.com/300x300?text=IG+Post+${i}`}
                  alt={`Instagram Post ${i}`}
                  className="w-full h-full object-cover hover:opacity-75 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
