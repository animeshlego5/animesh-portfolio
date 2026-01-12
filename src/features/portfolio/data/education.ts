export interface Education {
    id: string;
    institution: string;
    degree: string;
    period: string;
    score: string;
    location: string;
}

export const EDUCATION: Education[] = [
    {
        id: "mait",
        institution: "MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY",
        degree: "Bachelor of Technology in Computer Science",
        period: "Expected 2026",
        score: "CGPA: 8/10",
        location: "Rohini, Delhi",
    },
    {
        id: "amity",
        institution: "AMITY INTERNATIONAL SCHOOL",
        degree: "Senior Secondary Education",
        period: "2021",
        score: "94.8%",
        location: "Mayur Vihar, Delhi",
    },
    {
        id: "dps",
        institution: "DELHI PUBLIC SCHOOL",
        degree: "Secondary Education",
        period: "2019",
        score: "93.4%",
        location: "Noida, Uttar Pradesh",
    },
];
