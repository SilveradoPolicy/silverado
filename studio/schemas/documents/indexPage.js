export default {
    name: 'indexPage',
    title: 'Index Page',
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
            name: 'testImage',
            title: 'Test Image',
            type: 'mainImage',
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
        },
    },
};
