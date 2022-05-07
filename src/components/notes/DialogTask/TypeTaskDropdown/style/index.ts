import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import {
  SPACING_LEVEL_2,
  SPACING_LEVEL_3,
  SPACING_LEVEL_6
} from '@/styles/constant/spacing';

export const styTypeTaskDropdownToggle = css`
  display: flex;
  width: 200px;
  height: 37px;
  align-items: center;
  background: ${COLOR_PALLETE.white};
  border: 1px solid ${COLOR_PALLETE.gray};
  padding: ${SPACING_LEVEL_2} ${SPACING_LEVEL_3};
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  p {
    margin: 0 ${SPACING_LEVEL_3};
    flex: 1;
  }
`;

export const styTypeTaskDropdownWrapper = css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING_LEVEL_6};

  > p {
    margin-bottom: ${SPACING_LEVEL_3};

    > span {
      color: ${COLOR_PALLETE.red};
    }
  }
`;
