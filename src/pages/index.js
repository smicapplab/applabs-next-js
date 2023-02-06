import Head from 'next/head'
import Navigation from '@/components/nav'
import Hero from '@/components/hero'
import MainContent from '@/components/mainContent'
import { useEffect } from 'react'
import Products from '@/components/products'
import ContactUs from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {

  const scriptLoaded = () => {
    window.addEventListener("scroll", handleScroll);
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "./resource.js";
    script.async = true;
    script.onload = () => scriptLoaded();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Applabs</title>
        <meta name="description" content="Software development company in the Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Hero />
        <MainContent />
        <Products />
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}
