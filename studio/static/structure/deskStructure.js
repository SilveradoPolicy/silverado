import S from '@sanity/desk-tool/structure-builder';
import {
    // VscAccount,
    VscFile,
    // VscFolder,
} from 'react-icons/vsc';

export default () => {
    // add an S.list() item for singletons (index page, about, etc)
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Home Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('indexPage')
                        .documentId('indexPage'),
                ),
            S.listItem()
                .title('News Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('newsIndexPage')
                        .documentId('newsIndexPage'),
                ),
            S.listItem()
                .title('Events Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('eventIndexPage')
                        .documentId('eventIndexPage'),
                ),
            // filter singletons out of display
            // prevents S.list() items from appearing twice
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['eventIndexPage', 'indexPage', 'newsIndexPage'].includes(
                        listItem.getId(),
                    ),
            ),
        ]);
};
