"use client";

import Step from "@/components/form/Step";
import ApplicationQuestions from "@/components/form/ApplicationQuestions";
import MyExperience from "@/components/form/MyExperience";
import MyInformation from "@/components/form/MyInformation";
import React, { useState, useEffect} from "react";
import VoluntaryDisclosures from "@/components/form/VoluntaryDisclosures";
import Review from "@/components/Review";
import Timer from "@/components/Timer";
import {Button} from "@/components/ui/button";

const page = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(true)
    const [signup, setSignup] = useState(false)
    const [personalInfo, setPersonalInfo] = useState(false)
    const [exp, setExp] = useState(false)
    const [questions, setQuestions] = useState(false)
    const [voluntary, setVoluntary] = useState(false)
    const [review, setReview] = useState(false)
    const [signupSplit, setSignupSplit] = useState(0)
    const [personalInfoSplit, setPersonalInfoSplit] = useState(0);
    const [expSplit, setExpSplit] = useState(0);
    const [questionsSplit, setQuestionsSplit] = useState(0);
    const [voluntarySplit, setVoluntarySplit] = useState(0);
    const [reviewSplit, setReviewSplit] = useState(0);


    const handleBack = () => {
        setActiveIndex((prev) => prev - 1);
    };

    const handleNext = () => {
        setActiveIndex((prev) => prev + 1);
    };

    const handleSubmit = () => {
        setStart(false);
    };

    useEffect(() => {
        // Check if activeIndex is 1 and setSignup to true
        if (activeIndex === 0) {
            setSignup(true);
            setSignupSplit(time);
        }
        if (activeIndex === 1) {
            setPersonalInfo(true);
            setPersonalInfoSplit(time);
        }
        if (activeIndex === 2) {
            setExp(true);
            setExpSplit(time);
        }
        if (activeIndex === 3) {
            setQuestions(true);
            setQuestionsSplit(time);
        }
        if (activeIndex === 4) {
            setVoluntary(true);
            setVoluntarySplit(time);
        }
        if (activeIndex === 5) {
            setReview(true);
            setReviewSplit(time);
        }
    }, [activeIndex]);

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
            component: (
                <Review
                    handleBack={handleBack}
                    handleNext={handleNext}
                />
            ),
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
            <div className="fixed right-0 top-0 transform -translate-x-1/2 -translate-y-1 pb-0 w-60 h-20">
                <Timer
                    signup={signup}
                    personalInfo={personalInfo}
                    exp={exp}
                    questions={questions}
                    voluntary={voluntary}
                    review={review}
                    signupSplit={signupSplit}
                    personalInfoSplit={personalInfoSplit}
                    expSplit={expSplit}
                    questionsSplit={questionsSplit}
                    voluntarySplit={voluntarySplit}
                    reviewSplit={reviewSplit}
                    time={time}
                    start={start}
                    setTime={setTime}
                    setStart={setStart}
                />
            </div>
            {activeIndex === 4 ? (
                <Button onClick={handleSubmit} className="fixed right-0 bottom-0 m-5 mr-40">SUBMIT</Button>
            ) : null}
        </div>
    );
};

export default page;
