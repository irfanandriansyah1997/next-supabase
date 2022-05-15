import { memo, useState } from 'react';

import Text from '@/components/general/text';
import { WorksDayTypes } from '@/types/general';
import { getWorksDayOfWeeks } from '@/utils/general/date';

import NotesCalendarItem from './CalendarItem';
import { styNotesCalendar } from './style';

/**
 * Notes Calendar Props Type
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
interface NotesCalendarProps {
  loading: boolean;
  selectedTimestamp: number;
  setSelected(timestamp: number): void;
}

/**
 * Notes Calendar Component
 *
 * @param {NotesCalendarProps} props - component props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes calendar html
 */
const NotesCalendar = (props: NotesCalendarProps) => {
  const { loading, selectedTimestamp, setSelected } = props;
  const [listOfWorkDate] = useState<WorksDayTypes[]>(() =>
    getWorksDayOfWeeks()
  );

  return (
    <div className={styNotesCalendar(loading)}>
      <Text
        className="heading"
        tag="h1"
        fontSize="medium"
        fontWeight={700}
        color="title"
        lineHeight="preset-6"
      >
        Calendar
      </Text>
      <div>
        {listOfWorkDate.map(
          ({ dateText, dayText, isToday, monthText, timestamp }) => (
            <NotesCalendarItem
              key={timestamp}
              date={dateText}
              month={monthText}
              day={dayText}
              isToday={isToday}
              isActive={timestamp === selectedTimestamp}
              timestamp={timestamp}
              onClick={setSelected}
            />
          )
        )}
      </div>
    </div>
  );
};

export default memo(NotesCalendar);
