import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';
import { SPACING_LEVEL_4, SPACING_LEVEL_7 } from '@/styles/constant/spacing';
import { EASE_IN_OUT } from '@/styles/constant/transition';

export const stySidebar = css`
  align-items: center;
  background-color: ${COLOR_PALLETE.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  padding: 12px 0;
  position: absolute;
  top: 0;
  width: 75px;

  > ul {
    list-style: none;
    width: 100%;
    margin-top: ${SPACING_LEVEL_7};
  }

  .sidebar-logout {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 60px;
    justify-content: center;
    position: absolute;
    width: 100%;
  }
`;

export const stySidebarLogo = css`
  width: 32px;
  height: 32px;
  background-color: ${COLOR_PALLETE.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const stySidebarItem = css`
  align-items: center;
  display: flex;
  color: ${COLOR_PALLETE.text};
  height: 50px;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  margin: ${SPACING_LEVEL_4} 0;
  transition: all ${EASE_IN_OUT} 0.3s;

  &::before {
    background-color: ${COLOR_PALLETE.title};
    content: '';
    height: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    transition: all ${EASE_IN_OUT} 0.3s;
    width: 3px;
  }

  &.sidebar-item--active,
  &:hover {
    color: ${COLOR_PALLETE.title};

    &::before {
      opacity: 1;
    }
  }
`;
