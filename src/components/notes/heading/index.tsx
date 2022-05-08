import { cx } from '@emotion/css';
import { memo, useCallback, useMemo } from 'react';

import Icon from '@/components/general/icon';
import Text from '@/components/general/text';
import { MEDIUM_FONT_SIZE } from '@/styles/constant/typography';
import { TodoStatusTaskEnum, UIConfigType } from '@/types/notes';

import { styNotesHeading, styNotesNavigation } from './style';

const TEMPLATE_SECTION = [
  { icon: 'view_headline', template: 'list' },
  { icon: 'grid_view', template: 'grid' }
];

const SELECTION_PRESET = ['All', 'Done', 'In Progress', 'Wont Do'];

interface NotesNavigationProps {
  active: number;
  id: number;
  setSelection(id: number): void;
  text: string;
}

/**
 * Notes Navigation Component
 *
 * @param {NotesNavigationProps} props - note navigation props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes navigation html
 */
let NotesNavigation = (props: NotesNavigationProps) => {
  const { active, id, setSelection, text } = props;

  /**
   * On Click Navigation Item
   *
   * @returns {void}
   */
  const onClickNavigationItem = useCallback(() => {
    setSelection(id);
  }, [id, setSelection]);

  return (
    <li className={cx(active === id && 'active')}>
      <Text
        tag="p"
        fontSize="text"
        fontWeight={500}
        lineHeight="preset-1"
        className="link"
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onClick={onClickNavigationItem}
      >
        {text}
      </Text>
    </li>
  );
};

interface NotesHeadingProps extends UIConfigType {
  onClickCreateTask(): void;
  selectedTimestamp: number;
  setUIConfig(param: Partial<UIConfigType>): void;
}

/**
 * Notes Heading
 *
 * @param {NotesHeadingProps} props notes heading props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes heading html
 */
const NotesHeading = (props: NotesHeadingProps) => {
  const {
    onClickCreateTask,
    selectedTimestamp,
    selection,
    setUIConfig,
    template
  } = props;

  /**
   * on Select Section
   *
   * @param {number} selected - index option from navigation item
   * @returns {void}
   */
  const onSelectSection = useCallback(
    (selected: TodoStatusTaskEnum) => {
      if (
        [
          TodoStatusTaskEnum.All,
          TodoStatusTaskEnum.WontDo,
          TodoStatusTaskEnum.Done,
          TodoStatusTaskEnum.InProgress
        ].includes(selected)
      )
        setUIConfig({
          selection: selected as TodoStatusTaskEnum
        });
    },
    [setUIConfig]
  );

  const enableCreateTask = useMemo(() => {
    const selectedDate = new Date(selectedTimestamp);

    if (selectedDate.getDay() !== 0 && selectedDate.getDay() !== 6) return true;

    return false;
  }, [selectedTimestamp]);

  return (
    <>
      <section className={styNotesHeading}>
        <Text
          tag="h1"
          fontSize="large"
          fontWeight={700}
          color="title"
          lineHeight="preset-6"
        >
          Todo List 📌
        </Text>
        <section>
          {enableCreateTask && (
            <Text
              tag="p"
              fontSize="text"
              fontWeight={500}
              color="title"
              lineHeight="preset-1"
              className="link"
              tabIndex={0}
              role="button"
              aria-hidden="true"
              onClick={onClickCreateTask}
            >
              New Task +
            </Text>
          )}

          {TEMPLATE_SECTION.map(({ icon, template: templateOption }) => (
            <Icon
              key={icon}
              className="icon"
              icon={icon}
              color={template === templateOption ? 'title' : 'text'}
              size={MEDIUM_FONT_SIZE}
              role="button"
              tabIndex={0}
              aria-hidden="true"
              onClick={(e) => {
                e.preventDefault();

                setUIConfig({
                  template: templateOption as 'list' | 'grid'
                });
              }}
            />
          ))}
        </section>
      </section>
      <section className={styNotesNavigation}>
        <ul>
          {SELECTION_PRESET.map((item, id) => (
            <NotesNavigation
              key={item}
              active={selection}
              id={id}
              text={item}
              setSelection={onSelectSection}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default memo(NotesHeading);
