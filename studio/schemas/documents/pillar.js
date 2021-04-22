export default {
    name: 'pillar',
    title: 'Pillars',
    type: 'document',
    fields: [
        {
            name: 'pillarName',
            title: 'Pillar Name',
            type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description:
                'Some frontends will require a slug to be set to be able to show the post',
            options: {
                source: 'pillarName',
                maxLength: 96,
            },
        },
        {
            name: 'shortDescription',
            title: 'Hero Description',
            type: 'text',
            description: 'This is the hero text copy.',
        },
        {
            name: 'longDescriptionTitle',
            title: 'Body Title',
            type: 'string',
        },
        {
            name: 'longDescription',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                },
            ],
        },
    ],
};
