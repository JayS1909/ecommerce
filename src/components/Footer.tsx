import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <span className="font-extrabold text-3xl tracking-tighter text-white mb-4 block">EXTRAALAYER</span>
            <p className="text-gray-400 mb-4 max-w-sm">Layer Up. Stand Out. EXTRAALAYER is more than clothing. It&apos;s the extra layer of confidence you put on before you face the world.</p>
            <div className="text-gray-400 text-sm mb-6 space-y-1">
              <p><a href="mailto:support.extraalayer@gmail.com" className="hover:underline">support.extraalayer@gmail.com</a></p>
              <p>+91 7719032338</p>
            </div>
            <div className="flex space-x-4">
              <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">IG</span>
              <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">FB</span>
              <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">X</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/category/Oversized%20Tees" className="hover:text-white transition">Oversized Tees</Link></li>
              <li><Link href="/category/Hoodies" className="hover:text-white transition">Hoodies</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/track-order" className="hover:text-white transition">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-gray-300">Policies</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/return-exchange-policy" className="hover:text-white transition">Return & Exchange Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-white transition">Shipping Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-white transition">Cancellation Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-gray-300">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Enter your email" className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:border-blue-500" />
              <button type="button" className="bg-white text-black font-bold py-2 px-4 rounded-md text-sm hover:bg-gray-200 transition">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} EXTRAALAYER. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-500">
             <Link href="/admin">Admin Panel</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
