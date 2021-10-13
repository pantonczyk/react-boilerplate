import { gql } from '@apollo/client';

const TOKEN_AUTH = gql`
    mutation tokenAuth($email: String, $password: String!) {
        tokenAuth(email: $email, password: $password) {
            success
            errors
            token
            refreshToken
        }
    }
`;

export default TOKEN_AUTH;
