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
            name: 'pillarIcon',
            title: 'Pillar Icon',
            type: 'mainImage',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description:
                'Some frontends will require a slug to be set to be able to show the page',
            options: {
                source: 'pillarName',
                maxLength: 96,
            },
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'mainImage',
            description: 'Hero image on the pillar page.',
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
        {
            name: 'categories',
            title: 'Associated Category',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            description: "News/Blogs and Event's associated with this pillar",
            validation: (Rule) => Rule.max(1),
        },
        {
            name: 'cta',
            title: 'CTA',
            type: 'cta',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
    ],
    preview: {
        select: {
            media: 'pillarIcon',
            title: 'pillarName',
        },
    },
};
