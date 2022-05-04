import Text from '@/components/general/text';

import { styNotesCalendar, styNotesCalendarItem } from './style';

interface NotesCalendarItemProps {
  date: number;
  day: string;
  isToday?: boolean;
  month: string;
}

/**
 * Notes Calendar Item Component
 *
 * @param {NotesCalendarItemProps} props - notes calendar item props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes calendar item html
 */
const NotesCalendarItem = (props: NotesCalendarItemProps) => {
  const { date, day, isToday, month } = props;

  return (
    <div className={styNotesCalendarItem}>
      <div className="title">
        <Text
          tag="h3"
          fontSize={48}
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
          fontWeight={500}
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

/**
 * Notes Calendar Component
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes calendar html
 */
const NotesCalendar = () => (
  <div className={styNotesCalendar}>
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
    <NotesCalendarItem date={9} month="May" day="Monday" />
    <NotesCalendarItem date={10} month="May" day="Tuesday" isToday />
    <NotesCalendarItem date={11} month="May" day="Wednesday" />
    <NotesCalendarItem date={12} month="May" day="Thursday" />
    <NotesCalendarItem date={13} month="May" day="Friday" />
  </div>
);

export default NotesCalendar;
