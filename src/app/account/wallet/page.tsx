import Link from "next/link";

export default function WalletPage() {
  const transactions = [
    { id: 'TXN-9821', date: '2023-10-15', amount: -45.50, description: 'Purchase Order #10293', type: 'debit' },
    { id: 'TXN-9810', date: '2023-09-28', amount: 50.00, description: 'Refund for Order #09882', type: 'credit' },
    { id: 'TXN-9755', date: '2023-09-10', amount: 150.00, description: 'Wallet Top-up', type: 'credit' },
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
              <Link href="/account/wallet" className="block text-black font-semibold bg-gray-100 px-4 py-2 rounded-md">Wallet & History</Link>
              <Link href="/account/returns" className="block text-gray-600 hover:text-black hover:bg-gray-50 px-4 py-2 rounded-md transition">Returns & Exchanges</Link>
            </nav>
          </div>
        </div>

        {/* Wallet Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Wallet</h1>

            <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl p-8 mb-8 shadow-lg">
              <p className="text-gray-300 text-sm mb-1">Available Balance</p>
              <h2 className="text-4xl font-extrabold">$150.00</h2>
              <div className="mt-6">
                <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition">
                  Top up Balance
                </button>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Transaction History</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((txn) => (
                    <tr key={txn.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{txn.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{txn.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{txn.id}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium ${txn.type === 'credit' ? 'text-green-600' : 'text-gray-900'}`}>
                        {txn.type === 'credit' ? '+' : ''}{txn.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
