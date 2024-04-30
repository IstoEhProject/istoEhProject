import theme from "@/core/theme/";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "./Layout"; // Importe o layout
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}