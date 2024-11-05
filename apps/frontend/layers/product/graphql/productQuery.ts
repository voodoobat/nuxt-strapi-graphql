export const productQuery = gql`
  query Product($documentId: ID!) {
    product(documentId: $documentId) {
      name
      price
      documentId
      description
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
