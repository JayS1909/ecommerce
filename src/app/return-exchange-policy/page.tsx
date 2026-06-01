export default function ReturnExchangePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-8">Return & Exchange Policy</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <section className="mb-10">
          <h2 className="text-2xl font-bold uppercase text-gray-900 dark:text-white mb-4">7-Day Window</h2>
          <p>
            We offer a 7-day return and exchange window from the date of delivery. Unused items with original tags intact are eligible for return or exchange.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold uppercase text-gray-900 dark:text-white mb-4">Process</h2>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Reverse pickup will be arranged within 2-3 working days of your request.</li>
            <li>A nominal ₹70 reverse shipping fee will be deducted from your refund amount.</li>
            <li>This deduction is waived if you opt for a refund to your EXTRAALAYER Store Wallet.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold uppercase text-gray-900 dark:text-white mb-4">Return Address</h2>
          <p className="whitespace-pre-line">
            EXTRAALAYER
            6/35 South Wing
            Pratik Nagar Sector 3 & 4
            Mohanwadi
            Near Vishrantwadi Chowk
            Yerwada 411006
            Pune
            Maharashtra
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold uppercase text-gray-900 dark:text-white mb-4">Contact</h2>
          <p>Email: <a href="mailto:support.extraalayer@gmail.com" className="text-blue-600 dark:text-blue-400">support.extraalayer@gmail.com</a></p>
          <p>WhatsApp: +91 7719032338</p>
        </section>
      </div>
    </div>
  );
}
