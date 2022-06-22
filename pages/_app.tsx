import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import getApolloClient from "../apollo-client";
import { Navbar } from "../components/navbar";
function MyApp({ Component, pageProps }: AppProps) {
  const apollo = getApolloClient();
  return (
    <ApolloProvider client={apollo}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
