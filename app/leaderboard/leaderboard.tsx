import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {sort} from "next/dist/build/webpack/loaders/css-loader/src/utils";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
// @ts-ignore
import { Database } from '../database.types'

interface RunData {
    name: string;
    runType: string;
    timing: string;
}

export default async function Leaderboard() {
    const supabase = createServerComponentClient<Database>({ cookies })

    let { data: runs, error } = await supabase
        .from('runs')
        .select('*')

    console.log(runs)
    console.log("Testing")

    return (
        <Table>
            <TableCaption>Recent JobRuns</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Run Type</TableHead>
                    <TableHead className="text-right">Run Timing</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {runs?.map((item, index) => (
                    <TableRow
                        className={
                            index === 0 ? 'bg-orange-200' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-700' : ''
                        }
                    >
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.runType}</TableCell>
                        <TableCell className="text-right">{item.timing}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
