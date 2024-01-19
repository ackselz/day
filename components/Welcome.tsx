import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Welcome() {
    return (
        <Card className="h-full space-between flex flex-col">
            <CardHeader>
                <CardTitle>
                    Welcome
                </CardTitle>
                <CardDescription>
                    We are excited that you are interested in practicing your job applications! Remember, a jobrun a day keeps the long job applications hours away.
                </CardDescription>
            </CardHeader>
            <div className="overflow-hidden mb-5 h-full p-6 flex justify-center">
                <Image className="object-fill rounded-lg" src={"/corporate1.jpg"} alt={"corporate"} width={600} height={300}/>
            </div>
            <CardContent>

                <CardDescription>We at Day believe that practice makes perfect. The perfect run may not land you the perfect job, but it sure as hell makes you feel good.</CardDescription>
            </CardContent>
            <Button className="mx-5 mb-5" variant="outline">Quick Run</Button>
        </Card>
    )
}
