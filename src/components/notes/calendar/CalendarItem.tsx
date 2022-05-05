import { memo, useCallback } from 'react';

import Text from '@/components/general/text';

import { styNotesCalendarItem } from './style';

interface NotesCalendarItemProps {
  date: string;
  day: string;
  isActive?: boolean;
  isToday?: boolean;
  month: string;
  onClick: (timestamp: number) => void;
  timestamp: number;
}

/**
 * Notes Calendar Item Component
 *
 * @param {NotesCalendarItemProps} props - notes calendar item props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes calendar item html
 */
let NotesCalendarItem = (props: NotesCalendarItemProps) => {
  const { date, day, isActive, isToday, month, onClick, timestamp } = props;

  /**
   * On Click Calendar Item
   *
   * @description this method will be invoked when user try to click calendar item
   * @returns {void}
   */
  const onClickCalendarItem = useCallback(() => {
    onClick(timestamp);
  }, [onClick, timestamp]);

  return (
    <div
      className={styNotesCalendarItem(isActive)}
      onClick={onClickCalendarItem}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <div className="title">
        <Text
          tag="h3"
          fontSize={42}
          fontWeight={700}
          color="title"
          lineHeight={60}
          textAlign="center"
        >
          {date}
        </Text>
      </div>
      <section>
        <Text
          tag="span"
          fontSize="text"
          fontWeight={400}
          color="text"
          lineHeight="preset-3"
          className="link"
        >
          {isToday ? 'Today' : month}
        </Text>
        <Text
          tag="p"
          fontSize="normal"
          fontWeight={500}
          color="title"
          lineHeight="preset-6"
          className="link"
        >
          {day}
        </Text>
      </section>
    </div>
  );
};

export default memo(NotesCalendarItem);
