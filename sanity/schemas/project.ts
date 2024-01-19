export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Small Overview',
        },
        {
            name: 'slug',
            type: 'string',
            title: 'Slug',
        },
        {
            name: 'year',
            type: 'string',
            title: 'Year',
        },
        {
            name: 'link',
            type: 'string',
            title: 'Project External URL',
        },
        {
            name: 'github_link',
            type: 'string',
            title: 'Project Githubs URL',
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Thumbnail Image',
        },
        {
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
            options: {
                list: [
                    { title: 'JavaScript', value: 'javascript' },
                    { title: 'TypeScript', value: 'typescript' },
                    { title: 'Next.js', value: 'nextjs' },
                    { title: 'Vue.js', value: 'vuejs' },
                    { title: 'ReactJS', value: 'reactjs' },
                    { title: 'SASS', value: 'sass' },
                    { title: 'CSS', value: 'css' },
                    { title: 'Bootstrap', value: 'bootstrap' },
                    { title: 'ShadCN', value: 'shadcn' },
                    { title: 'TailwindCSS', value: 'tailwindcss' },
                    { title: 'Sanity CMS', value: 'sanity' },
                    { title: 'Prisma', value: 'prisma' },
                    { title: 'MongoDB', value: 'mongodb' },
                    { title: 'PHP', value: 'php' },
                    { title: 'Swift', value: 'swift' },
                    { title: 'React Native', value: 'react-native' },
                    { title: 'Wordpress', value: 'wordpress' },
                    { title: 'SQL', value: 'sql' },
                ],
                layout: 'checkbox',
            },
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Project Images',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                    ],
                },
            ],
            options: {
                layout: 'grid',
            },
        },
    ],
}