import { gql } from '@apollo/client';

const ME = gql`
    query me {
        me {
            username
            firstName
            lastName
            email
        }
    }
`;

export default ME;
