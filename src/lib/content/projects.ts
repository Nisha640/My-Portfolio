import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';

const currentYear: number = new Date().getFullYear()

export const projectsSection: ProjectsSectionType = {
    title: 'my projects',

    projects: [
        {
            id: getId(),
            name: 'Task Manager App',
            url: 'https://github.com/Nisha640/task-manager-app',
            repo: 'https://github.com/Nisha640/task-manager-app',
            img: '/project-img/new-project.jpg',
            year: 2025,
            tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        },
        {
            id: getId(),
            name: 'Student Grade Management System',
            url: 'https://github.com/Nisha640/student-grade-manager',
            repo: 'https://github.com/Nisha640/student-grade-manager',
            img: '/project-img/new-project.jpg',
            year: 2025,
            tags: ['Java', 'JDBC', 'MySQL', 'OOP'],
        },
    ],
};