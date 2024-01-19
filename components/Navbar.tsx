import AccountButton from "@/components/AccountButton";
import {createServerComponentClient, User} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
// @ts-ignore
import { Database } from '../database.types'
import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import {Button} from "@/components/ui/button";

export default async function Navbar({ pathname }: { pathname: string | null }) {
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
        <div className="flex flex-row w-full h-32 bg-white drop-shadow-md place-items-center p-3 pl-5 justify-between border-t-8 border-orange-300">
            <Logo/>
            <div className="flex flex-row gap-6 place-items-center">
                <div className="h-full">
                    <Button variant="outline" asChild className={`rounded-none border-0 ${pathname === "home" ? "border-b-2 border-orange-300" : "border-b-2 border-transparent"}`}>
                        <Link href={"/home"}>Home</Link>
                    </Button>
                </div>
                <div className="h-full">
                    <Button variant="outline" asChild className={`rounded-none border-0 ${pathname === "run" ? "border-b-2 border-orange-300" : "border-b-2 border-transparent"}`}>
                        <Link href={"/run"}>Run</Link>
                    </Button>
                </div>
                <div className="h-full">
                    <Button variant="outline" asChild className={`rounded-none border-0 ${pathname === "leaderboard" ? "border-b-2 border-orange-300" : "border-b-2 border-transparent"}`}>
                        <Link href={"/leaderboard"}>Leaderboards</Link>
                    </Button>
                </div>
                <AccountButton user={user}/>
            </div>
        </div>
    )
}
