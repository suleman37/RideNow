import PropTypes from 'prop-types'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FinishRide = ({ ride, setFinishRidePanel }) => {

    const navigate = useNavigate()

    const endRide = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
                rideId: ride._id
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            if (response.status === 200) {
                navigate('/captain-home')
            }
        } catch (error) {
            console.error("Failed to end ride:", error)
        }
    }

    return (
        <div className='bg-white text-black p-6 rounded-lg shadow-lg'>
            <h5 className='p-1 text-center w-[93%] absolute top-0 cursor-pointer' onClick={() => setFinishRidePanel(false)}>
                <i className="text-3xl text-black ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Conclude Your Journey</h3>
            <div className='flex items-center justify-between p-4 border-2 border-black rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="User" />
                    <h2 className='text-lg font-medium'>{ride?.user.fullname.firstname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>3.5 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-black'>
                        <i className="ri-map-pin-user-fill text-black"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Starting Point</h3>
                            <p className='text-sm -mt-1 text-gray-800'>{ride?.pickup || 'Lahore, Pakistan'}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-black'>
                        <i className="text-lg ri-map-pin-2-fill text-black"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Destination</h3>
                            <p className='text-sm -mt-1 text-gray-800'>{ride?.destination || 'Karachi, Pakistan'}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line text-black"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Fare: Rs{ride?.fare || 500}</h3>
                            <p className='text-sm -mt-1 text-gray-800'>Cash Payment</p>
                        </div>
                    </div>
                </div>

                <div className='mt-10 w-full'>
                    <button
                        onClick={endRide}
                        className='w-full mt-5 flex text-lg justify-center bg-black text-white font-semibold p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300'>
                        Complete Ride
                    </button>
                </div>
            </div>
        </div>
    )
}

FinishRide.propTypes = {
    ride: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        user: PropTypes.shape({
            fullname: PropTypes.shape({
                firstname: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        pickup: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        fare: PropTypes.number.isRequired
    }).isRequired,
    setFinishRidePanel: PropTypes.func.isRequired
}

export default FinishRide