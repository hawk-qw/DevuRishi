import React, { useState } from 'react'
import Relay from '../Components/Relay'
import { useNavigate } from "react-router-dom";

const Moments = () => {
    const navigate = useNavigate();
    const arr = [{
        "text": "When I first saw u and and my reaction whenever ur snap comes ",
        "gif": "love-struck-swoon",
        "desc": "YOU ARE THE MOST BEAUTIFUL GIRL EVER AND WILL BE FOR HIS ENTIRE LIFE TIME"
    },
    {
        "text": "When u say I LOVE YOU my ears: ",
        "gif": "heavenly",
        "desc": "The elixir to my ears"
    },
    {
        "text": "When u came to my life, my life :",
        "gif": "summertime",
        "desc": "It was a barren land, u made a garden out of it"
    }, {
        "text": "Me when I am with You",
        "gif": "illus-cute",
        "desc": "I am whatever I can be with you, I feel so happy re"
    },
    {
        "text": "when u tell me gossip",
        "gif": "excercise-cat"

    }, {
        "text": "when u wear Kurti me: ",
        "gif": "mochi-peach"
    }, {
        "text": "One of the things that I want to do to you(respectfully)",
        "gif": "sleep",
        "desc": "I want to be by your side always, in ur good and bad"
    }, {
        "text": "Thanks for Existing and Coming to my life",

        "gif": "thank-you-sticker-thanks-sticker",
        "desc": "you are the best thing that ever happened to me"
    }, {
        "text": "Too many feelings incoming, overload system overload",
        "gif": "malware-virus",
        "desc": "I need a proper 100000000 pages book to describe every moment that made me feel loved by you, even the system is not working"
    }
    ]
    const [i, setI] = useState(0);
    const [show, setShow] = useState(false)
    return (
        <div className='w-[100vw] mt-20 flex flex-col justify-center place-items-center' >
            {!show && <div className='flex flex-col place-items-center gap-10'>
                <p className='text-4xl text-pink-500'>
                    Some moments that describe how u made me feel in this 6 monthsss!!!
                </p>
                <button className='px-3 py-2 border bg-blue-400 rounded ' onClick={() => setShow(true)} >
                    start
                </button>
            </div>
            }
            {show && <>
                {i < 9 && <Relay i={i} text={arr[i].text} gif={arr[i].gif} desc={arr[i]?.desc} />}
                <div className='flex flex-row gap-32 mt-10 ' >
                    {i > 0 && i < 9 && <button className='px-3 py-2 border bg-blue-400 rounded' onClick={() => setI(i - 1)} >
                        Prev
                    </button>}
                    {i < 9 && <button className='px-3 py-2 border bg-blue-400 rounded ' onClick={() => setI(i + 1)} >
                        Next
                    </button>}
                    {
                        i >= 9 && <button className=' mt-5 active:bg-green-100 text-green-600 px-3 py-2 rounded-xl border-2 border-green-500 outline-none ' onClick={() => navigate("/DevuRishi/end")} >
                            Click to Proceed
                        </button>
                    }
                </div>
            </>
            }

        </div>
    )
}

export default Moments