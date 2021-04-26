export default {
    name: 'newsIndexPage',
    title: 'News Index Page',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish',
    ],
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'featuredNewsItem',
            title: 'Featured News Item',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'post' } }],
            validation: (Rule) => Rule.max(1),
        },
        {
            name: 'eventSectionTitle',
            title: 'Event Section Title',
            type: 'string',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
        },
    },
};
