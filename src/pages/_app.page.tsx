// import "@/shared/styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "./globals.css";

import theme from "@/core/theme/";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
