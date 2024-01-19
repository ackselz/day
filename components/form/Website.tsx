"use client";

import { useFormContext } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Website = ({
    index,
    deleteWebsite,
}: {
    index: number;
    deleteWebsite: (index: number) => void;
}) => {
    const form = useFormContext();

    return (
        <div className="space-y-2">
            <div className="flex">
                <h2 className="grow font-semibold">Website {index + 1}</h2>
                <Button
                    type="button"
                    onClick={() => deleteWebsite(index)}
                    variant={"ghost"}
                    size={"sm"}
                >
                    <Trash2 />
                </Button>
            </div>
            <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>URL</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default Website;
