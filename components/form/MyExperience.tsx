"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import FileInput from "./FileInput";
import Job from "./Job";
import Education from "./Education";
import Website from "./Website";
import { myExperienceSchema } from "@/types/form";

const MyExperience = ({
    handleBack,
    handleNext,
}: {
    handleBack: () => void;
    handleNext: () => void;
}) => {
    const form = useForm<z.infer<typeof myExperienceSchema>>({
        resolver: zodResolver(myExperienceSchema),
    });

    const {
        fields: jobs,
        append: appendJob,
        remove: removeJob,
    } = useFieldArray({
        control: form.control,
        name: "jobs",
    });

    const {
        fields: educations,
        append: appendEducation,
        remove: removeEducation,
    } = useFieldArray({
        control: form.control,
        name: "educations",
    });

    const {
        fields: websites,
        append: appendWebsite,
        remove: removeWebsite,
    } = useFieldArray({
        control: form.control,
        name: "websites",
    });

    function onSubmit(values: z.infer<typeof myExperienceSchema>) {
        console.log(values);
        handleNext();
    }

    function onInvalid(errors: any) {
        console.log(errors);
    }

    const addJob = () => {
        appendJob({
            title: "",
            company: "",
            location: "",
            from: new Date(0),
            to: new Date(0),
            desc: "",
        });
    };

    const addEducation = () => {
        appendEducation({
            name: "",
            degree: "",
            field: "",
            result: "",
            from: new Date(0),
            to: new Date(0),
        });
    };

    const addWebsite = () => {
        appendWebsite({
            url: "",
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit, onInvalid)}
                className="space-y-4"
            >
                <h2 className="font-semibold text-lg">Work Experience</h2>
                {jobs.map((job, index) => (
                    <Job key={job.id} index={index} deleteJob={removeJob} />
                ))}
                <Button type="button" onClick={addJob}>
                    Add
                </Button>
                <Separator />
                <h2 className="font-semibold text-lg">
                    Highest Education Qualification
                </h2>
                {educations.map((education, index) => (
                    <Education
                        key={education.id}
                        index={index}
                        deleteEducation={removeEducation}
                    />
                ))}
                <Button type="button" onClick={addEducation}>
                    Add
                </Button>
                <Separator />
                {/* <h2 className="font-semibold text-lg">Certifications</h2>
                <Button>Add</Button>
                <Separator />
                <h2 className="font-semibold text-lg">Language</h2>
                <Button>Add</Button>
                <Separator />
                <h2 className="font-semibold text-lg">Resume/CV</h2>
                <p>Upload a file (5MB max)</p>
                <FileInput />
                <Separator /> */}
                <h2 className="font-semibold text-lg">Websites</h2>
                {websites.map((website, index) => (
                    <Website
                        key={website.id}
                        index={index}
                        deleteWebsite={removeWebsite}
                    />
                ))}
                <Button type="button" onClick={addWebsite}>
                    Add
                </Button>
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

export default MyExperience;
