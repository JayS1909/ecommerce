export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">Contact Us</h1>
      <div className="bg-gray-50 dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold uppercase text-sm mb-2">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-400">support@EXTRAALAYER.com</p>
          </div>
          <div>
            <h3 className="font-bold uppercase text-sm mb-2">WhatsApp / Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+1 (555) 019-2837</p>
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
