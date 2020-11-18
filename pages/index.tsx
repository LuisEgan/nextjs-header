import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Apoyamos a los restaurantes del país para adaptarse a la nueva normalidad gracias a la tecnología."
        ></meta>
        <meta name="url" content="https://www.fodture.com/"></meta>
        <meta
          name="image"
          content="https://cleveritimages.blob.core.windows.net/images/Fodture-rrss.png"
        ></meta>
        <meta property="og:type" content="product"></meta>
        <meta property="og:url" content="https://www.fodture.com/"></meta>
        <meta
          property="og:title"
          content="Fodture - Restaurantes del futuro"
        ></meta>
        <meta
          property="og:description"
          content="Apoyamos a los restaurantes del país para adaptarse a la nueva normalidad gracias a la tecnología."
        ></meta>
        <meta
          property="og:image"
          content="https://cleveritimages.blob.core.windows.net/images/Fodture-rrss.png"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="628"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://www.fodture.com/"></meta>
        <meta
          property="twitter:title"
          content="Fodture - Restaurantes del futuro "
        ></meta>
        <meta
          property="twitter:description"
          content="Apoyamos a los restaurantes del país para adaptarse a la nueva normalidad gracias a la tecnología."
        ></meta>
        <meta
          property="twitter:image"
          content="https://cleveritimages.blob.core.windows.net/images/Fodture-rrss.png"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:url" content="https://www.fodture.com/"></meta>
        <meta
          name="twitter:title"
          content="Fodture - Restaurantes del futuro "
        ></meta>
        <meta
          name="twitter:description"
          content="Apoyamos a los restaurantes del país para adaptarse a la nueva normalidad gracias a la tecnología."
        ></meta>
        <meta
          name="twitter:image"
          content="https://cleveritimages.blob.core.windows.net/images/Fodture-rrss.png"
        ></meta>
        <link
          rel="image_src"
          href="https://cleveritimages.blob.core.windows.net/images/Fodture-rrss.png"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Header Test</h1>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
    revalidate: 1,
  };
};
