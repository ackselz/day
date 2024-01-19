import Navbar from "@/components/Navbar";
import React from "react";
import { useToast } from "@/components/ui/use-toast"
import MyTimer from "@/components/Timer";

export default function RunPage() {
    const seconds = 0
    const timeStamp = new Date(Date.now() + seconds * 1000)

    return (
        <div className="p-6 gap-5 flex flex-col">
            <Navbar pathname={"run"}/>
            <div className="absolute right-0 bottom-0 pb-0 m-5 w-60 h-20">
                <MyTimer/>
            </div>
        </div>
    )
}
