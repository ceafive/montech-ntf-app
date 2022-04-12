import "regenerator-runtime/runtime";

import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
