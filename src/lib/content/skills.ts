import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'


export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'Backend Development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
            light: '/lotties/curl-code.json',
            dark: '/lotties/curl-code2.json',
        },
        points: [
            'Built backend applications using Core Java, JDBC, Servlets, and Hibernate following MVC architecture principles for clean, maintainable code.',
            'Developed REST APIs and implemented Spring Boot concepts to expose application functionality and integrate frontend with backend services.',
            'Designed and managed MySQL database schemas and performed CRUD operations for efficient data storage and retrieval.',
            'Optimized JDBC-based database connectivity and query execution for reliable data management.',
            'Implemented role-based authentication to secure application modules and manage user access.',
        ],
        softwareSkills: [
            { name: 'Java', icon: 'logos:java' },
            { name: 'Spring Boot', icon: 'logos:spring-icon' },
            { name: 'Hibernate', icon: 'logos:hibernate' },
            { name: 'MySQL', icon: 'logos:mysql-icon' },
            { name: 'Python', icon: 'logos:python' },
        ],
    },
    {
        id: getId(),
        title: 'Frontend Development',
        lottie: {
            light: '/lotties/designing.json',
            dark: '/lotties/designing-dark.json',
        },
        points: [
            'Developed responsive web applications and user interfaces using HTML, CSS, JavaScript, and Bootstrap.',
            'Integrated frontend with backend services to deliver complete full-stack web applications.',
            'Built interactive features such as job posting, job search, and application management within full-stack projects.',
        ],
        softwareSkills: [
            { name: 'HTML', icon: 'vscode-icons:file-type-html' },
            { name: 'CSS', icon: 'vscode-icons:file-type-css' },
            { name: 'JavaScript', icon: 'logos:javascript' },
            { name: 'Bootstrap', icon: 'logos:bootstrap' },
        ],
    },
    {
        id: getId(),
        title: 'Tools & Testing',
        lottie: {
            light: '/lotties/build.json',
            dark: '/lotties/build.json',
        },
        points: [
            'Practiced version control using Git and GitHub for collaborative development and code management.',
            'Experienced with manual testing, smoke testing, functional testing, and bug reporting to ensure application quality.',
            'Worked across Linux and Windows environments, with basic exposure to AWS cloud services.',
        ],
        softwareSkills: [
            { name: 'Git', icon: 'logos:git-icon' },
            { name: 'GitHub', icon: 'uil:github' },
            { name: 'VS Code', icon: 'logos:visual-studio-code' },
            { name: 'Eclipse', icon: 'logos:eclipse-icon' },
            { name: 'AWS', icon: 'skill-icons:aws-dark' },
            { name: 'Linux', icon: 'logos:linux-tux' },
        ],
    },
    ],
};
