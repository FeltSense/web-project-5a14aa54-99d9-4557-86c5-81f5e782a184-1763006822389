export default function Pricing() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
  <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Creative Business</h2>
      <p className="text-gray-600 mb-6">Comprehensive Ada Lovelace Resource Collection</p>
      <div className="text-center">
        <span className="text-5xl font-bold text-blue-600">$29</span>
        <p className="text-gray-600 mt-2">one-time payment</p>
      </div>
    </div>

    {/* Features List */}
    <div className="space-y-4 mb-8">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">✓</div>
        <div>
          <p className="font-semibold text-gray-900">Interactive Timeline (1815-1852)</p>
          <p className="text-sm text-gray-600">Major achievements and life milestones</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">✓</div>
        <div>
          <p className="font-semibold text-gray-900">10+ Inspirational Quotes</p>
          <p className="text-sm text-gray-600">Curated collection of her wisdom</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">✓</div>
        <div>
          <p className="font-semibold text-gray-900">Analytical Engine Notes</p>
          <p className="text-sm text-gray-600">Detailed showcase of her groundbreaking work</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">✓</div>
        <div>
          <p className="font-semibold text-gray-900">20+ Academic Papers</p>
          <p className="text-sm text-gray-600">Links to historical resources and research</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">✓</div>
        <div>
          <p className="font-semibold text-gray-900">Educational Materials</p>
          <p className="text-sm text-gray-600">Downloadable lesson plans and resources</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-1">✓</div>
        <div>
          <p className="font-semibold text-gray-900">Mathematical Contributions</p>
          <p className="text-sm text-gray-600">Visual representation of her innovations</p>
        </div>
      </div>
    </div>

    {/* CTA Button */}
    <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=5a14aa54-99d9-4557-86c5-81f5e782a184'} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
      Get Your Website - $29
    </button>

    <p className="text-center text-xs text-gray-500 mt-4">Instant access • No recurring charges</p>
  </div>
</section>
  );
}