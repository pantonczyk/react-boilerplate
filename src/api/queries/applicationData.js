import { gql } from '@apollo/client';

const APPLICATION_DATA = gql`
    query applicationData($gid: ID) {
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
    }
`;

export default APPLICATION_DATA;
