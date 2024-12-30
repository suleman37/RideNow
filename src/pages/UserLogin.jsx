import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

      if (response.status === 200) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    } catch (error) {
      console.error('Error during login:', error)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='h-screen flex items-center justify-center bg-[#f8f8f8]'>
      <div className='p-7 w-full max-w-[500px] shadow-lg'>
        <img className='w-16 mb-10 mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2 text-left'>What&apos;s your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2 text-left'>Enter Password</h3>

          <input
            className='bg-[#eeeeee] mb-4 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
        <p className='text-left'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        <Link
          to='/captain-login'
          className='bg-[#FFF] flex items-center justify-center text-black font-semibold mt-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base border-2 border-black'
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin