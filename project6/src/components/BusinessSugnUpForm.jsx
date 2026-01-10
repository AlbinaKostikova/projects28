function BusinessSignupForm({ onBack }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Business Account</h3>
      
      <div className="flex flex-col gap-3">
        <input type="text" placeholder="Company Name" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" placeholder="Password" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" placeholder="Confirm password" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      </div>

      <button className="w-full bg-[#3a3aef] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Create Business Account</button>
      <button type="button" onClick={onBack} className="text-sm text-gray-500 hover:text-gray-700 font-medium self-start transition-colors"> ← Back to selection</button>
    </div>
  )
}

export default BusinessSignupForm
