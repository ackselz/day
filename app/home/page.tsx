import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
// @ts-ignore
import { Database } from '../database.types'
import AccountButton from "@/components/AccountButton";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Welcome from "@/components/Welcome";

export default async function Home() {

    const supabase = createServerComponentClient<Database>({ cookies })

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
        <div className="flex flex-col gap-4 p-6 h-full">
            <div className="items-start flex flex-row">
                <Navbar pathname={"home"}/>
            </div>
            <div className="flex flex-grow">
                <div className="grid grid-cols-7 gap-4">
                    <div className="col-span-3 h-full">
                        <ProfileCard user={user}/>
                    </div>
                    <div className="col-span-4 h-full">
                        <Welcome/>
                    </div>
                </div>
            </div>
        </div>

    );
}
