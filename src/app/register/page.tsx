
export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-8 border dark:border-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">User Registration</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-white bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-white bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2" type="button">
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
          By registering, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
}
