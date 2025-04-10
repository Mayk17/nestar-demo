import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("Document -Pager Router");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo"/>
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
      
      {/**SEO */}
      
        <meta name="keyword" content={"nestar, nestart.uz, devex mern, ,merm nestjs fullstack"} />
        <meta name="description" content={" Buy and sell properties anywhere anytime in South Korea |" +
          "한국에서 언제 어디서나 부동산을 사고팔 수 있습니다. |" + "Покупайте и продавайте недвижимость в любом месте и в любое время в Южной Корее"
        }/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
