import { gql } from '@apollo/client';

const ALL_ASSIGNMENTS_TO_APPLICATION = gql`
    query allAssignmentsToApplication($gid: ID, $searchPhrase: String, $groupGid: ID) {
        allAssignmentsToApplication(gid: $gid, searchPhrase: $searchPhrase, groupGid: $groupGid) {
            assignedUser {
                id
                email
                firstName
                lastName
                groups {
                    id
                    name
                }
            }
        }
    }
`;

export default ALL_ASSIGNMENTS_TO_APPLICATION;
