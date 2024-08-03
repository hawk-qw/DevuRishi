import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [choice, setChoice] = useState(0);
    const [value, setValue] = useState(0);
    const [Loves, setLoves] = useState(0);
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
        <div className=' font-ganja  flex flex-row   justify-center  place-items-center   w-[100vw] h-[100vh] ' >
            {choice == 0 &&
                <div className=' text-pink-400 place-items-center  flex flex-col  '>
                    <div className='flex flex-row ' >
                        <p className='text-9xl '>

                            Hii Devuuuu!!!
                        </p>
                        <img className='w-[15rem] h-[15rem] rounded-full ' src='Hi.gif' />

                    </div>
                    <button className='p-7 border-2 text-3xl  rounded-lg bg-pink-200 text-pink-400' onClick={() => setChoice(1)} >
                        <p className=' animate-bounce ' >
                            Click here to Continue 👋

                        </p>
                    </button>
                </div>
            }
            {choice == 1 && <div className=' text-pink-400 place-items-center  flex flex-col  '>
                <div className='flex flex-row place-items-center ' >
                    <p className='text-4xl '>

                        A small effort to make ur mood good hehe
                    </p>
                    <img className='w-[10rem] h-[10rem] p-2 rounded-xl ' src='picoozi-cute-cat.gif' />

                </div>
                <button className='p-7 border-2 text-3xl  rounded-lg bg-pink-200 text-pink-400' onClick={() => setChoice(2)}>
                    <p className=' animate-bounce ' >
                        Click here to Continue 👋

                    </p>
                </button>
            </div>}
            {choice == 2 && <div className=' text-pink-400 place-items-center  flex flex-col  '>
                <div className='flex flex-row place-items-center ' >
                    <p className='text-4xl '>

                        How's ur mood right now
                    </p>
                    <img className='w-[10rem] h-[10rem] p-2 rounded-xl ' src='picoozi-cute-cat.gif' />

                </div>
                <div className='flex flex-row gap-8'>
                    <button className='p-4 border-2 text-3xl  rounded-lg bg-pink-200 text-pink-400' onClick={() => setChoice(3)}>
                        <p className=' hover:animate-bounce ' >
                            Happy
                        </p>
                    </button>
                    <button className=' cursor-not-allowed p-4 border-2 text-3xl  rounded-lg bg-pink-200 text-pink-400' onClick={() => setChoice(2)}>
                        <p className='   ' >
                            Chid Chid wala
                        </p>
                    </button>

                </div>
                <p className='text-red-500' >
                    ps: Chid Chid mood is now allowed, kyunki I hope thode der baad happy ho
                </p>
            </div>}
            {choice == 3 && <div className=' text-pink-400 place-items-center  flex flex-col  '>
                <div className='flex flex-row place-items-center ' >
                    <p className='text-4xl '>

                        Can u guess how much ur Boyfriend Loves you??
                    </p>
                    <img className='w-[10rem] h-[10rem] p-2 rounded-xl ' src='tkthao219-bubududu.gif' />

                </div>
                <div className='relative' >
                    <p className='absolute text-3xl right-4 top-[50%] -translate-y-[50%] ' >
                        %
                    </p>
                    <input type='number' value={Loves} className='outline-none px-1 border-2 text-3xl border-pink-400 rounded-lg w-[30rem] py-2 ' onChange={(e) => setLoves(e.target.value)} />
                </div>
                <div className='flex flex-row gap-8'>
                    <div className="App1">
                        {/* <div className="slider-container">
                            <div id="slider" className="slider" style={{ width: `${(value / 1000000) * 100}%` }}></div>
                        </div> */}
                        {loading ? <Circles
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        /> : !verified && <button className='text-ganja text-xl border-2 border-pink-500 px-4 rounded-xl py-2' onClick={() => setLoading(true)}>Check the answer</button>}
                        {verified && <>
                            <p className='text-pink-400 font-bold text-4xl uppercase p-1 bg-pink-50  ' >
                                💕💕💕💕 The Amount of love he has in ur heart for u cannot be measured heheheheeh !!!! 💕💕💕💕💕</p>
                            <button className=' mt-5 active:bg-green-100 text-green-600 px-3 py-2 rounded-xl border-2 border-green-500 outline-none ' onClick={() => navigate("/moments")} >
                                Click to Proceed
                            </button>
                        </>}

                    </div>


                </div>

            </div>}
        </div >
    )
}

export default Home