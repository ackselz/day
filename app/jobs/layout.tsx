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
    const [signup, setSignup] = useState(false)
    const [personalInfo, setPersonalInfo] = useState(false)
    const [exp, setExp] = useState(false)
    const [questions, setQuestions] = useState(false)
    const [voluntary, setVoluntary] = useState(false)
    const [review, setReview] = useState(false)

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
            <Timer
                signup={false}
                personalInfo={false}
                exp={false}
                questions={false}
                voluntary={false}
                review={false}
                time={time}
                start={start}
                setTime={setTime}
                setStart={setStart}
                setSignup={setSignup}
                setPersonalInfo={setPersonalInfo}
                setExp={setExp}
                setQuestions={setQuestions}
                setVoluntary={setVoluntary}
                setReview={setReview}
            />
        </main>
    );
}
