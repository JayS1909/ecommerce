'use client';

import { X } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl shadow-xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
        >
          <X size={24} />
        </button>
        <div className="p-8">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Size Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-3 border border-gray-200 dark:border-gray-700 font-bold">Size</th>
                  <th className="p-3 border border-gray-200 dark:border-gray-700 font-bold">Chest (in)</th>
                  <th className="p-3 border border-gray-200 dark:border-gray-700 font-bold">Length (in)</th>
                  <th className="p-3 border border-gray-200 dark:border-gray-700 font-bold">Sleeve (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold">S</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">38-40</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">27</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">8.5</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold">M</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">40-42</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">28</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">9</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold">L</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">42-44</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">29</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">9.5</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold">XL</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">44-46</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">30</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">10</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold">XXL</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">46-48</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">31</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700">10.5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">Measurements are approximate and can vary slightly between styles.</p>
        </div>
      </div>
    </div>
  );
}
