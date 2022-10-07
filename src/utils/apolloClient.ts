import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { authProvider } from "./authProvider";

const authLink = setContext((_, { headers }) => {
  const newContext = {
    headers: {
      ...headers,
      Authorization: `Bearer ${authProvider.getAccessToken()}`,
    },
  };
  return newContext;
});

export const gqlClient = () => {
  const httpLink = createHttpLink({
    uri: authProvider.getQueryUrl() ?? "",
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
};
