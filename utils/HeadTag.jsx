import Head from "next/head";

const HeadTag = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="./favicon.ico" />
    </Head>
  );
};

export default HeadTag;
