import { gql } from "@apollo/client";

export const categories = gql`
  query {
    categories {
      name
      products {
        id
        name
      }
    }
  }
`;
