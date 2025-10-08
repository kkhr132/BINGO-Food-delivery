import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
function ForgotPassword() {
    const [step, setStep] = useState(1)
    const [email,setEmail]=useState("")
    const[otp,setOtp]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [ConfirmPassword,setConfirmPassword]=useState("")
    const [err,setErr]=useState("")
    const navigate=useNavigate()

    const handleSendOtp=async () => {
        try {
            const result=await axios.post('${serverUrl'/api/auth/send-otp ,{email},{withCredential:true})
            console.log(result)
            setErr("")
            setStep(2)
        } catch (error) {
            setErr(error.response.data.message)
        }
    }
    const handleVerifyOtp=async () => {
        try {
            const result=await axios.post('${serverUrl'/api/auth/verify-otp ,{newPassword},{withCredential:true})
            console.log(result)
            navigate("/signin")
            setErr("")
            setStep(3)
        } catch (error) {
            setErr(error?.response?.data?.message)
        }
    }
    const handleResetPassword=async () => {
        if(newPassword!=ConfirmPassword){
            return null
        }
        try {
            const result=await axios.post('${serverUrl'/api/auth/reset-password ,{email,newPassword},{withCredential:true})
            setErr("")
            console.log(result)
            navigate("/signIn")
        } catch (error) {
            setErr(error?.response?.data?.message)
        }
    }
    return (
        <div className='flex w-full item-centre justify-centre min-h-screen p-4 bg:[#fff9f6]'>
            <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8'>
                <div className='flex item-centre gap-4 mb-4'>
                    <IoIosArrowRoundBack size={30} className='text-[#ff4d2d] curser-pointer' onClick={()=>navigate("/signin")}/>
                    <h1 className='text-2x1 font-bold text-centre text-[#ff4d2d]'> Forgot Password </h1>
                </div>
                {step == 1
                    &&
                    <div>
<div className='mb-6'>
                            <label htmlFor="email" className='block text-gray-700 font-medium mb-1'> Email </label>
                            <input type="email" className='w-full border-[1px] border-gray -200 rounded-lg px-3 py-2 focus:outline-none' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} value={Email} required/>
                        </div>
                        <button className={'w-full mt-4 flex items-centre justify-centre gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] curser-pointer'} onClick={handleSendOtp}> 
                            Send Otp
                        </button>
                        {err && <p className='text-red-500 text-centre my[10px]'>*{err}</p>}
                    </div>}
                    {step == 2
                    &&
                    <div>
<div className='mb-6'>
                            <label htmlFor="email" className='block text-gray-700 font-medium mb-1'> OTP </label>
                            <input type="email" className='w-full border-[1px] border-gray -200 rounded-lg px-3 py-2 focus:outline-none' placeholder='Enter OTP' onChange={(e) => setOtp(e.target.value)} value={Otp} required/>
                        </div>
                        <button className={'w-full mt-4 flex items-centre justify-centre gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] curser-pointer'} onClick={handleVerifyOtp}> 
                            Verify Otp
                        </button>
                        {err && <p className='text-red-500 text-centre my[10px]'>*{err}</p>}
                    </div>}
                    {step == 3
                    &&
                    <div>
<div className='mb-6'>
                            <label htmlFor="newPassword" className='block text-gray-700 font-medium mb-1'> New Password </label>
                            <input type="email" className='w-full border-[1px] border-gray -200 rounded-lg px-3 py-2 focus:outline-none' placeholder='Enter New Password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="ConformPassword" className='block text-gray-700 font-medium mb-1'> Confirm  Password </label>
                            <input type="email" className='w-full border-[1px] border-gray -200 rounded-lg px-3 py-2 focus:outline-none' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} value={ConfirmPassword} required/>
                        </div>
                        <button className={'w-full mt-4 flex items-centre justify-centre gap-2 border rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] curser-pointer'} onClick={handleResetPassword}> 
                            Reset Password
                        </button>
                        {err && <p className='text-red-500 text-centre my[10px]'>*{err}</p>}
                    </div>}
            </div>
        </div>
    )
}


 export default ForgotPassword