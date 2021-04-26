export default {
    name: 'eventIndexPage',
    title: 'Events Index Page',
    type: 'document',
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        },
        {
            name: 'featuredEvent',
            title: 'Featured Event',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'event' } }],
            validation: (Rule) => Rule.max(1),
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
        },
    },
};
