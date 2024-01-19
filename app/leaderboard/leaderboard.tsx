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

interface RunData {
    name: string;
    runType: string;
    timing: string;
}

const data: RunData[] = [
    {name: "Jialu", runType: "Blitz", timing:"05:52"},
    { name: "Alicia", runType: "Survival", timing: "05:43" },
    { name: "Benedict", runType: "Rush", timing: "06:08" },
    { name: "Clara", runType: "Quest", timing: "05:21" },
    { name: "David", runType: "Maze", timing: "06:23" },
    { name: "Elena", runType: "Adventure", timing: "05:35" },
    { name: "Frank", runType: "Challenge", timing: "06:15" },
    { name: "Grace", runType: "Arena", timing: "05:47" },
    { name: "Henry", runType: "Race", timing: "06:02" },
    { name: "Ivy", runType: "Journey", timing: "05:56" },
    { name: "Jack", runType: "Puzzle", timing: "06:10" },
]

const sortedData = data.sort((a, b) => {
    const timeA = new Date(`2000-01-01T${a.timing}`);
    const timeB = new Date(`2000-01-01T${b.timing}`);
    return timeA.getTime() - timeB.getTime();
});
export default function Leaderboard() {
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
                {sortedData.map((item, index) => (
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
