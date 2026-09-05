import { generateNextSeo } from "next-seo/pages";
import Head from "next/head";
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
        {generateNextSeo({
          title: "Mustafa Onal | Senior Software Engineer & Applied AI",
          description:
            "Senior Software Engineer based in Barcelona. Building SaaS platforms, applied AI systems, and developer tools, from architecture to production.",
          canonical: "https://mustafa-onal.com/",
          openGraph: {
            images: [
              {
                url: "/images/me.jpg",
                width: 500,
                height: 494,
                alt: "Mustafa ONAL",
              },
            ],
          },
        })}
      </Head>
      <Hero />
      <About />
      <Portfolio />
      <Experience id="experience" />
      <Education id="education" />
    </>
  );
}
