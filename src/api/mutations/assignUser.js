import { gql } from '@apollo/client';

const ASSIGN_USER = gql`
    mutation assignUser($applicationGid: ID!, $userGid: ID!) {
        assignUser(applicationGid: $applicationGid, userGid: $userGid) {
            assignment {
                id
                assignedUser {
                    id
                    firstName
                    lastName
                    email
                    groups {
                        id
                        name
                    }
                }
            }
        }
    }
`;

export default ASSIGN_USER;
