import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Nisha Hanamashetty',
    tagline: '',
    description: "I'm a Java Full Stack Developer building responsive web applications with Java, Spring Boot, JDBC, MySQL, and modern front-end technologies, with hands-on experience in REST APIs and database integration.",
    specialText: "",
    items:[
        'Java Full Stack Developer',
        'Backend Developer',
        'Spring Boot Developer',
        'Web Developer',
      ],
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};