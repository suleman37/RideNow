import { Link } from 'react-router-dom'
import Bg from "../assets/man-with-cell-phone-street.jpg"

const Start = () => {
  return (
    <div className='bg-cover bg-center h-screen flex flex-col justify-between' style={{ backgroundImage: `url(${Bg})` }}>
      <div className='flex justify-between items-center p-8'>
        <img className='w-20' src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" alt="Uber Logo" />
        <h1 className='text-white text-4xl font-bold drop-shadow-lg'>Welcome to Uber</h1>
      </div>
      <div className='bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-t-3xl shadow-2xl'>
        <h2 className='text-3xl font-bold text-center mb-4'>Get Started with Uber</h2>
        <p className='text-center text-gray-700 mb-6'>Join us and explore the world with ease and comfort. Your journey begins here!</p>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg shadow-lg'>
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Start;