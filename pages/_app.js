import "../styles/tailwind.css";
import "../styles/styles.css";
import "../styles/hamburger.css";
import "../styles/button-animation.css";
import "../styles/home.css";
import Navigation from "../components/Static/Navigation/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
