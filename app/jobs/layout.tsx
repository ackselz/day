"use client"
import Timer from "@/components/Timer";
import React, {useState, useEffect} from 'react'
import AbandonButton from "@/components/AbandonButton";
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

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
        <main className="min-h-screen flex flex-col">
            <AbandonButton/>
            {children}
            <Timer div1Active={false} div2Active={false} div3Active={false} div4Active={false} div5Active={false} div6Active={false}/>
        </main>
    );
}
