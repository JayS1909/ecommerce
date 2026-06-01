'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useCartStore } from "@/store/useCartStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(10, "Complete address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(5, "Valid pincode is required"),
  paymentMethod: z.enum(['upi', 'card', 'cod', 'wallet']),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal + (subtotal * 0.08) + (cart.length > 0 ? 5 : 0);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 'upi'
    }
  });

  const selectedPaymentMethod = watch('paymentMethod');

  const onSubmit = () => {
    // In a real app, this would process the payment and create the order on the backend
    // Removed console.log
    alert('Order Placed Successfully! Your items are on the way.');
    clearCart();
    router.push('/account'); // Or an order success page
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-black uppercase mb-4">Checkout</h1>
        <p className="mb-8 text-gray-500">Your cart is empty. You must add items before checking out.</p>
        <Link href="/" className="bg-black text-white px-8 py-4 font-bold uppercase">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-8">Fast Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/3">

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
            <h2 className="text-xl font-bold uppercase border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">First Name</label>
                <input {...register("firstName")} className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none`} type="text" />
                {errors.firstName && <p className="text-red-500 text-xs italic mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Last Name</label>
                <input {...register("lastName")} className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none`} type="text" />
                {errors.lastName && <p className="text-red-500 text-xs italic mt-1">{errors.lastName.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email Address</label>
                <input {...register("email")} className={`border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none`} type="email" />
                {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Phone Number</label>
                <input {...register("phone")} className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none`} type="tel" />
                {errors.phone && <p className="text-red-500 text-xs italic mt-1">{errors.phone.message}</p>}
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
              <h2 className="text-xl font-bold uppercase">Shipping Address</h2>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Complete Address</label>
              <textarea {...register("address")} className={`border ${errors.address ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none`} rows={3}></textarea>
              {errors.address && <p className="text-red-500 text-xs italic mt-1">{errors.address.message}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">City</label>
                <input {...register("city")} className={`border ${errors.city ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none`} type="text" />
                {errors.city && <p className="text-red-500 text-xs italic mt-1">{errors.city.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">State</label>
                <input {...register("state")} className={`border ${errors.state ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none`} type="text" />
                {errors.state && <p className="text-red-500 text-xs italic mt-1">{errors.state.message}</p>}
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Pincode</label>
                <input {...register("pincode")} className={`border ${errors.pincode ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 w-full py-2 px-3 focus:outline-none`} type="text" />
                {errors.pincode && <p className="text-red-500 text-xs italic mt-1">{errors.pincode.message}</p>}
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-white dark:bg-gray-900 shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
            <h2 className="text-xl font-bold uppercase border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">Payment Method</h2>

            <div className="space-y-4">
              <label className={`flex items-center space-x-3 p-3 border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition ${selectedPaymentMethod === 'upi' ? 'border-black dark:border-white' : 'border-gray-200 dark:border-gray-700'}`}>
                <input type="radio" value="upi" {...register("paymentMethod")} className="form-radio h-5 w-5 text-black" />
                <span className="font-bold">UPI / QR Code</span>
              </label>
              <label className={`flex items-center space-x-3 p-3 border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition ${selectedPaymentMethod === 'card' ? 'border-black dark:border-white' : 'border-gray-200 dark:border-gray-700'}`}>
                <input type="radio" value="card" {...register("paymentMethod")} className="form-radio h-5 w-5 text-black" />
                <span className="font-bold">Credit / Debit Card</span>
              </label>
              <label className={`flex items-center space-x-3 p-3 border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition ${selectedPaymentMethod === 'cod' ? 'border-black dark:border-white' : 'border-gray-200 dark:border-gray-700'}`}>
                <input type="radio" value="cod" {...register("paymentMethod")} className="form-radio h-5 w-5 text-black" />
                <span className="font-bold">Cash on Delivery (COD)</span>
              </label>
              <label className={`flex items-center space-x-3 p-3 border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition ${selectedPaymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                <input type="radio" value="wallet" {...register("paymentMethod")} className="form-radio h-5 w-5 text-black" />
                <span className="font-bold">Store Wallet ($25.00)</span>
              </label>
              {errors.paymentMethod && <p className="text-red-500 text-xs italic mt-1">{errors.paymentMethod.message}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link href="/cart" className="font-bold text-sm text-gray-500 hover:text-black dark:hover:text-white uppercase">
              &larr; Return to Cart
            </Link>
            <button className="bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest py-4 px-10 hover:bg-gray-800 transition-colors" type="submit">
              Place Order
            </button>
          </div>
        </form>

        {/* Order Summary Sidebar */}
        <div className="lg:w-1/3">
           <div className="bg-gray-50 dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
             <h2 className="text-lg font-bold uppercase mb-4">In Your Bag</h2>
             <ul className="divide-y divide-gray-200 dark:divide-gray-700 mb-6 max-h-64 overflow-y-auto">
               {cart.map(item => (
                 <li key={`${item.id}-${item.size}`} className="py-4 flex text-sm">
                   <div className="flex-1 font-medium">{item.name} (x{item.quantity})</div>
                   <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                 </li>
               ))}
             </ul>
             <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
               <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                 <span>Subtotal</span>
                 <span>${subtotal.toFixed(2)}</span>
               </div>
               <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                 <span>Shipping</span>
                 <span>$5.00</span>
               </div>
               <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                 <span>Tax</span>
                 <span>${(subtotal * 0.08).toFixed(2)}</span>
               </div>
               <div className="flex justify-between font-black text-xl pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                 <span>Total</span>
                 <span>${total.toFixed(2)}</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
