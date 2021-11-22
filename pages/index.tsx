import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import RegisterEmail from "../components/RegisterEmail";
import styles from "../styles/Home.module.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const link = from([new HttpLink({ uri: "http://localhost:4000/graphql" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const Home: NextPage = () => {
  return (
    <div className="bg-darkbg h-auto w-max sm:w-full ">
      <div className="p-4">
        <Head>
          <title>React in Production</title>
          <meta
            name="description"
            content="Learn how to create a React app that is ready for production"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className="font-black text-white text-5xl center text-yellow">
            React in Production
          </h1>

          <h2>Take your React skills to the next level</h2>
          <ApolloProvider client={client}>
            <RegisterEmail />
          </ApolloProvider>
        </main>

        <footer className={styles.footer}>
          <div className="text-sm text-graytext">
            © 2021 Souvik Basu. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
