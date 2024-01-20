import Navbar from "@/components/Navbar";
import React from "react";
import { useToast } from "@/components/ui/use-toast"
import MyTimer from "@/components/Timer";
import RulesCard from "@/components/RulesCard";

export default function RunPage() {
    const seconds = 0
    const timeStamp = new Date(Date.now() + seconds * 1000)

    return (
        <div className="gap-5 flex flex-col">
            <Navbar pathname={"run"}/>
            <div className="py-20 px-44">
                <RulesCard/>
            </div>
        </div>
    )
}
