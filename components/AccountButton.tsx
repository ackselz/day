'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    LogOut,
} from "lucide-react"
import {createClientComponentClient, User} from '@supabase/auth-helpers-nextjs'
import {SetStateAction, useCallback, useEffect, useState} from "react";
// @ts-ignore
import {Database} from '../database.types'

export default function AccountButton({user}: { user: User | null }) {

    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | undefined>(undefined)

    async function updateProfile({
                                     username,
                                     website,
                                     avatar_url,
                                 }: {
        username: string | null
        fullname: string | null
        website: string | null
        avatar_url: string | null
    }) {
        try {
            setLoading(true)

            const {error} = await supabase.from('profiles').upsert({
                id: user?.id as string,
                full_name: fullname,
                username,
                website,
                avatar_url,
                updated_at: new Date().toISOString(),
            })
            if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            const {data, error, status} = await supabase
                .from('profiles')
                .select(`full_name, username, website, avatar_url`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setFullname(data.full_name)
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    // @ts-ignore
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">View Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Avatar
                            // @ts-ignore
                            uid={user.id}
                            url={avatar_url}
                            size={200}
                            onUpload={(url: string) => {
                                setAvatarUrl(url)
                                updateProfile({ fullname, username, website, avatar_url: url })
                            }}
                        />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>{user?.email}</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>{fullname}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>{website}</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <form action="/auth/signout" method="post">
                        <button className="button block" type="submit">
                            Sign out
                        </button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
