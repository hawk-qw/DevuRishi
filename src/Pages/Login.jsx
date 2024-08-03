import React, { useState } from 'react'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { errorToast } from '../tostify';

const Login = () => {
    const [name, setName] = useState("")
    const [Password, setPassword] = useState("");
    const [showP, setShowP] = useState(false);
    const [tries, setTries] = useState(0);

    const navigate = useNavigate();
    const submit = () => {

        if (Password.toLowerCase() != "devu ki sundar kanya") {
            if (Password.toLowerCase() == "sundar kanya") {
                errorToast("Password Incorrect")
                setTries(tries + 4)
            } else {
                errorToast("Password Incorrect")
                setTries(tries + 1)
            }
        } else {
            navigate('/DevuRishi/login')
        }
        console.log(tries)
    }

    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center place-items-center   '  >

            <div className='w-[70rem] rounded-xl h-[35rem]  border-2 border-pink-500 p-4 bg-pink-100 flex flex-col gap-8 ' >
                <p className='text-7xl text-pink-400 text-center mt-4 mb-10'>
                    LOGIN
                </p>

                <input className='border-2 border-pink-500 p-2 rounded-xl w-full text-4xl' placeholder='Enter Name' />
                <div className='flex flex-row relative '>
                    <input type={!showP ? "password" : "text"} onChange={(e) => setPassword(e.target.value)} className='border-2 border-pink-500 p-2 rounded-xl w-full text-4xl' placeholder='Enter Password' />
                    <button className='absolute right-5 top-[50%] -translate-y-[50%]  text-xl ' onClick={() => setShowP(!showP)} >
                        {
                            !showP ? <FaRegEye />
                                : <FaRegEyeSlash />


                        }
                    </button>
                </div>

                <button className=' active:bg-pink-200 self-center px-5 py-2 border-2 rounded text-2xl text-pink-500 bg-white w-fit border-pink-600' onClick={() => submit()} >
                    Submit and Login
                </button>

                {
                    tries >= 3 && Password.toLowerCase() != "sundar kanya" && <p className=' text-xl   border-green-600 px-5 py-2 text-green-400 bg-white rounded-xl self-center'>
                        Hint:  What u call me!!
                    </p>
                }
                {
                    tries >= 5 && Password.toLowerCase() == "sundar kanya" && <p className=' text-xl   border-green-600 px-5 py-2 text-green-400 bg-white rounded-xl self-center'>
                        Hint:  KISKI??
                    </p>
                }
            </div>

        </div>
    )
}

export default Login