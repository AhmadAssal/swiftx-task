import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import getApolloClient from "../apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  const apollo = getApolloClient();
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
