export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">Contact Us</h1>
      <div className="bg-gray-50 dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold uppercase text-sm mb-2">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-400"><a href="mailto:support.extraalayer@gmail.com" className="hover:underline">support.extraalayer@gmail.com</a></p>
            <p className="text-gray-600 dark:text-gray-400"><a href="mailto:extraalayer@gmail.com" className="hover:underline">extraalayer@gmail.com</a></p>
          </div>
          <div>
            <h3 className="font-bold uppercase text-sm mb-2">WhatsApp</h3>
            <p className="text-gray-600 dark:text-gray-400">+91-7719032338</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-bold uppercase text-sm mb-2">Address</h3>
            <p className="text-gray-600 dark:text-gray-400">
              6/35 South Wing,<br/>
              Pratik Nagar Sector 3 & 4,<br/>
              Mohanwadi, Yerwada,<br/>
              Pune - 411006,<br/>
              Maharashtra, India
            </p>
          </div>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3" />
          <input type="email" placeholder="Email" className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3" />
          <textarea placeholder="Message" rows={4} className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3"></textarea>
          <button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase p-3">Send Message</button>
        </form>
      </div>
    </div>
  );
}
