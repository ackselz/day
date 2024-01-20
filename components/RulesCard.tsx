import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function RulesCard() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Before you begin...
                    </CardTitle>
                    <CardDescription>
                        Some pointers and rules to take note of:
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>Please use the information on the given resume!</li>
                        <li>Please do not input personal information.</li>
                        <li>Time will start once you press GO.</li>
                    </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">
                        Download resume here
                    </Button>
                    <Button asChild className="bg-green-500">
                        <Link href={"/jobs"}>
                            GO
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
