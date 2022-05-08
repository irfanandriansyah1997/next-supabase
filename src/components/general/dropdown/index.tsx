import { cx } from '@emotion/css';
import {
  LegacyRef,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { CSSTransition } from 'react-transition-group';

import { styDropdown, styDropdownContent } from './style';

/**
 * Dropdown Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface DropdownProps {
  disabled?: boolean;
  ignoreEventHandler?: boolean;
  ltr?: boolean;
  open?: boolean;
  toggle: ReactNode;
}

/**
 * Dropdown Component
 *
 * @param {DropdownProps} props - dropdown props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} dropdown html element
 */
const Dropdown = (props: PropsWithChildren<DropdownProps>) => {
  const {
    children,
    disabled,
    ignoreEventHandler,
    ltr = true,
    open,
    toggle
  } = props;
  const [show, toggleShow] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (open !== undefined) toggleShow(open);
  }, [open]);

  /**
   * On Click Toggle
   *
   * @param {MouseEvent<HTMLElement, MouseEvent>} e - event handler when user try to click toggle element
   * @returns {void}
   */
  const onClickToggle: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();

      if (!disabled && !ignoreEventHandler) {
        toggleShow(!show);
      }
    },
    [disabled, ignoreEventHandler, show]
  );

  useEffect(() => {
    /**
     * Handler Mouse Event
     *
     * @param {MouseEvent<HTMLElement>} e - event handler when user try to click every element on browser
     * @returns {void}
     */
    const handlerMouseEvent = (e: MouseEvent<HTMLElement>) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as HTMLElement) &&
        !ignoreEventHandler
      ) {
        toggleShow(false);
      }
    };

    document.addEventListener('mousedown', handlerMouseEvent as any);

    return () =>
      document.removeEventListener('mousedown', handlerMouseEvent as any);
  }, [ignoreEventHandler]);

  return (
    <div className={styDropdown}>
      <section
        ref={ref as LegacyRef<HTMLDivElement>}
        onClick={onClickToggle}
        role="button"
        tabIndex={0}
        aria-hidden="true"
      >
        {toggle}
      </section>
      <CSSTransition
        in={show}
        timeout={200}
        classNames="fade"
        mountOnEnter
        unmountOnExit
      >
        <section
          className={cx(styDropdownContent)}
          style={{ left: ltr ? 0 : undefined, right: !ltr ? 0 : undefined }}
        >
          {children}
        </section>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
