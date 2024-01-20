"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { voluntaryDisclosuresSchema } from "@/types/form";

const VoluntaryDisclosures = ({
    handleBack,
    handleNext,
}: {
    handleBack: () => void;
    handleNext: () => void;
}) => {
    const form = useForm<z.infer<typeof voluntaryDisclosuresSchema>>({
        resolver: zodResolver(voluntaryDisclosuresSchema),
    });

    function onSubmit(values: z.infer<typeof voluntaryDisclosuresSchema>) {
        console.log(values);
        handleNext();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Please select your gender</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value={"anon"}>
                                            Choose not to disclose
                                        </SelectItem>
                                        <SelectItem value={"true"}>
                                            Yes
                                        </SelectItem>
                                        <SelectItem value="false">
                                            No
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Yes, I have read and consented to the terms
                                    and conditions.
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />
                <div className="fixed w-screen left-0 bottom-0 py-4 bg-background border-t-2">
                    <div className="mx-auto max-w-3xl">
                        <div className="flex gap-4 justify-end">
                            <Button type="button" onClick={handleBack}>
                                Back
                            </Button>
                            <Button type="submit">Save and Continue</Button>
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default VoluntaryDisclosures;
