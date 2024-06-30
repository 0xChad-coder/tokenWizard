import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/components/ThirdwebProvider";

const inter = Inter({ subsets: ["latin"] });

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "TokenWizard",
  description: "Launchpad for EVM Compatible Blockchains",
};

export const supportedChains = [
  {
    chainId: 82,
    rpc: ["https://meter.blockpi.network/v1/rpc/public"],
    nativeCurrency: {
      decimals: 18,
      name: "Meter",
      symbol: "MTR",
    },
    shortName: "Meter",
    slug: "Meter",
    testnet: true,
    chain: "Meter Mainnet",
    name: "Meter Mainnet",
  },
  {
    chainId: 83,
    rpc: ["https://rpctest.meter.io"],
    nativeCurrency: {
      decimals: 18,
      name: "Meter",
      symbol: "MTR",
    },
    shortName: "Meter Testnet",
    slug: "Meter Testnet",
    testnet: true,
    chain: "Meter Testnet",
    name: "Meter Testnet",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider
          supportedChains={supportedChains}
          clientId="cf365aafc1e9ada6f98edcf72ebf6bdc"
          s
        >
          {children}
        </ThirdwebProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
