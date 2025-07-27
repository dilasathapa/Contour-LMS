'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import './login.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  // handling login
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) setError(error.message)
    else router.push('/dashboard')
  }

  return (
    <div className="login-container">
      <h1 className='inter-textstyle'>Log<span>in</span></h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      {error && <p className="login-error">{error}</p>}
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      <h5>Don&apos;t have an account? <a href='/signup'>sign up</a></h5>
    </div>
  )
}
