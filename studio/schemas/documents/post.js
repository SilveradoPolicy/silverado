export default {
    name: 'post',
    title: 'News/Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
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
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'description',
            title: 'Brief Description',
            type: 'text',
            description:
                'Brief description of this post. This text will appear on News/Blog previews.',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'bodyPortableText',
        },
        {
            name: 'categories',
            title: 'Category Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            description:
                'List of categories this News/Blog item belong to. The first category in the list will be used for sorting/filtering purposes',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
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
                    field: 'title',
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
                    field: 'title',
                    direction: 'asc',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishDate',
            slug: 'slug',
            media: 'heroImage',
        },
    },
};
