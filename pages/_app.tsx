import "regenerator-runtime/runtime";

import { ThirdwebWeb3Provider, ThirdwebWeb3ProviderProps } from "@3rdweb/hooks";
// import { ThirdwebProvider } from "@3rdweb/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}

const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
};

interface ProviderProps extends ThirdwebWeb3ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    // @ts-ignore
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <React.Fragment>{children}</React.Fragment>
    </ThirdwebWeb3Provider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
