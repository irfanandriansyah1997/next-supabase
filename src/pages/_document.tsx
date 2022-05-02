import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { extractEmotionSSR } from '@/utils/emotion';

/**
 * App Document
 *
 * @since 0.0.0
 */
class AppDocument extends Document {
  /**
   * Get Initial Props
   *
   * @param {DocumentContext} ctx - default document context (this context only accessible on SSR)
   * @returns {Promise<DocumentInitialProps>} initial props will be use on every page
   */
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const page = await ctx.renderPage();
    const { css, ids } = extractEmotionSSR(page.html);
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles-emotion">
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      ]
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://public.urbanindo.com/fonts/Avenir/stylesheet.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
