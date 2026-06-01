export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-8">Refund Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p><strong>Last Updated:</strong> May 30, 2026</p>
        <p>Thank you for shopping at EXTRAALAYER. If you are not entirely satisfied with your purchase, we&apos;re here to help.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Eligibility for Refunds</h2>
        <p>To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging. You have 7 days to request a refund from the date you received it.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Non-refundable Items</h2>
        <p>Certain items cannot be refunded, including:</p>
        <ul>
          <li>Gift cards</li>
          <li>Intimate apparel or accessories (for hygiene reasons)</li>
          <li>Items marked as final sale</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Refund Process</h2>
        <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
        <p>If your return is approved, we will initiate a refund to your original method of payment. A nominal ₹70 reverse shipping fee will be deducted from your refund amount. This deduction is waived if you opt for a refund to your EXTRAALAYER Store Wallet.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Shipping Costs</h2>
        <p>A ₹70 reverse shipping fee will be deducted for returning your item to your original payment method. If you receive a refund to the EXTRAALAYER Store Wallet, there will be no ₹70 deduction.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p>Email: <a href="mailto:support.extraalayer@gmail.com" className="text-blue-600 dark:text-blue-400">support.extraalayer@gmail.com</a></p>
        <p>WhatsApp: +91 7719032338</p>
      </div>
    </div>
  );
}
