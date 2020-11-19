import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

const link: any = createUploadLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
});

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
