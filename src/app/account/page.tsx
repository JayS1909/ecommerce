import Link from "next/link";

export default function AccountDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Account Sidebar Navigation */}
        <div className="md:w-1/4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Account</h2>
            <nav className="space-y-4">
              <Link href="/account" className="block text-black dark:text-white font-semibold bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">Dashboard</Link>
              <Link href="/account/wallet" className="block text-gray-600 dark:text-gray-400 hover:text-black dark:text-white hover:bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-md transition">Wallet & History</Link>
              <Link href="/account/returns" className="block text-gray-600 dark:text-gray-400 hover:text-black dark:text-white hover:bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-md transition">Returns & Exchanges</Link>
            </nav>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="md:w-3/4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Welcome back, John Doe!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">You have 1 order in transit.</p>
                <Link href="/order-tracking" className="text-blue-600 hover:underline text-sm font-medium">Track Order</Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2">My Wallet</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Current Balance: $150.00</p>
                <Link href="/account/wallet" className="text-blue-600 hover:underline text-sm font-medium">View Transactions</Link>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Account Details</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-gray-500 dark:text-gray-400 w-24 inline-block">Name:</span> John Doe</p>
                <p><span className="text-gray-500 dark:text-gray-400 w-24 inline-block">Email:</span> john.doe@example.com</p>
                <p><span className="text-gray-500 dark:text-gray-400 w-24 inline-block">Phone:</span> +1 (555) 123-4567</p>
              </div>
              <button className="mt-4 border border-gray-300 bg-white dark:bg-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 dark:bg-gray-800">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
