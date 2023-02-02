import Head from "next/head";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero></Hero>
        <Features />
        <Features imageSide="right" />
        <CallToAction />
        <Reviews />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
