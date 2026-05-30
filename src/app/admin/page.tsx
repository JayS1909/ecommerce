'use client';
import ImageWithFallback from "@/components/ui/ImageWithFallback";

import { useState } from 'react';
import products from '@/data/products.json';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [adminProducts, setAdminProducts] = useState(products.slice(0, 10));

  const handleDelete = (id: string) => {
    setAdminProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleEdit = (id: string) => {
    const currentName = adminProducts.find(p => p.id === id)?.name;
    const newName = window.prompt("Edit Product Name:", currentName);
    if (newName) {
      setAdminProducts(prev => prev.map(p => p.id === id ? { ...p, name: newName } : p));
    }
  };

  const handleAdd = () => {
    const newName = window.prompt("Enter new product name:");
    if (!newName) return;
    const newProduct = {
      id: Math.random().toString(),
      name: newName,
      category: "Men",
      price: 29.99,
      image: "/images/logo/logo.png",
      hoverImage: "/images/logo/logo.png",
      description: "A newly added product.",
      fabric: "100% Cotton",
      fit: "Regular",
      washCare: "Machine Wash Cold",
      isNew: true,
      isBestSeller: false,
      collection: "Summer",
      discount: 0
    };
    setAdminProducts(prev => [newProduct, ...prev]);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid password. Check environment variables');
      }
    } catch (err) {
      setError('Failed to login');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-24">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-8 border dark:border-gray-800 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Admin Access Required</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Admin Password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md mb-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-2 px-4 rounded transition">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <button onClick={handleLogout} className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-bold uppercase text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition">
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-900 p-6 border dark:border-gray-800 shadow-sm text-center">
          <p className="text-sm font-bold uppercase text-gray-500 mb-1">Total Users</p>
          <p className="text-4xl font-black">1,248</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 border dark:border-gray-800 shadow-sm text-center">
          <p className="text-sm font-bold uppercase text-gray-500 mb-1">Active Products</p>
          <p className="text-4xl font-black">{adminProducts.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 border dark:border-gray-800 shadow-sm text-center">
          <p className="text-sm font-bold uppercase text-gray-500 mb-1">Pending Returns</p>
          <p className="text-4xl font-black text-red-500">12</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-sm border dark:border-gray-800 mb-12">
        <div className="px-6 py-5 flex justify-between items-center bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
          <h3 className="text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">Product Inventory</h3>
          <button onClick={handleAdd} className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 font-bold uppercase text-xs hover:bg-gray-800 transition">
            + Add Product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Stock Status</th>
                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {adminProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <ImageWithFallback className="h-10 w-10 rounded-full object-cover" src={product.image} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white truncate w-48">{product.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                       <span className="text-sm text-gray-900 dark:text-white font-medium">In Stock</span>
                       <button onClick={() => window.window.confirm('Stock level updated.')} className="text-xs border border-gray-300 dark:border-gray-600 rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Update</button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleEdit(product.id)} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-4">Edit</button>
                    <button onClick={() => handleDelete(product.id)} className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-center sm:px-6">
           <p className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Showing {adminProducts.length} items. Pagination mock.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-sm border dark:border-gray-800">
        <div className="px-6 py-5 flex justify-between items-center bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
          <h3 className="text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">User Database</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Role</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
                { name: "Jane Smith", email: "jane@example.com", role: "Customer", status: "Active" },
                { name: "Admin Root", email: "admin@EXTRAALAYER.com", role: "Admin", status: "Active" },
              ].map((user, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-bold uppercase tracking-wider ${user.role === 'Admin' ? 'text-red-600' : 'text-gray-500'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold uppercase tracking-wider">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
