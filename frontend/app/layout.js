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
    chainId: 7701,
    rpc: ["https://testnet-archive.plexnode.wtf"],
    nativeCurrency: {
      decimals: 18,
      name: "Canto",
      symbol: "CANTO",
    },
    shortName: "Canto",
    slug: "Canto",
    testnet: true,
    chain: "Canto Testnet",
    name: "Canto Testnet",
  },
  {
    chainId: 128123,
    rpc: ["https://node.ghostnet.etherlink.com"],
    nativeCurrency: {
      decimals: 18,
      name: "Tezos",
      symbol: "XTZ",
    },
    shortName: "Etherlink",
    slug: "Etherlink",
    testnet: true,
    chain: "Etherlink Testnet",
    name: "Etherlink Testnet",
  },
  {
    chainId: 8082,
    rpc: ["https://sphinx.shardeum.org/"],
    nativeCurrency: {
      decimals: 18,
      name: "Shardeum",
      symbol: "SHM",
    },
    shortName: "Shardeum",
    slug: "Shardeum",
    testnet: true,
    chain: "Shardeum Sphinx",
    name: "Shardeum Sphinx",
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
