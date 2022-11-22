import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key={1}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="title"
            content="IFPE Open Source | Comunidade open source do IFPE"
          />
          <meta
            name="description"
            content="Comunidade de tecnologia e computação do Instituto Federal de Pernambuco."
          />

          <meta
            itemProp="name"
            content="IFPE Open Source | Comunidade open source do IFPE - Campus Recife"
          />
          <meta
            itemProp="description"
            content="Comunidade de tecnologia e computação do Instituto Federal de Pernambuco."
          />
          <meta
            itemProp="image"
            content="https://ifpeopensource.com.br/social_image.png"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://ifpeopensource.com.br/" />
          <meta
            property="og:title"
            content="IFPE Open Source | Comunidade open source do IFPE"
          />
          <meta
            property="og:description"
            content="Comunidade de tecnologia e computação do Instituto Federal de Pernambuco."
          />
          <meta
            property="og:image"
            content="https://ifpeopensource.com.br/social_image.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://ifpeopensource.com.br/"
          />
          <meta
            property="twitter:title"
            content="IFPE Open Source | Comunidade open source do IFPE"
          />
          <meta
            property="twitter:description"
            content="Comunidade de tecnologia e computação do Instituto Federal de Pernambuco."
          />
          <meta
            property="twitter:image"
            content="https://ifpeopensource.com.br/social_image.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
