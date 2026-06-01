export default function CancellationPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black uppercase tracking-tight mb-8">Cancellation Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p><strong>Last Updated:</strong> May 30, 2026</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Order Cancellation by Customer</h2>
        <p>You can cancel your order free of charge if it has not yet been processed or shipped. To request a cancellation, please contact our support team immediately with your order number.</p>
        <p>Once an order has been shipped, it cannot be cancelled. You will need to wait for the item to arrive and then initiate a return within the 7-day window in accordance with our Return & Exchange Policy.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Order Cancellation by EXTRAALAYER</h2>
        <p>We reserve the right to cancel any order for any reason, including but not limited to:</p>
        <ul>
          <li>Product unavailability or out-of-stock items.</li>
          <li>Errors in product pricing or descriptions.</li>
          <li>Suspected fraudulent activity.</li>
        </ul>
        <p>If your order is cancelled by us, we will notify you immediately and issue a full refund to your original payment method without any deductions.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p>For cancellations, please reach out to us at:</p>
        <p>Email: <a href="mailto:support.extraalayer@gmail.com" className="text-blue-600 dark:text-blue-400">support.extraalayer@gmail.com</a></p>
        <p>WhatsApp: +91 7719032338</p>
      </div>
    </div>
  );
}
