import { gql } from '@apollo/client';

const ALL_APPLICATIONS_ADMIN = gql`
    query allApplicationsAdmin {
        allApplicationsAdmin {
            id
            title
            company
            dateCreated
            dateModified
            status
        }
    }
`;

export default ALL_APPLICATIONS_ADMIN;
