import React, {useState, useEffect} from 'react'
import {Separator} from "@/components/ui/separator";

interface ChildProps {
    div1Active: boolean;
    div2Active: boolean;
    div3Active: boolean;
    div4Active: boolean;
    div5Active: boolean;
    div6Active: boolean;
}

interface SectionProps {
    title: string;
    active: boolean;
    splitTime: number;
}

const Section: React.FC<SectionProps> = ({ title, active, splitTime }) => {
    return (
        <div className={`my-2 ${active ? 'active' : 'hidden'}`}>
            <div className="flex flex-row justify-between">
                <p className="text-white mb-2">{title}</p>
                <h1 className="font-semibold text-lg text-yellow-500">
                    <span>{("0" + Math.floor((splitTime / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((splitTime / 1000) % 60)).slice(-2)}:</span>
                    <span className="text-sm">{("0" + (splitTime / 10) % 60).slice(-2)}</span>
                </h1>
            </div>
            <Separator className="bg-gray-400" />
        </div>
    );
};


const Timer: React.FC<ChildProps> = ({
                                      div1Active, div2Active, div3Active, div4Active, div5Active, div6Active,
                                                  }) => {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(true)
    const [splitTime, setSplitTime] = useState<number>(0);

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

    const handleSplit = () => {
        setSplitTime(time);
    };

    return (
        <div className="fixed left top-1/2 transform -translate-y-1/2 pb-0 m-5 w-60 h-20">
            <div className="rounded bg-black flex flex-wrap flex-col p-2 bg-opacity-90 border-gray-300 border-2">
                <Section title="Sign Up" active={div1Active} splitTime={splitTime} />
                <Section title="Personal Info" active={div2Active} splitTime={splitTime} />
                <Section title="Work Exp." active={div3Active} splitTime={splitTime} />
                <Section title="Application Q." active={div4Active} splitTime={splitTime} />
                <Section title="Disclosures" active={div5Active} splitTime={splitTime} />
                <Section title="Review & Submit" active={div6Active} splitTime={splitTime} />
                <h1 className="font-semibold text-4xl text-green-500">
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span className="text-xl">{("0" + (time / 10) % 60).slice(-2)}</span>
                </h1>
                <div className="flex flex-row gap-5 text-white">
                    <button onClick={() => setStart(true)}>Start</button>
                    <button onClick={() => setStart(false)}>Stop</button>
                    <button onClick={handleSplit}>Split</button>
                    <button onClick={() => {
                        setTime(0);
                        setStart(false);
                    }}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default Timer;
