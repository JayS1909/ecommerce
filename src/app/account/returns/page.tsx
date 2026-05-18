import Link from "next/link";

export default function ReturnsPage() {
  const eligibleOrders = [
    { id: '10293', date: '2023-10-15', status: 'Delivered', items: 2, total: 45.50 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Account Sidebar Navigation */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">My Account</h2>
            <nav className="space-y-4">
              <Link href="/account" className="block text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-2 rounded-md transition">Dashboard</Link>
              <Link href="/account/wallet" className="block text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-2 rounded-md transition">Wallet & History</Link>
              <Link href="/account/returns" className="block text-black font-semibold bg-gray-100 px-4 py-2 rounded-md">Returns & Exchanges</Link>
            </nav>
          </div>
        </div>

        {/* Returns Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Returns & Exchanges</h1>

            <div className="mb-8 p-6 bg-blue-50 text-blue-900 rounded-lg border border-blue-200">
              <h2 className="text-lg font-bold mb-2">Our Return Policy</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Items must be returned within 30 days of delivery.</li>
                <li>Items must be unworn, unwashed, and have original tags attached.</li>
                <li>Refunds are processed to the original payment method or store wallet within 5-7 business days.</li>
                <li>Final sale items cannot be returned or exchanged.</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Eligible Orders for Return</h3>

            {eligibleOrders.length > 0 ? (
              <div className="space-y-4">
                {eligibleOrders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-1">Order #{order.id}</h4>
                      <p className="text-sm text-gray-500 mb-1">Ordered on: {order.date}</p>
                      <p className="text-sm text-gray-500">{order.items} items • Total: ${order.total.toFixed(2)}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-3">
                      <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-50 transition">
                        View Details
                      </button>
                      <button className="bg-black text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-800 transition">
                        Initiate Return
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                You have no eligible orders to return at this time.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
