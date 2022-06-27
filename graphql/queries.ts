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
      description
      category
      brand
      attributes {
        name
        type
        items {
          displayValue
          value
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      gallery
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

export const productsByCategory = gql`
  query ProductsByCategory($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        gallery
        inStock
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
