import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';

interface ExtractEmotionSSRTypes {
  css: string;
  html: string;
  ids: string[];
}

/**
 * Extract Emotion SSR
 *
 * @param {string | undefined} html -  html raw from next ssr
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {RenderEmotionSSRTypes} get css and ids from emotion server
 */
export const extractEmotionSSR = (
  html: string | undefined
): ExtractEmotionSSRTypes => {
  if (!html) {
    throw new Error('did you forget to return html from renderToString?');
  }

  const { extractCritical } = createEmotionServer(cache);
  const { css, ids } = extractCritical(html);

  return { css, html, ids };
};
