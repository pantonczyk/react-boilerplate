import { gql } from '@apollo/client';

const UNASSIGN_USER = gql`
    mutation unassignUser($applicationGid: ID!, $userGid: ID!) {
        unassignUser(applicationGid: $applicationGid, userGid: $userGid) {
            unassigned
        }
    }
`;

export default UNASSIGN_USER;
