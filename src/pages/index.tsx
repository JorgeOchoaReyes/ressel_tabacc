import React from "react"; 
import { AuroraHero } from "~/components/landing/hero";
import Head from "next/head";

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Sabacc</title>
      </Head>
      <AuroraHero />  
    </>
  );
}