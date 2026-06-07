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
            // TODO: replace with your actual repository URL
            repo: 'https://github.com/nisha-hanamashetty',
            img: '/project-img/p1-job-portal.png',
            year: 2024,
            tags: ['Java', 'Servlets', 'JDBC', 'MySQL'],
        },
        {
            id: getId(),
            name: 'More Projects Coming Soon',
            url: 'coming-soon',
            // TODO: replace with your actual GitHub profile URL
            repo: 'https://github.com/nisha-hanamashetty',
            img: '/project-img/new-project.jpg',
            year: currentYear,
            tags: ['Java', 'Spring Boot', 'MySQL'],
        },
    // Add your projects below:
    // {
    //     id: getId(),
    //     name: 'Project Name',
    //     url: 'https://live-demo-link.com/',
    //     repo: 'https://github.com/nisha-hanamashetty/repo-name',
    //     img: '/project-img/your-image.png',
    //     year: 2024,
    //     tags: ['Java', 'Spring Boot', 'MySQL'],
    // },
    ],
};