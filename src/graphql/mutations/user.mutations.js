import { gql } from "@apollo/client";

export const Sign_UP = gql`
  mutation signup($input: SignUpInput!) {
    signUp(input: $input) {
      _id
      name
      username
    }
  }
`;
export const Sign_In = gql`
  mutation signIn($input: LoginInput!) {
    login(input: $input) {
      _id
      name
      username
    }
  }
`;
export const Log_Out = gql`
  mutation logOut {
    logout {
      message
    }
  }
`;
