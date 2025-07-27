'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import './signup.css'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

// handling signup
  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) setError(error.message)
    else router.push('/dashboard')
  }

  return (
    <div className="signup-container">
      <h1 className='inter-textstyle'>Sign<span>up</span></h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="signup-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signup-input"
      />
      {error && <p className="signup-error">{error}</p>}
      <button onClick={handleSignup} className="signup-button">
        Register
      </button>
      <h5>Already have an account? <a href='/login'>login</a> </h5>
    </div>
  )
}
