import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import GetApolloClient from "../apis/apollo.client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={GetApolloClient()}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
