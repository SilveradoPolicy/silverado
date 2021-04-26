export default {
    name: 'post',
    title: 'News/Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'postTitle',
            title: 'News/Blog Post Title',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'mainImage',
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
    orderings: [
        {
            name: 'publishDateAsc',
            title: 'Publish date new–>old',
            by: [
                {
                    field: 'publishDate',
                    direction: 'desc',
                },
                {
                    field: 'postTitle',
                    direction: 'asc',
                },
            ],
        },
        {
            name: 'publishDateDesc',
            title: 'Publish date old->new',
            by: [
                {
                    field: 'publishDate',
                    direction: 'asc',
                },
                {
                    field: 'postTitle',
                    direction: 'asc',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'postTitle',
            publishedAt: 'publishDate',
            slug: 'slug',
            media: 'heroImage',
        },
    },
};
