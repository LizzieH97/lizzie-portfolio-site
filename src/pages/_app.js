import "../styles/globals.css"; // Ensure you are importing the global styles
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;