import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function AbandonButton() {
    return(
        <div className="fixed top-0 left-0 m-5">
            <Button asChild variant="destructive">
                <Link href={"/run"}>
                    Abandon Run
                </Link>
            </Button>
        </div>
        )
}
