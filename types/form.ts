import * as z from "zod";

/*

MY INFORMATION

*/

export const SOURCES = [
    "Job Board",
    "Employee Referral",
    "Social Media",
    "Company Website",
    "Recruitment Agency",
    "Networking Event",
    "Other",
] as const;

export type Sources = typeof SOURCES;

export type Source = Sources[number];

export const COUNTRIES = [
    "Indonesia",
    "Malaysia",
    "Singapore",
    "Vietnam",
] as const;

export type Countries = typeof COUNTRIES;

export type Country = Countries[number];

export const PHONE_TYPES = [
    "Fax",
    "Home",
    "Mobile",
    "Office Mobile",
    "Office No.",
] as const;

export type PhoneTypes = typeof PHONE_TYPES;

export type PhoneType = PhoneTypes[number];

export const myInformationSchema = z.object({
    source: z.enum(SOURCES).optional(),
    country: z.enum(COUNTRIES).optional(),
    legalName: z.object({
        firstName: z.string().optional(),
        middleName: z.string().optional(),
        lastName: z.string().optional(),
    }),
    phone: z.object({
        type: z.enum(PHONE_TYPES).optional(),
        countryCode: z.string().optional(),
        phoneNumber: z.string().optional(),
    }),
});

/*

MY EXPERIENCE

*/

export const jobSchema = z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    from: z.date(),
    to: z.date(),
    desc: z.string().optional(),
});

export const educationSchema = z.object({
    name: z.string(),
    degree: z.string(),
    field: z.string().optional(),
    result: z.string().optional(),
    from: z.date().optional(),
    to: z.date().optional(),
});

export const websiteSchema = z.object({
    url: z.string().url(),
});

export const myExperienceSchema = z.object({
    jobs: z.array(jobSchema).optional(),
    educations: z.array(educationSchema).optional(),
    websites: z.array(websiteSchema).optional(),
});

/*

APPLICATION QUESTIONS

*/

export const applicationQuestionsSchema = z.object({
    eligibility: z.string(),
    visa: z.string(),
});

/*

VOLUNTARY DISCLOSURES

*/

export const voluntaryDisclosuresSchema = z.object({
    gender: z.string(),
    terms: z.boolean().default(false).optional(),
});
