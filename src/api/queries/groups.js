import { gql } from '@apollo/client';

const GROUPS = gql`
    query groups {
        groups {
            id
            name
        }
    }
`;

export default GROUPS;
