import { gql } from '@apollo/client';

const ALL_APPLICATIONS = gql`
    query allApplications {
        allApplications {
            id
            title
            company
            dateCreated
            dateModified
            status
        }
    }
`;

export default ALL_APPLICATIONS;
