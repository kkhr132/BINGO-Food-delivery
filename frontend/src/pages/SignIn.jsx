import React from 'react'
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { serverUrl } from '../App';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase'
function SignIn(){
    const primaryColor = "#ff4d2d";
    const hoverColor = "#e64323";
    const bgColor = "#fff9f6";
    const borderColor = "#ddd";
    const[showPassword,setShowPassword]=useState(false)
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[err,setErr]=useState("")
    const handleSignIn=async () => {
        try{
            const result=await axios.post(`${serverUrl}/api/auth/signin`,{
                email,password
            },{withCredentials:true})
            console.log(result)
            setErr("")
        } catch (error){
            setErr(error?.response?.data?.message)
        }
    }
    const handleGoogleAuth=async()=>{
        const provider=new GoogleAuthProvider()
        const result=await signInWithPopup(auth,provider)
    try {
        const {data}=await axios.post(`${serverUrl}/api/auth/google-auth`,{
            email:result.user.email,
        },{withCredentials:true})
        console.log(data)
    }   catch (error) {
            console.log(error)
    }
}
    return (
        <div className='min-h-screen w-full flex items-centre justify-centre p-4' style={{backgroundColor:bgColor}}>
            <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px] border-${borderColor}`} style={{
                border:`1px solid ${borderColor}`
            }}>
                <h1 className={'text-3x1 font-bold mb-2 '}style={{color:primaryColor}}>BINGO</h1>
                <p className='text-gray-600 mb-8'> Sign In to your account to get started with delicious food deliveries 
                </p>

                {/* email */}
                
                <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 font-medium mb-1'> email </label>
                    <input type="email" className='w-full border rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter your Email' style={{border:`1px solid ${borderColor}`}} onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                </div>

                {/* password */}
                
                 <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700 font-medium mb-1'> Password </label>
                    <div className='relative'>
                    <input type={showPassword?"text":"password"} className='w-full border rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter your Password' style={{border:`1px solid ${borderColor}`}} onChange={(e)=>setPassword(e.target.value)} value={password} required/>
                    <button className='absolute right-3 cursor-pointer top-[14px] text-gray-500' onClick={()=>setShowPassword(prev=>!prev)}> {showPassword?<FaRegEye />:<FaRegEyeSlash />}</button>
                    </div>
                </div>
                <div className='text-right mb-4 curser-pointer text-[#ff4d2d] font-medium' onClick={()=>navigate("/forgot-password")}>
                    Forget Password
                </div>


            <button className='w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer' onClick={handleSignIn}> 
                Sign In
            </button>
            {err && <p className='text-red-500 text-centre my[10px]'>*{err}</p>}

            <button className='w-full mt-4 flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition cursor-pointer duration-200 border-gray-400 hover:bg-gray-100' onClick={handleGoogleAuth}>
<FcGoogle size={20}/>
<span> Sign in with Google</span>
            </button>
            <p className='text-centre mt-6 curser-pointer' onClick={()=>navigate("/signin")}> Want to create new account <span className='text-[#ff4d2d]'>Sign In </span></p>
            </div>

        </div>

    )
}

export default SignIn