import { ExperienceSectionType } from '@/lib/types/sections'

export const experienceSection: ExperienceSectionType = {
    title: "where i've worked",
    experiences: [
        {
            company: 'Curatal',
            companyUrl: 'https://curatal.com/',
            role: 'Technical Recruiter',
            started: 'Nov 2025',
            upto: 'Present',
            tasks: [
                "Evaluated engineering candidates' technical competencies in Core Java, Spring Boot, Databases, and Full Stack frameworks to match complex client requirements.",
                'Sourced and screened niche software engineering talent through job portals, LinkedIn, and internal databases using advanced sourcing techniques.',
                'Conducted initial technical-vibe and HR screenings, mapping candidate project experiences against core backend and frontend job specifications.',
                'Collaborated closely with hiring managers to deep-dive into project architectures, job specs, and talent pipeline blockers, and coordinated interview schedules.',
                'Maintained meticulous recruitment trackers and database records to analyze and optimize hiring pipeline workflows.',
                'Facilitated cross-functional stakeholders, driving candidate onboarding, compliance management, and technical documentation processes.',
            ],
        },
        {
            company: 'Destination Technologies',
            companyUrl: '',
            role: 'Software Engineer Intern',
            started: 'June 2024',
            upto: 'Nov 2024',
            tasks: [
                'Developed responsive web applications using Java, HTML, CSS, JavaScript, and Bootstrap.',
                'Built backend applications using Core Java, JDBC, Servlets, and Hibernate.',
                'Worked with MySQL database for CRUD operations and data management.',
                'Developed REST APIs and implemented basic Spring Boot concepts.',
                'Practiced version control using Git and GitHub.',
                'Completed mini-projects involving full-stack web application development.',
            ],
        },
    ],
};