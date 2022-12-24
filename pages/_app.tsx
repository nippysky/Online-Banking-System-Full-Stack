import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollUp from "../components/ScrollUp";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextNProgress
        color="#202124"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
      <ScrollUp />
    </SessionProvider>
  );
}
