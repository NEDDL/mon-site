import SiteLayout from "../components/Layout";
import { GlobalStyle } from "../globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  );
}

export default MyApp;
