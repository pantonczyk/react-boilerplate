import { gql } from '@apollo/client';

const APPLICATION_STRUCTURE = gql`
    query applicationStructure($gid: ID) {
        applicationStructure(gid: $gid) {
            id
            name
            chapterSet {
                id
                name
                order
                sectionSet {
                    id
                    name
                    order
                    fieldSet {
                        id
                        name
                        order
                        dataType {
                            id
                            name
                            description
                        }
                        characterLimit
                    }
                }
            }
        }
    }
`;

export default APPLICATION_STRUCTURE;
