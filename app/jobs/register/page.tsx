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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z
    .object({
        username: z.string().min(1),
        password: z.string().min(4),
        confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
        message: "Passwords don't match",
        path: ["confirm"],
    });

const page = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { username: "", password: "", confirm: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const promise = () =>
            new Promise((resolve) => setTimeout(() => resolve(null), 2000));
        toast.promise(promise, {
            loading: "Creating your account...",
            success: () => {
                router.push("/jobs/sample");
                return "Your account has been created successfully";
            },
            error: "An error has occured",
        });
    }

    function onInvalid(errors: any) {
        console.log(errors);
    }

    return (
        <div className="min-h-screen w-screen grid place-items-center">
            <div className="grid gap-4 justify-items-center">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                                <FormField
                                    control={form.control}
                                    name="confirm"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Confirm Password
                                            </FormLabel>
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
                                <Button type="submit">Sign Up</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
                <p>
                    Already have an account?&nbsp;
                    <Link href={"/jobs/login"} className="underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default page;
