import { css } from '@emotion/css';

import { SPACING_LEVEL_4 } from '@/styles/constant/spacing';

export const styBreadcrumb = css`
  align-items: center;
  display: flex;

  .breadcrumb-icon {
    width: 14px;
    height: 14px;
    display: block;
    margin: 0 ${SPACING_LEVEL_4};
  }
`;
