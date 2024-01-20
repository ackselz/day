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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { voluntaryDisclosuresSchema } from "@/types/form";

const Review = ({
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

    function handleSubmit() {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <p className="text-2xl font-bold">Review your information</p>
                <FormField
                    control={form.control}
                    name="terms"
                    render={({field}) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">'
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Yes, I have confirmed that the information provided is correct.
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
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default Review;
