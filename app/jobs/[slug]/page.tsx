"use client";

import Step from "@/components/form/Step";
import ApplicationQuestions from "@/components/form/ApplicationQuestions";
import MyExperience from "@/components/form/MyExperience";
import MyInformation from "@/components/form/MyInformation";
import { useState } from "react";
import VoluntaryDisclosures from "@/components/form/VoluntaryDisclosures";

const page = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleBack = () => {
        setActiveIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        setActiveIndex((prev) => prev + 1);
    };

    const steps = [
        {
            title: "My Information",
            component: <MyInformation handleNext={handleNext} />,
        },
        {
            title: "My Experience",
            component: (
                <MyExperience handleBack={handleBack} handleNext={handleNext} />
            ),
        },
        {
            title: "Application Questions",
            component: (
                <ApplicationQuestions
                    handleBack={handleBack}
                    handleNext={handleNext}
                />
            ),
        },
        {
            title: "Voluntary Disclosures",
            component: (
                <VoluntaryDisclosures
                    handleBack={handleBack}
                    handleNext={handleNext}
                />
            ),
        },
        {
            title: "Review",
            component: <div className="">Review</div>,
        },
    ];

    return (
        <div className="grid gap-8 my-8 justify-items-center">
            <div className="max-w-4xl">
                <ul className="relative flex flex-row gap-x-2">
                    {steps.map((step, index) => (
                        <Step
                            key={step.title}
                            title={step.title}
                            index={index}
                            activeIndex={activeIndex}
                            length={steps.length}
                        />
                    ))}
                </ul>
            </div>
            <div className="w-full max-w-xl mb-16">
                {steps[activeIndex].component}
            </div>
        </div>
    );
};

export default page;
