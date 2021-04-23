export default {
    name: 'blogPost',
    title: 'News/Blog Post',
    type: 'document',
    fields: [
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'mainImage',
        },
        {
            name: 'postTitle',
            title: 'News/Blog Post Title',
            type: 'string',
        },
        {
            name: 'publishDate',
            title: 'Publish Date',
            type: 'date',
        },
        {
            name: 'authorsName',
            title: "Author's Name",
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'Some frontends will require a slug to be set to be able to show the page',
            options: {
                source: 'postTitle',
                maxLength: 96,
            },
        },
        {
            name: 'postBody',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                },
            ],
        },
    ],
};
