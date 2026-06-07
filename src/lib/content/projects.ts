import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';

const currentYear: number = new Date().getFullYear()

export const projectsSection: ProjectsSectionType = {
    title: 'my projects',

    projects: [
        {
            id: getId(),
            name: 'Job Portal Application',
            url: 'coming-soon',
            repo: 'https://github.com/Nisha640/Project',
            img: '/project-img/p1-job-portal.png',
            year: 2024,
            tags: ['Java', 'Servlets', 'JDBC', 'MySQL'],
        },
        {
            id: getId(),
            name: 'Movie App',
            url: 'coming-soon',
            repo: 'https://github.com/Nisha640/movie-app',
            img: '/project-img/new-project.jpg',
            year: 2024,
            tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            id: getId(),
            name: 'Movie App (v2)',
            url: 'coming-soon',
            repo: 'https://github.com/Nisha640/movieapp',
            img: '/project-img/new-project.jpg',
            year: 2024,
            tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            id: getId(),
            name: 'Birthday Webpage',
            url: 'coming-soon',
            repo: 'https://github.com/Nisha640/Birthday1',
            img: '/project-img/new-project.jpg',
            year: 2024,
            tags: ['HTML', 'CSS'],
        },
        {
            id: getId(),
            name: 'Pattern Programs',
            url: 'coming-soon',
            repo: 'https://github.com/Nisha640/PatternProgram',
            img: '/project-img/new-project.jpg',
            year: 2024,
            tags: ['Java'],
        },
        {
            id: getId(),
            name: 'Java Programs',
            url: 'coming-soon',
            repo: 'https://github.com/Nisha640/JavaPrograms',
            img: '/project-img/new-project.jpg',
            year: 2024,
            tags: ['Java'],
        },
        {
            id: getId(),
            name: 'Assignments',
            url: 'coming-soon',
            repo: 'https://github.com/Nisha640/Assignments',
            img: '/project-img/new-project.jpg',
            year: 2024,
            tags: ['Java'],
        },
        {
            id: getId(),
            name: 'Pattern',
            url: 'coming-soon',
            repo: 'https://github.com/Nisha640/pattern',
            img: '/project-img/new-project.jpg',
            year: 2024,
            tags: ['Java'],
        },
    ],
};