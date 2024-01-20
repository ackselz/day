import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function AbandonButton() {
    return(
        <Button asChild variant="destructive">
            <Link href={"/run"}>
                Abandon Run
            </Link>
        </Button>
        )
}
