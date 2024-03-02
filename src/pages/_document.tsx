import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content={`Ikigai Labs XYZ Frame`} />
        <meta property="og:image" content={`/good.png`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeibh2pki7uvifrhak36u45r4dy5w66chvzzayja4ndqp6i4wu2eb4m/0.png`} />
        <meta property="fc:frame:post_url" content={`/good.png`} />
        <meta property="fc:frame:button:1" content="GM.LFG" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
