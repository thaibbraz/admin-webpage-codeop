import {React, useState} from "react";
import CodeOp_logo from '../CodeOp_logo_blue.jpg';
// import { useAuth } from "../AuthContext"
import {useNavigate } from 'react-router-dom'

function Login(props) {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
   
    async function handleSubmit(e) {
      e.preventDefault()  
      try {
        setError("")
        setLoading(true)
        props.login(username, password)

      } catch {
        setError("Failed to log in")
      }  
      setLoading(false)
    }

   
  return (
    <>

        <div className="min-h-full flex items-center justify-center m-40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div>
          <img src={CodeOp_logo} alt="CodeOp logo" className="mx-auto h-12 w-auto" />
        
            {/* <h2 className="mb-6 text-3xl font-semibold text-center">Login</h2> */}
          
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <input type="hidden" name="remember" defaultValue="true" />
            

            
            <div className="rounded-md shadow-sm -space-y-px">
                
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                    onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm px-2">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                   Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-blue-600 hover:bg-blue-700
                focus:outline-none focus:ring-2 focus:blue-offset-2
                focus:ring-blue-500"
                
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true" /> */}
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;