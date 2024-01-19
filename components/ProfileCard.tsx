'use client'
import { useCallback, useEffect, useState } from 'react'
// noinspection TypeScriptCheckImport
// @ts-ignore
import { Database } from '../database.types'
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Avatar from "@/app/account/avatar";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



export default function ProfileCard({ user }: { user: User | null }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            const { data, error, status } = await supabase
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

            const { error } = await supabase.from('profiles').upsert({
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

    return (
        <Card className="drop-shadow-sm flex flex-col gap-2 h-full">
            <CardHeader>
                <CardTitle>
                    Candidate Profile
                </CardTitle>
                <Avatar
                    // @ts-ignore
                    uid={user.id}
                    url={avatar_url}
                    size={150}
                    onUpload={(url) => {
                        setAvatarUrl(url)
                        updateProfile({ fullname, username, website, avatar_url: url })
                    }}
                />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <div>
                    <label htmlFor="email">Email</label>
                    <Input placeholder="email" type="email" value={user?.email} disabled />
                </div>
                <div>
                    <a>Name</a>
                    <Input
                        id="fullName"
                        type="text"
                        value={fullname || ''}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>
                <div>
                    <a>Username</a>
                    <Input
                        id="username"
                        type="text"
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <a>Website</a>
                    <Input
                        id="website"
                        type="url"
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>

                <div className="flex flex-row gap-3 mt-2 justify-between">
                    <Button
                        variant="outline"
                        onClick={() => updateProfile({ fullname, username, website, avatar_url })}
                        disabled={loading}
                    >
                        {loading ? 'Loading ...' : 'Update'}
                    </Button>
                    <form action="/auth/signout" method="post">
                        <Button type="submit">
                            Log out
                        </Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    )
}
