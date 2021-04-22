export default {
    name: 'eventIndexPage',
    title: 'Events Index Page',
    type: 'document',
    fields: [
        {
            name: 'pageName',
            title: 'page Name',
            type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description:
                'Some frontends will require a slug to be set to be able to show the post',
            options: {
                source: 'featuredEvent',
                maxLength: 96,
            },
        },
        {
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string',
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string',
        },
        {
            name: 'place',
            title: 'Place',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
    ],
};
