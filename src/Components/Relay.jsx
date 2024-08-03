import React, { useEffect, useState } from 'react'

const Relay = ({ text, gif, desc, i }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(false)
    }, [i])

    return (
        <div className='flex flex-col gap-8 place-items-center ' >
            <p className='text-pink-400 text-3xl uppercase' >

                {text}
            </p>

            {!show && <button className='px-3 py-2 border-2 border-pink-800 text-pink-500 active:bg-pink-50 rounded text-2xl' onClick={() => { setShow(true) }} >
                Click to Reveal
            </button>}

            {show &&
                <>
                    <img loading='lazy' className='w-[30rem] h-[30rem] p-2 rounded-2xl border-2 border-pink-600 ' src={`${gif}.gif`} />
                    {desc?.length > 0 && <div className='p-5 bg-pink-50 '>
                        <p className='text-pink-500 uppercase text-lg ' >
                            {desc}
                        </p>

                    </div>}
                </>}

        </div>
    )
}

export default Relay