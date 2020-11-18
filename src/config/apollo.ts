import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

const link: any = createUploadLink({ uri: "http://localhost:5000/graphql" });

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
