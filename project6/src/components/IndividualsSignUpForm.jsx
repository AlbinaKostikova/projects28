import { useState } from 'react'

function IndividualSighupForm({ onBack }) {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target

    setValues(prev => ({
      ...prev,
      [name]: value
    }))
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }))
  }
  const validate = () => {
    const newErrors = {}

    if (!values.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!values.surname.trim()) {
      newErrors.surname = 'Surname is required'
    }
    if (!values.email.includes('@')) {
      newErrors.email = 'Invalid email'
    }
    if (values.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = () => {
    if (!validate()) return 
    console.log('Form data:', values)
  }
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Individual Account</h3>

      <div className="flex flex-col gap-3 w-full">
        <div classNamne="w-full">
          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            value={values.name}
            onChange={handleChange}
            className="w-full border  border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
        </div>
        <div>
          <input 
          type="text" 
          name="surname"
          placeholder="Surname" 
          value={values.surname}
          onChange={handleChange}
          className="w-full border  border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.surname && <span className="text-red-500 text-xs">{errors.surname}</span>}
        </div>
        <div>
          <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={values.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>
        <div><input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={values.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
        </div>
        <div>
          <input 
          type="password" 
          name="confirmPassword"
          placeholder="Confirm password" 
          value={values.confirmPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
        </div>
      </div>
      
      <button 
      onClick={handleSubmit}
      className="w-full bg-[#3a3aef] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">Create Account</button>
      <button type="button" onClick={onBack} className="text-sm text-grey-500 hover:text-grey-700 font-medium self-start transition-colors"> ← Back to selection</button>
    </div>
  )
}
export default IndividualSighupForm