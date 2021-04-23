export default {
    name: 'post',
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
            type: 'array',
            of: [{ type: 'reference', to: { type: 'author' } }],
            validation: (Rule) => Rule.max(1),
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
            name: 'body',
            title: 'Body',
            type: 'bodyPortableText',
        },
    ],
};
