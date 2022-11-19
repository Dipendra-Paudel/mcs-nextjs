import { Fragment } from "react";
import Footer from "../components/Static/Footer/Footer";
import "../styles/tailwind.css";
import "../styles/styles.css";
import "../styles/hamburger.css";
import "../styles/button-animation.css";
import "../styles/home.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
