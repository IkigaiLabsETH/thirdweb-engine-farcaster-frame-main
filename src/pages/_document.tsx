import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content={`Ikigai Labs XYZ Frame`} />
        <meta property="og:image" content={`/good.png>`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`1:1`} />
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
