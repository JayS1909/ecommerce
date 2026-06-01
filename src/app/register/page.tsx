'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [step, setStep] = useState<'input' | 'otp'>('input');
  const [contactInfo, setContactInfo] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInfo) {
      setStep('otp');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') {
      alert('Registration successful!');
      window.location.href = '/account';
    } else {
      alert('Invalid OTP. Please use 1234 for testing.');
    }
  };

  const handleGoogleRegister = () => {
    alert('Mock Google/Gmail Registration successful!');
    window.location.href = '/account';
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-8 border dark:border-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Create an Account</h1>

        {step === 'input' && (
          <>
            <form onSubmit={handleSendOtp}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="contactInfo">
                  Email or Phone Number
                </label>
                <input
                  className="shadow appearance-none border dark:border-gray-700 rounded w-full py-3 px-3 text-gray-700 dark:text-white bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  id="contactInfo"
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="john@gmail.com or +15551234567"
                  required
                />
              </div>
              <button
                className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 mb-4"
                type="submit"
              >
                Send OTP
              </button>
            </form>

            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            </div>

            <button
              onClick={handleGoogleRegister}
              className="w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 font-bold py-3 px-4 rounded flex justify-center items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              type="button"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign up with Google / Gmail
            </button>
          </>
        )}

        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp}>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">
                We&apos;ve sent a 4-digit code to <span className="font-bold text-gray-900 dark:text-white">{contactInfo}</span>
              </p>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 text-center" htmlFor="otp">
                Enter OTP (Hint: 1234)
              </label>
              <input
                className="shadow appearance-none border dark:border-gray-700 rounded w-full py-3 px-3 text-center text-2xl tracking-widest text-gray-700 dark:text-white bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                id="otp"
                type="text"
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="0000"
                required
                autoFocus
              />
            </div>
            <div className="flex flex-col space-y-3">
              <button
                className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                type="submit"
              >
                Verify & Register
              </button>
              <button
                type="button"
                onClick={() => setStep('input')}
                className="w-full text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white font-medium py-2"
              >
                Change Email/Phone
              </button>
            </div>
          </form>
        )}

        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-8">
          Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}
