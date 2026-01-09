export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold">
            <span className="text-brandRed">Weekend</span>{" "}
            <span className="text-brandTeal">Bio</span>
          </h1>
          <p className="text-gray-400">
            Short-form investing insights. No hype. No noise.
          </p>
        </div>

        {/* Card */}
        <div className="bg-cardDark rounded-2xl p-6 shadow-xl space-y-6">
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Free Market Alerts</h2>
            <p className="text-gray-400 text-sm">
              High-signal moves I’m watching. Delivered by email.
            </p>
          </div>

          {/* Email Form */}
          <form
            action="https://formspree.io/f/mwvpgbnw"
            method="POST"
            className="space-y-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="w-full px-4 py-3 rounded-xl bg-bgDark border border-gray-700 focus:outline-none focus:border-brandTeal"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-brandRed hover:opacity-90 font-semibold transition"
            >
              Get Alerts
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center">
            No spam. Ever.
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-600">
          Educational content only. Not financial advice.
        </p>
      </div>
    </div>
  )
}
