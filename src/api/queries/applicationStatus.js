import { gql } from '@apollo/client';

const APPLICATION_STATUS = gql`
    query applicationStatus($gid: ID) {
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

export default APPLICATION_STATUS;
