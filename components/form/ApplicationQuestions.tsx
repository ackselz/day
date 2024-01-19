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
import { Button } from "@/components/ui/button";
import { applicationQuestionsSchema } from "@/types/form";

const ApplicationQuestions = ({
    handleBack,
    handleNext,
}: {
    handleBack: () => void;
    handleNext: () => void;
}) => {
    const form = useForm<z.infer<typeof applicationQuestionsSchema>>({
        resolver: zodResolver(applicationQuestionsSchema),
    });

    function onSubmit(values: z.infer<typeof applicationQuestionsSchema>) {
        console.log(values);
        handleNext();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="eligibility"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Are you currently eligible to work in the stated
                                job location?
                            </FormLabel>
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
                    name="visa"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Do you require a work visa?</FormLabel>
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
                <div className="fixed w-full left-0 bottom-0 py-4 bg-background border-t-2">
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

export default ApplicationQuestions;
