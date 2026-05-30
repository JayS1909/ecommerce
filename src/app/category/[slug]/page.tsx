import Link from "next/link";
import products from "@/data/products.json";
import CategoryClient from "./CategoryClient";

export async function generateStaticParams() {
  const categories = ["Oversized Tees", "Regular Tees", "Hoodies", "Bottoms", "Accessories"];
  return categories.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  return { title: `${decodedSlug} | EXTRAALAYER`, description: `Shop the latest ${decodedSlug} at EXTRAALAYER.` };
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

      <CategoryClient decodedSlug={decodedSlug} initialProducts={categoryProducts} />
    </div>
  );
}
