import React, {useState, useEffect} from 'react'
import {Button} from "@/components/ui/button";
import {User} from "@supabase/auth-helpers-nextjs";

export default function Timer() {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(true)

    useEffect(() => {
        let interval: any = null;

        if(start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval)
    }, [start])

    return (
        <div className="fixed left-0 bottom-0 pb-0 m-5 w-60 h-20">
            <div className="rounded bg-black flex flex-wrap flex-col p-2 bg-opacity-90 border-gray-300 border-2">
                <h1 className="font-semibold text-4xl text-green-500">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span className="text-xl">{("0" + (time / 10) % 60).slice(-2)}</span>
                </h1>
                <div className="flex flex-row gap-5 text-white">
                    <button onClick={() => setStart(true)}>Start</button>
                    <button onClick={() => setStart(false)}>Stop</button>
                    <button onClick={() => {
                        setTime(0);
                        setStart(false);
                    }}>Reset</button>
                </div>
            </div>
        </div>
    )
}
