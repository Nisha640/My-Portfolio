import { ProjectsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper';

const currentYear: number = new Date().getFullYear()

export const projectsSection: ProjectsSectionType = {
    title: 'my projects',

    projects: [],
};