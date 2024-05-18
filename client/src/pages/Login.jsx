import { useState, useContext } from "react"
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiUrl } from "../context/constants.jsx";
import { authContext } from '../context/AuthContext.jsx';
import axios from "axios";
import { AppointmentContext } from "../context/AppointmentContext.jsx";


const Login = () => {

  const { authState: {authLoading,isAuthenticated} } = useContext(authContext);
  if (authLoading) <div>Loading...</div>
  else if (isAuthenticated){
    window.location.href = '/';
    const { getAppointments } = useContext(AppointmentContext);
    useEffect(() => {
    const fetchData = async () => {
      await getAppointments();
    };

    fetchData();
  }, [getAppointments]);
    return null;
  }

  //context 
  const { loginUser } = useContext(authContext);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  //const [loading, setLoading] = useState(false);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const headers = {
    'Content-Type': 'application/json', // Thiết lập kiểu dữ liệu của yêu cầu

  };
  const submitHandler = async event => {
    event.preventDefault();
    try {
      const loginData = await loginUser(formData);
      if (loginData.success) {
        toast.success(loginData.message);
        
        window.location.href = '/';
      } else {
        toast.error(loginData.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back
        </h3>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input type="username"
              placeholder="Enter Your Email"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input type="password"
              placeholder="Password Here"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?
            <Link to='/register' className='text-primaryColor font-medium ml-1'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login