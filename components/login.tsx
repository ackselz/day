"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
});

const login = () => {
    const [error, setError] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { username: "", password: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setError(true);
    }

    function onInvalid(errors: any) {
        console.log(errors);
    }

    return (
        <div className="min-h-screen w-screen grid place-items-center">
            <div className="grid gap-4 justify-items-center">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Sign In</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(
                                    onSubmit,
                                    onInvalid
                                )}
                                className="space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Sign In</Button>
                            </form>
                        </Form>
                        {error && (
                            <p className="text-destructive text-sm">
                                Account not found. Please create an account.
                            </p>
                        )}
                    </CardContent>
                </Card>
                <p>
                    Don't have an account yet?&nbsp;
                    <Link href={"/jobs/register"} className="underline">
                        Create Account
                    </Link>
                </p>
                <Link
                    href={""}
                    className="underline"
                    onClick={() =>
                        toast.warning("Silly goose 🪿", {
                            description:
                                "Do you expect us to remember your password?",
                        })
                    }
                >
                    Forgot your password?
                </Link>
            </div>
        </div>
    );
};

export default login;