export default {
    name: 'speaker',
    title: 'Speakers',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'mainImage',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
};
