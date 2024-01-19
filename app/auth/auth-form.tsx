'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// @ts-ignore
import { Database } from './database.types'
import Logo from "@/components/Logo";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function AuthForm() {
    const supabase = createClientComponentClient<Database>()

    return (
        <div className="grid grid-cols-2 h-screen w-full p-6 gap-3">
            <div className="bg-white flex flex-col justify-center place-items-center border-2 rounded-2xl">
                <Logo/>
                <a>Because practice makes perfect.</a>
            </div>
            <div className="flex justify-center place-items-center">
                <Card className="p-6 justify-start flex flex-col w-full mx-10">
                    <CardHeader className="text-start px-0">
                        <CardTitle >
                            Login / Sign up
                        </CardTitle>
                        <CardDescription>
                            Just for clarity's sake, this one's real.
                        </CardDescription>
                    </CardHeader>
                    <Auth
                        supabaseClient={supabase}
                        view="magic_link"
                        appearance={{ theme: ThemeSupa }}
                        theme="light"
                        showLinks={true}
                        providers={[]}
                        redirectTo="http://localhost:3000/auth/callback"
                    />
                </Card>
            </div>
        </div>
    )
}
