import { GraphQLClient } from 'graphql-request';

export function request({ query, variable, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_KEY}`,
    },
  });
  return client.request(query, variable);
}
