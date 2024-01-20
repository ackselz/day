import Leaderboard from "@/app/leaderboard/leaderboard";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import React from "react";


export default function LeaderboardPage() {
    return (
        <div className="p-6 gap-5 flex flex-col">
            <Navbar pathname={"leaderboard"}/>
            <div className="bg-green-500 w-full h-56 flex relative">
                <Image
                    src={"/corporate1.jpg"}
                    alt={"Corporate Royalty Free Photo (Random)"}
                    width={2000}
                    height={300}
                    className="object-cover"
                />
            </div>
            <a className="m-3 text-4xl font-semibold tracking-tight">
                Leaderboard
            </a>
            <Leaderboard/>
        </div>
    )
}
