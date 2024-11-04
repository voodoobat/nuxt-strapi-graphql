export const productQuery = gql`
  query Query($documentId: ID!) {
    product(documentId: $documentId) {
      name
      price
      documentId
      description
      brand {
        name
        description
      }
    }
  }
`;
