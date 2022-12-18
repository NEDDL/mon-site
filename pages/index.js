import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import About from "../src/components/about/about";
import Education from "../src/components/education/education";
import Experience from "../src/components/experience/experience";
import Hero from "../src/components/hero/hero";
import { Portfolio } from "../src/components/portfolio/portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Mustafa ONAL | Developing exceptional digital experiences."
        description="I'am a web developer specialized in building exceptional digital experiences. I help developing great solutions for businesses."
      />
      <Hero />
      <About />
      <Portfolio />
      <Experience id="experience" />
      <Education id="education" />
    </>
  );
}
