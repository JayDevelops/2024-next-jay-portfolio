
interface Experience {
    title: string,
    companyName: string,
    icon: string,
    iconBg: string,
    date: string,
    points: string[],
}

const experiences: Experience[] = [
    {
        title: "Front Stack Software Engineer",
        companyName: "CSULA University Times",
        icon: "/static/companyLogos/utlogo.png",
        iconBg: "hsl(var(--muted-foreground))",
        date: "October 2019 - May 2023",
        points: [
            " Achieved  impressive decrease of over 40% in web application loading times through the strategic optimization of WordPress components using pure JavaScript," +
            " correlated with a comprehensive backend server overhaul utilizing Node.js and PHP.",
            "Worked closely and harmoniously with team members to bring exceptional UI/UX designs to life and produced an increase of 40% score on great web accessibility.",
            "Organized the team of content creators to implement excellent SEO strategies, including the use of targeted keywords, resulting in a 25% increase in website traffic.",
            "Successfully integrated Google AdSense, resulting in a remarkable 15% increase in profit compared to the previously employed static advertising approach.",
        ],
    },
    {
        title: "Software Engineer Intern",
        companyName: "Army Lab Corporation",
        icon: "/static/companyLogos/armylab.png",
        iconBg: "hsl(var(--muted-foreground))",
        date: "August 2022 - May 2023",
        points: [
            "Collaborated effectively with eight professionals to modernize an audio-visual detection model, crucial for private military contractor drone software used in combat scenarios.",
            "Python Software Transformation for Higher Performance: Transformed legacy software into modern Python, resulting in a remarkable 30% increase in computational speed.",
            "Pioneered the development of Unity Graphical User Interface (GUI) component for combat personnel, eliminating the need to view underlying code in real-time, optimizing user experience, and increased operational efficiency by 40%.",
            "Ensured the successful completion of the project and meticulous attention, creating 100% new modern documentation.",
            "Encompassed comprehensive project deliverables and focused on facilitating seamless knowledge transfer, establishing future scalability, and reduced codebase by 30%.",
        ],
    },
]

export { experiences } // Exporting only the array
export type { Experience } // Explicitly export the type
