export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white mt-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-2 text-gray-400 dark:text-gray-500">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-400 dark:text-gray-500">
              <li>Contact Us</li>
              <li>Returns & Exchanges</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-400 dark:text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400 dark:text-gray-500">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 dark:border-gray-800 pt-8 flex justify-center">
          <p className="text-base text-gray-400 dark:text-gray-500">&copy; {new Date().getFullYear()} ClothingCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
