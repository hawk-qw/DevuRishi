import React, { useEffect, useState } from 'react'
import { successToast } from '../tostify'
import Webcam from "react-webcam";
import { Audio } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";

const Login2 = () => {
    const [show, setShow] = useState(true);
    const WebcamComponent = () => <Webcam />;
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {

            const timer = setTimeout(() => {
                setLoading(false)
                setVerified(true)
            }, 5000); // 5 seconds

            return () => clearTimeout(timer);
        } else {
            return
        }
    }, [loading])

    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center place-items-center' >
            <div className='flex flex-col gap-8 border-2 rounded-xl p-4 border-pink-400 bg-pink-100'>
                <p className='text-2xl text-red-500 ' >
                    This is intended So Couples So BoyF login is also required!!
                </p>
                {show && <>
                    <p className='text-2xl text-pink-600'>
                        Confirm ur BoyF availablity???

                    </p>
                    <button className='px-3 py-2 active:bg-green-100 border-2 border-green-500 text-green-500' onClick={() => {
                        successToast("He is available virtually not physically")
                    }} >
                        Yes
                    </button>
                    <button className='px-3 py-2 active:bg-red-100 border-2 border-red-500 text-red-500' onClick={() => { setShow(false) }} >
                        No
                    </button>
                </>}
                {
                    !show && <div className='flex flex-col gap-6 ' >
                        <p className='text-xl' >
                            To Login, Put the most precious person to Rishi in front of the Camera!!!!
                        </p>


                        {loading ? <div className={"self-center"}>
                            <Audio />
                        </div> : <>{!verified && <div className='border-2 border-pink-400  rounded'>
                            <Webcam />
                        </div>}</>}
                        {verified ? <div className='flex flex-col place-items-center gap-6' >
                            <p className='text-4xl text-pink-400 ' >
                                Verified !!!! ✅ ✅
                            </p>
                            <button className='active:bg-green-100 text-green-600 px-3 py-2 rounded-xl border-2 border-green-500 outline-none ' onClick={() => navigate("/home")} >
                                Click to Proceed
                            </button>
                        </div> : <button className='bg-green-100 text-green-800 border-2 border-green-900 px-4 py-2 self-center' onClick={() => setLoading(true)} >
                            Click to verify
                        </button>
                        }
                    </div>
                }


            </div>

        </div>
    )
}

export default Login2