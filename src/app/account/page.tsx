import Link from "next/link";

export default function AccountDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Account Sidebar Navigation */}
        <div className="md:w-1/4">
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-6">My Account</h2>
            <nav className="space-y-2">
              <Link href="/account" className="block font-bold bg-black text-white px-4 py-3 rounded-none uppercase text-sm">Dashboard</Link>
              <Link href="/order-tracking" className="block text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-none transition font-bold uppercase text-sm">My Orders</Link>
              <Link href="/account/returns" className="block text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-none transition font-bold uppercase text-sm">Returns & Exchanges</Link>
              <Link href="/account/wallet" className="block text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-none transition font-bold uppercase text-sm">Wallet ($25.00)</Link>
              <Link href="/wishlist" className="block text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-3 rounded-none transition font-bold uppercase text-sm">Wishlist</Link>
            </nav>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="md:w-3/4">
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg p-8">
            <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-8">Welcome back, John!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold uppercase mb-2">Recent Orders</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">You have 1 order currently in transit.</p>
                <Link href="/order-tracking" className="text-blue-600 hover:text-blue-800 font-bold uppercase text-sm">Track Order &rarr;</Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold uppercase mb-2">UrbanFit Wallet</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Current Balance: <span className="font-bold text-black dark:text-white">$25.00</span></p>
                <Link href="/account/wallet" className="text-blue-600 hover:text-blue-800 font-bold uppercase text-sm">View Transactions &rarr;</Link>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 mb-8">
              <h3 className="text-lg font-bold uppercase mb-4">Profile Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Name</p>
                  <p className="font-bold">John Doe</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <p className="font-bold">john.doe@example.com</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Phone</p>
                  <p className="font-bold">+1 (555) 123-4567</p>
                </div>
              </div>
              <button className="mt-6 border border-black dark:border-white bg-transparent text-black dark:text-white px-6 py-2 font-bold uppercase text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">Edit Profile</button>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold uppercase mb-4">Saved Addresses</h3>
              <div className="border border-gray-300 dark:border-gray-600 p-4 relative">
                <span className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 uppercase font-bold">Default</span>
                <p className="font-bold mb-1">John Doe</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">123 Streetwear Ave, Apt 4B<br/>New York, NY 10001<br/>United States</p>
              </div>
              <button className="mt-6 text-blue-600 font-bold uppercase text-sm">+ Add New Address</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
