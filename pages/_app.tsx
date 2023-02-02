import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import mailgo from "mailgo";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import theme from "../utils/theme";

const mailgoConfig = {
  showFooter: false,
};

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    mailgo(mailgoConfig);
  }, []);

  const router = useRouter();

  return (
    <ChakraProvider cssVarsRoot="#app" theme={theme}>
      <SkipNavLink>Skip to content</SkipNavLink>
      <SkipNavContent>
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </SkipNavContent>
    </ChakraProvider>
  );
}
