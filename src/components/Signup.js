import React, { useState } from 'react'
import bg from '../assets/bgfinal.svg'
import logo from '../assets/Logo.svg'
import google from '../assets/google.svg'
import github from '../assets/github.svg'
import signup from '../assets/signup.svg'

const SignUp = () => {

    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [records, setRecords] = useState([]);

    const InputHandler=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name]: value,
        })
    }

    const SubmitHandler=(e)=>{
        e.preventDefault();
        const newRecord = {...input, id: new Date().getTime().toString()}
        console.log(records);
        setRecords({...records, newRecord})
        console.log(records);
        setInput({
            username: "",
            email: "",
            password: "",
        })
    }

  return (
    <>
    <form onSubmit={SubmitHandler}>
    <div className="min-h-screen bg-hero text-gray-900 flex justify-center">
    <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
          <img src={logo} className="w-32 mx-auto" alt=''/>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold">
            Sign Up with dj init.ai
          </h1>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center">
              <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#D4D9F6] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                <div class="bg-white p-2 rounded-full">
                  <img class='w-4' src={google} alt=''/>
                </div>
                <span class="ml-4">
                  Sign Up with Google
                </span>
              </button>

              <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#D4D9F6] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                <div class="bg-white p-1 rounded-full">
                  <img class='w-6' src={github} alt=''/>
                </div>
                <span class="ml-4">
                  Sign Up with GitHub
                </span>
              </button>
            </div>

            <div class="my-12 border-b text-center">
              <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign up with e-mail
              </div>
            </div>

            <div class="mx-auto max-w-xs">
              <input name="username" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Username" value={input.username} onChange={InputHandler} required/>
              <input name="email" class="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="email" placeholder="Email" value={input.email} onChange={InputHandler} reaquired/>
              <input name="password" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Set Password" value={input.password} onChange={InputHandler} required/>
              <button class="mt-5 tracking-wide font-semibold bg-[#233FF2] text-gray-100 w-full py-4 rounded-lg hover:bg-[#1D33AA] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <img className='fill-white w-6 h-6' src={signup} alt=''/>
                <span class="ml-3">
                  Sign Up
                </span>
              </button>
              <input className='inline-flex' type='checkbox'/>
              <label class="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by DJ INIT.AI's <a href="/" class="border-b border-gray-500 border-dotted">Terms of Service</a> and its <a href="/" class="border-b border-gray-500 border-dotted">Privacy Policy</a>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-[#D4D9F6] text-center hidden lg:flex">
        <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat align-middle items-center">
            <img src={bg} alt=""/>
        </div>
      </div>
    </div>
  </div>
  </form>
  </>
  )
}

export default SignUp
