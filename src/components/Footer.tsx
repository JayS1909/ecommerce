export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Contact Us</li>
              <li>Returns & Exchanges</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Follow Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} ClothingCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
