export default {
    name: 'event',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'title',
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
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'mainImage',
        },
        {
            name: 'dateAndTime',
            title: 'Date and Time',
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
            name: 'registrationUrl',
            title: 'Registration URL',
            type: 'url',
            desctription: 'Registration URL for this event',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'What should attendees know about this event?',
        },
        {
            name: 'speakers',
            title: 'Speakers',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'speaker' } }],
        },
        {
            name: 'categories',
            title: 'Associated Category',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            description: 'Event associated with this pillar',
            validation: (Rule) => Rule.max(1),
        },
        {
            name: 'ctaBody',
            title: 'Register CTA body',
            type: 'text',
            description:
                'Text that will appear with the Register call to action at the bottom of the page',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        },
    ],
    orderings: [
        {
            name: 'eventDateAsc',
            title: 'Event date new–>old',
            by: [
                {
                    field: 'dateAndTime',
                    direction: 'desc',
                },
                {
                    field: 'title',
                    direction: 'asc',
                },
            ],
        },
        {
            name: 'eventDateDesc',
            title: 'Event date old->new',
            by: [
                {
                    field: 'dateAndTime',
                    direction: 'asc',
                },
                {
                    field: 'title',
                    direction: 'asc',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'dateAndTime',
            slug: 'slug',
            media: 'mainImage',
        },
    },
};
