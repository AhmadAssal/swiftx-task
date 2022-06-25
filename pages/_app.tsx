import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import getApolloClient from "../apollo-client";
import { Navbar } from "../components/navbar";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }: AppProps) {
  const apollo = getApolloClient();
  return (
    <RecoilRoot>
      <ApolloProvider client={apollo}>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
