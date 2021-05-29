export default {
    name: 'cta',
    title: 'CTA',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'text',
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            validation: (Rule) => Rule.max(10),
        },
        {
            name: 'internalLink',
            title: 'Internal Link',
            type: 'string',
            description:
                'This is the path name for the internal link. The path name is everything after silverado.org/',
        },
    ],
};
