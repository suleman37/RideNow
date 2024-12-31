import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on("ride-ended", () => {
    navigate("/home");
  });
  return (
    <div className="h-screen bg-white text-black">
      <Link
        to="/home"
        className="fixed right-4 top-4 h-12 w-12 bg-black text-white flex items-center justify-center rounded-full shadow-lg"
      >
        <i className="text-xl font-bold ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <LiveTracking />
      </div>
      <div className="h-1/2 p-6 bg-white rounded-t-3xl shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <img
            className="h-16 rounded-full shadow-md"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="Captain"
          />
          <div className="text-right">
            <h2 className="text-xl font-bold capitalize">
              {ride?.captain.fullname.firstname}
            </h2>
            <h4 className="text-2xl font-extrabold">
              {ride?.captain.vehicle.plate}
            </h4>
            <p className="text-md text-gray-700">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5 p-4 bg-gray-200 rounded-lg shadow-sm">
            <i className="text-2xl text-black ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-xl font-semibold">Wah Cantt To Islamabad</h3>
              <p className="text-md text-gray-700">{ride?.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-4 bg-gray-200 rounded-lg shadow-sm">
            <i className="text-2xl text-black ri-currency-line"></i>
            <div>
              <h3 className="text-xl font-semibold">Rs{ride?.fare}</h3>
              <p className="text-md text-gray-700">Cash Payment</p>
            </div>
          </div>
        </div>
        <button className="bg-black hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center text-white font-bold mt-6 rounded-lg px-6 py-3 w-full text-xl shadow-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
