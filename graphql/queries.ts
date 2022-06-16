import { gql } from "@apollo/client";

export const categories = gql`
  query {
    categories {
      name
      products {
        id
        name
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const categoryNames = gql`
  query categoryNames {
    categories {
      name
    }
  }
`;

export const currencies = gql`
  query currencies {
    label
    symbol
  }
`;

export const getProductById = gql`
  query GetProductById($productId: String!) {
    product(id: $productId) {
      name
      inStock
      gallery
      description
      category
      brand
    }
  }
`;

export const navBar = gql`
  query navbar {
    currencies {
      label
      symbol
    }
    categories {
      name
    }
  }
`;
