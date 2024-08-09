import { useState } from "react";
import { useForm } from "react-hook-form";
import { Head } from '@inertiajs/react'
import { router } from '@inertiajs/react'
import { registerService } from "../../Services/Register";


function Register() {
    const {register , handleSubmit , formState:{errors} } = useForm();
    const [error , setError] = useState(null);

    const onSubmit = async(parameters) => {
        const response = await registerService(parameters.name , parameters.email , parameters.password);
        if(response.status === 200){
          const data = response.data;
          localStorage.setItem('token' , data.accessToken);
          localStorage.setItem('user' , JSON.stringify(data.user));
          router.post('/login' , parameters);
        }
        else{
            setError(response.data.message);
        }
    }
  return (
    <div>
          <Head title="Register" />
           <div className="font-[sans-serif]">
              <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                  <div className="md:max-w-md w-full px-4 py-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-12">
                        <h3 className="text-gray-800 text-3xl font-extrabold">Create an account</h3>
                        <p className="text-sm mt-4 text-gray-800">You already have an account?
                            <a href="/login" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login here</a>
                        </p>
                      </div>

                      <div>
                        <label className="text-gray-800 text-xs block mb-2">Name</label>
                        <div className="relative flex items-center">
                          <input 
                            name="name" 
                            type="text" 
                            {...register("name" , { 
                              required: true ,
                              minLength: 5
                            })}
                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter name" />
                            {errors.name && <span className="text-red-500 text-xs">Please enter a valid name</span>}
                        </div>
                      </div>

                      <div className="mt-8">
                        <label className="text-gray-800 text-xs block mb-2">Email</label>
                        <div className="relative flex items-center">
                          <input 
                            name="email" 
                            type="text" 
                            {...register("email" , { 
                              required: true ,
                              minLength: 5
                            })}
                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
                            {errors.email && <span className="text-red-500 text-xs">Please enter a valid email</span>}
                        </div>
                      </div>

                      <div className="mt-8">
                        <label className="text-gray-800 text-xs block mb-2">Password</label>
                        <div className="relative flex items-center">
                          <input 
                            name="password" 
                            type="password" 
                            {...register("password" , { 
                              required: true ,
                              minLength: 4
                            })}
                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" />
                          {errors.password && <span className="text-red-500 text-xs">Please enter a valid password</span>}
                        </div>
                      </div>

                      <div className="mt-12">
                        <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                          Sign in
                        </button>
                      </div>
                      {error && <p className="text-red-500 text-xs mt-4">{error}</p>}
                    </form>
                  </div>
                  <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
                    <img src="https://i.pinimg.com/564x/16/6e/8a/166e8a2f91e9d21dedea7bd2464b4490.jpg" className="w-full h-full object-contain" alt="login-image" />
                  </div>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Register