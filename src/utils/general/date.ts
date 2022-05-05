import type { WorksDayTypes } from '@/types/general';

const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const DAY = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

/**
 * Get Works Day Of Week
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {WorksDayTypes[]} list of date from monday until friday
 */
export const getWorksDayOfWeeks = (): WorksDayTypes[] => {
  let response: WorksDayTypes[] = [];
  const today = new Date();

  new Array(5).fill(0).forEach((_, index) => {
    const date = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay() + index + 1
    );
    const selectedDate = `${date.getDate()}`;

    response.push({
      date,
      dateText: selectedDate.length === 1 ? `0${selectedDate}` : selectedDate,
      dayText: DAY[date.getDay()],
      isToday: today.getDate() - today.getDay() + index + 1 === today.getDate(),
      monthText: MONTH[date.getMonth()],
      timestamp: date.getTime()
    });
  });

  return response;
};

/**
 * Get Current Timestamps
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {number} current timestamp from `new Date().getTime()`
 */
export const getCurrentTimestamp = (): number => {
  const today = new Date();

  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  ).getTime();
};
