import { css } from '@emotion/css';

import { COLOR_PALLETE } from '@/styles/constant/color';

export const stySidebar = css`
  align-items: center;
  background-color: ${COLOR_PALLETE.white};
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  padding: 16px 0;
  position: absolute;
  top: 0;
  width: 75px;

  > ul {
    list-style: none;
    width: 100%;
    margin-top: 32px;
  }

  .sidebar-logout {
    align-items: center;
    bottom: 0;
    display: flex;
    height: 75px;
    justify-content: center;
    position: absolute;
    width: 100%;
  }
`;

export const stySidebarLogo = css`
  width: 50px;
  height: 50px;
  background-color: ${COLOR_PALLETE.primary};
  display: block;
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
  margin: 12px 0;

  &::before {
    background-color: ${COLOR_PALLETE.title};
    content: '';
    height: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
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
