"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    return (
        <main className="w-screen min-h-screen grid place-items-center">
            <Card className="max-w-xl">
                <CardHeader className="">
                    <CardTitle>Software Development Engineer Co-Op</CardTitle>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="py-4">
                                <Button className="rounded-full">Apply</Button>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Start Your Application
                                </DialogTitle>
                                <DialogDescription>
                                    Software Development Engineer Co-Op
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                                <Button
                                    className="rounded-full"
                                    onClick={() => router.push("/jobs/sample")}
                                >
                                    Autofill with Resume
                                </Button>
                                <Button
                                    variant={"outline"}
                                    className="rounded-full w-full"
                                    onClick={() => router.push("/jobs/sample")}
                                >
                                    Apply Manually
                                </Button>
                                <Separator />
                                <Button
                                    variant={"outline"}
                                    className="rounded-full"
                                >
                                    Use My Last Application
                                </Button>
                                <Separator />
                                <Button className="rounded-full bg-gray-500">
                                    Apply With LinkedIn
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Culpa, perspiciatis! Quaerat quas in ipsam facilis
                        ipsum! Ad porro quasi tenetur, ducimus accusamus tempora
                        error, omnis numquam eum, illo recusandae asperiores!
                    </CardDescription>
                </CardContent>
            </Card>
        </main>
    );
};

export default page;
