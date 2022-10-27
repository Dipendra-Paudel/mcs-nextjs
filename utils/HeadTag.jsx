import Head from "next/head";

const HeadTag = ({ title, keywords, description, ogImage }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="author" content="Dipendra Paudel" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
};

export default HeadTag;
