export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        },
        {
            name: 'eventTitle',
            title: 'Event Title',
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
