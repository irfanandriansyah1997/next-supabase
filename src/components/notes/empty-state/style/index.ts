import { css } from '@emotion/css';

import { SPACING_LEVEL_6 } from '@/styles/constant/spacing';

export const styEmptyState = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: ${SPACING_LEVEL_6} 0;
  padding-right: ${SPACING_LEVEL_6};
`;
