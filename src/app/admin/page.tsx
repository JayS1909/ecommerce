'use client';

import React, { useState } from 'react';
import products from '@/data/products.json';
import ImageWithFallback from "@/components/ui/ImageWithFallback";

type Product = { id: string, name: string, price: number, image: string, hoverImage: string, category: string, discount: number, description: string, fabric: string, fit: string, washCare: string, isNew: boolean, isBestSeller: boolean, collection: string };

import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [adminProducts, setAdminProducts] = useState<Product[]>(products.slice(0, 10));
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin-login');
  };

  // Edit and Delete Modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const handleDelete = () => {
    if(currentProduct) {
      setAdminProducts(prev => prev.filter(p => p.id !== currentProduct.id));
      setIsDeleteModalOpen(false);
      setCurrentProduct(null);
    }
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(currentProduct) {
       setAdminProducts(prev => prev.map(p => p.id === currentProduct.id ? currentProduct : p));
       setIsEditModalOpen(false);
       setCurrentProduct(null);
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(currentProduct) {
        const newProduct = {
          ...currentProduct,
          id: Math.random().toString(),
          image: "/images/logo/logo.png",
          hoverImage: "/images/logo/logo.png",
          isNew: true,
          discount: 0
        };
        setAdminProducts(prev => [newProduct, ...prev]);
        setIsAddModalOpen(false);
        setCurrentProduct(null);
    }
  };

  return (
    <>

      {/* Delete Modal */}
      {isDeleteModalOpen && currentProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-6">Are you sure you want to delete {currentProduct.name}?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 border dark:border-gray-700">Cancel</button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && currentProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Name</label>
                <input required type="text" value={currentProduct.name} onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})} className="w-full p-2 border dark:border-gray-700 bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Price</label>
                <input required type="number" value={currentProduct.price} onChange={(e) => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})} className="w-full p-2 border dark:border-gray-700 bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Image Upload (Mock)</label>
                <input type="file" className="w-full p-2 border dark:border-gray-700 bg-transparent text-sm" />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 border dark:border-gray-700">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {isAddModalOpen && currentProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Name</label>
                <input required type="text" value={currentProduct.name} onChange={(e) => setCurrentProduct({...currentProduct, name: e.target.value})} className="w-full p-2 border dark:border-gray-700 bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Price</label>
                <input required type="number" value={currentProduct.price} onChange={(e) => setCurrentProduct({...currentProduct, price: parseFloat(e.target.value)})} className="w-full p-2 border dark:border-gray-700 bg-transparent" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Image Upload (Mock)</label>
                <input type="file" className="w-full p-2 border dark:border-gray-700 bg-transparent text-sm" />
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 border dark:border-gray-700">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      )}

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
          <button onClick={() => { setCurrentProduct({ id: "", name: "", category: "Men", price: 0, description: "", image: "", hoverImage: "", fabric: "", fit: "", washCare: "", isNew: true, isBestSeller: false, collection: "", discount: 0 }); setIsAddModalOpen(true); }} className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 font-bold uppercase text-xs hover:bg-gray-800 transition">
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
                       <button onClick={() => alert('Stock level updated.')} className="text-xs border border-gray-300 dark:border-gray-600 rounded px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition">Update</button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => { setCurrentProduct(product); setIsEditModalOpen(true); }} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-4">Edit</button>
                    <button onClick={() => { setCurrentProduct(product); setIsDeleteModalOpen(true); }} className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300">Delete</button>
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

      <div className="bg-white dark:bg-gray-900 shadow-sm border dark:border-gray-800 mb-12">
        <div className="px-6 py-5 flex justify-between items-center bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
          <h3 className="text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">Order Management</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Total</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { id: "ORD-1234", customer: "John Doe", date: "2026-06-01", total: 129.98, status: "Processing" },
                { id: "ORD-1235", customer: "Jane Smith", date: "2026-06-02", total: 89.50, status: "Shipped" },
                { id: "ORD-1236", customer: "Bob Ross", date: "2026-06-02", total: 249.99, status: "Delivered" },
              ].map((order, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600 uppercase tracking-wider">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-sm border dark:border-gray-800">
        <div className="px-6 py-5 flex justify-between items-center bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
          <h3 className="text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">Customer List</h3>
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
    </>
  );
}
