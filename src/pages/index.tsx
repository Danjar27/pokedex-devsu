import type {NextPage} from 'next'
import React from "react";
import Root from "../components/templates/Root";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Devsu Pokemon</title>
      </Head>
      < Root/>
    </>
  )
}

export default Home