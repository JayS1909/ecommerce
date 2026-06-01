export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-8">Shipping Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p><strong>Last Updated:</strong> May 30, 2026</p>
        <p>At EXTRAALAYER, we strive to deliver your streetwear as quickly and efficiently as possible.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Processing Time</h2>
        <p>All orders are processed within 1-3 business days. Orders are not shipped or delivered on weekends or holidays.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Shipping Rates & Delivery Estimates</h2>
        <p>Shipping charges for your order will be calculated and displayed at checkout. Delivery delays can occasionally occur.</p>
        <ul>
          <li><strong>Standard Shipping:</strong> 5-7 business days</li>
          <li><strong>Express Shipping:</strong> 2-3 business days</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Reverse Shipping Fee</h2>
        <p>For returns and exchanges, a nominal ₹70 reverse shipping fee will be deducted from your refund amount. This deduction is waived if you opt for a refund to your EXTRAALAYER Store Wallet.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Damages</h2>
        <p>EXTRAALAYER is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p>Email: <a href="mailto:support.extraalayer@gmail.com" className="text-blue-600 dark:text-blue-400">support.extraalayer@gmail.com</a></p>
        <p>WhatsApp: +91-7719032338</p>
      </div>
    </div>
  );
}
