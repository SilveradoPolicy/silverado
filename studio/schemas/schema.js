/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// import document schemas here (bonus points for alphabetical order)
import event from './documents/event';
import eventIndexPage from './documents/eventIndexPage';
import indexPage from './documents/indexPage';
import newsIndexPage from './documents/newsIndexPage';
import pillar from './documents/pillar';
import post from './documents/post';

// import object schemas here (bonus points for alphabetical order)
import mainImage from './objects/mainImage';
import seo from './objects/seo';
import bodyPortableText from './objects/bodyPortableText';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */

        // document types here (bonus points for alphabetical order)
        event,
        eventIndexPage,
        indexPage,
        newsIndexPage,
        pillar,
        post,
        // object types here (bonus points for alphabetical order)
        mainImage,
        bodyPortableText,
        seo,
    ]),
});
