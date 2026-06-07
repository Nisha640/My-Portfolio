import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';


export const projectsSection: ProjectsSectionType = {
    title: 'my projects',

    projects: [
        {
            id: getId(),
            name: 'Task Manager App',
            url: 'https://nisha640.github.io/task-manager-app/',
            repo: 'https://github.com/Nisha640/task-manager-app',
            img: '/project-img/dashboard.png',
            year: 2025,
            tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        },
        {
            id: getId(),
            name: 'Movie App',
            url: 'https://github.com/Nisha640/movieapp',
            repo: 'https://github.com/Nisha640/movieapp',
            img: '/project-img/p5-animation.png',
            year: 2024,
            tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            id: getId(),
            name: 'Student Grade Management System',
            url: 'https://github.com/Nisha640/student-grade-manager',
            repo: 'https://github.com/Nisha640/student-grade-manager',
            img: '/project-img/p2-question-paper.png',
            year: 2025,
            tags: ['Java', 'JDBC', 'MySQL', 'OOP'],
        },
    ],
};