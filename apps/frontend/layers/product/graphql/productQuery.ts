import { gql } from "@apollo/client";

export const productQuery = gql`
  query Product($documentId: ID!) {
    product(documentId: $documentId) {
      description
      documentId
      name
      price
      brand {
        name
        products {
          documentId
          name
        }
      }
    }
  }
`;
