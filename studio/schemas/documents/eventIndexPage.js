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
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        },
        {
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
            description: 'What is the title of the event?',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'What is the subtitle of the event',
        },
        {
            title: 'Date and Time',
            name: 'DateAndTime',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today',
            },
        },
        {
            name: 'place',
            title: 'Place',
            type: 'string',
            description: 'Where will the event be held?',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'What should attendees know about this event?',
        },
    ],
};
