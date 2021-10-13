import { gql } from '@apollo/client';

const RESET_PASSWORD = gql`
    mutation resetPassword($password: String!, $confirmedPassword: String!) {
        resetPassword(password: $password, confirmedPassword: $confirmedPassword) {
            success
        }
    }
`;
export default RESET_PASSWORD;
