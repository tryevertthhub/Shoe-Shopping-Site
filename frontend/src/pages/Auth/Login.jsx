/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useRef ,useEffect } from "react";
import axios, { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from "../../slices/authSlice";
const Login = () => {


  const InputRef1 = useRef('');
  const InputRef2 = useRef('');

  const [errrorMessage, setErrorMessage] = useState("");
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.data.token)
      navigate('/');
    }
  }, [navigate, userInfo]);



  const handleSubmit = async (event) => {
    console.log(InputRef1.current.value)
    console.log(InputRef2.current.value)
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await axios.post( "/api/v1/user/signin", form);
      console.log(res)
      if(res.data.token){
        dispatch(setCredentials({ ...res }));
        navigate('/');
      }
      else {
        
      }
     
    } catch (err) {
      // toast.error(err?.data?.message || err.error);
    }
  };


  return (
    <div class=" flex justify-center items-center h-screen">
      <div class="w-[50%] h-screen hidden lg:block mt-10">
        <img
          src="https://cdn.snkrdunk.com/uploads/media/20220710043635-0.jpeg?size=l"
          alt="Placeholder Image"
          className="object-cover  mx-auto my-auto"
        />
      </div>

      <div class="lg:p-66 md:p-52 sm:20  w-full lg:w-1/2 bg-gray-100 h-full py-60 px-10" >
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label htmlFor="username" class="block text-gray-600">
              Username
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
              ref={InputRef1}
            />
          </div>

          <div class="mb-4">
            <label htmlFor="password" class="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autocomplete="off"
              ref={InputRef2}
            />
          </div>

          <div class="mb-6 text-blue-500">
            <a href="#" class="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
        
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
