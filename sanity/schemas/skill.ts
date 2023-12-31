export default  {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'learnedAt',
            type: 'date',
            title: 'Learned At',
            description: 'The date when you started using this skill.',
        },
    ],
}