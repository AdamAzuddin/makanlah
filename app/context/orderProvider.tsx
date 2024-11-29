//orderProvider page:
import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { OrderProvider } from "./order"; // Import the correct OrderProvider from your context

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  );
};

export default MyApp;
