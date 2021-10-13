import { gql } from '@apollo/client';

const APPLICATION_DATA_STRUCTURE_STATUS = gql`
    query applicationDataStructureStatus($gid: ID) {
        applicationData(gid: $gid) {
            id
            field {
                id
            }
            author {
                username
            }
            value
            created
            updated
        }
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
        applicationStatus(gid: $gid) {
            id
            author {
                username
            }
            state {
                name
            }
            created
            updated
        }
    }
`;

export default APPLICATION_DATA_STRUCTURE_STATUS;
