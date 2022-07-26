import type { AppProps } from "next/app";
import '../styles/globals.css';
import { relayStylePagination } from "@apollo/client/utilities";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import "../styles/globals.css";
import { apolloClient } from 'lib/graphql';

const client = new ApolloClient({
  uri: "https://vercel.saleor.cloud/graphql/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: relayStylePagination([]),
        },
      },
    }
  }),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

