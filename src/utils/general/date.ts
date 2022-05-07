import type { Maybe, WorksDayTypes } from '@/types/general';

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

const getDaysObject = (date: Date): WorksDayTypes => {
  const selectedDate = `${date.getDate()}`;

  return {
    date,
    dateText: selectedDate.length === 1 ? `0${selectedDate}` : selectedDate,
    dayText: DAY[date.getDay()],
    isToday: false,
    monthText: MONTH[date.getMonth()],
    timestamp: date.getTime()
  };
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

    response.push({
      ...getDaysObject(date),
      isToday: today.getDate() - today.getDay() + index + 1 === today.getDate()
    });
  });

  return response;
};

/**
 * Get Current Timestamps
 * Get Minutes From Time Text
 *
 * @param {string} time - time text with format hh:mm ex. 10:00
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {number} extracted minutes from time text
 */
export const getMinutesFromTimeText = (time: string): number => {
  try {
    const [hours, minutes] = time.split(':');

    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  } catch {
    return 0;
  }
};

/**
 * Formatting Time Text
 *
 * @param {string} time - time text
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {number} formatted time
 */
export const formattingTime = (time: string): string => {
  try {
    let response: string = '';
    const [hours, minutes] = time.split(':');
    let intHours = parseInt(hours, 10);

    if (intHours < 13) {
      const selectedHours = `${intHours}`;
      response =
        selectedHours.length === 1 ? `0${selectedHours}` : `${selectedHours}`;
    } else {
      const selectedHours = `${intHours - 12}`;
      response =
        selectedHours.length === 1 ? `0${selectedHours}` : `${selectedHours}`;
    }

    const selectedMinutes = minutes.length === 1 ? `0${minutes}` : `${minutes}`;
    response = `${response}:${selectedMinutes}`;

    if (intHours < 12) response = `${response}am`;
    else response = `${response}pm`;

    return response;
  } catch {
    return '-';
  }
};

/**
 * Get Current Hours
 *
 * @param {Maybe<number>} additionalHours - additional hours
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {string} current hours
 */
export const getCurrentHours = (
  additionalHours: Maybe<number> = undefined
): string => {
  const today = new Date();

  if (additionalHours !== undefined)
    return `${
      today.getUTCHours() + 7 + additionalHours
    }:${today.getUTCMinutes()}`;

  return `${today.getUTCHours() + 7}:${today.getUTCMinutes()}`;
};

interface GetWeeksInMonthItemType {
  date: Date;
  timestamp: number;
}

interface GetWeeksInMonthType {
  dates: GetWeeksInMonthItemType[];
  end: GetWeeksInMonthItemType;
  start: GetWeeksInMonthItemType;
}

/**
 * Get Weeks In Month
 *
 * @param {number} year - selected year
 * @param {number} month - selected month, with the january equal 0 and december equal 11
 * @returns {GetWeeksInMonthType[]} list of weeks on selected year and month
 */
export const getWeeksInMonth = (
  year: number,
  month: number
): GetWeeksInMonthType[] => {
  const weeks: number[][] = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate.getDate();

  let dayOfWeekCounter = firstDate.getDay();

  for (let date = 1; date <= numDays; date++) {
    if (dayOfWeekCounter === 0 || weeks.length === 0) {
      weeks.push([]);
    }

    weeks[weeks.length - 1].push(date);
    dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  }

  return weeks
    .filter((w) => !!w.length)
    .map((w) => {
      const response = w
        .map((item): GetWeeksInMonthItemType => {
          return {
            date: new Date(year, month, item),
            timestamp: new Date(year, month, item).getTime()
          };
        })
        .filter((item) => {
          return item.date.getDay() !== 0 && item.date.getDay() !== 6;
        });

      return {
        dates: response,
        end: response[response.length - 1],
        start: response[0]
      };
    });
};

/**
 * Get Minutes From Time Text
 *
 * @param {string} time - time text with format hh:mm ex. 10:00
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {number} extracted minutes from time text
 */
export const getMinutesFromTimeText = (time: string): number => {
  try {
    const [hours, minutes] = time.split(':');

    return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
  } catch {
    return 0;
  }
};

/**
 * Formatting Time Text
 *
 * @param {string} time - time text
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {number} formatted time
 */
export const formattingTime = (time: string): string => {
  try {
    let response: string = '';
    const [hours, minutes] = time.split(':');
    let intHours = parseInt(hours, 10);

    if (intHours < 13) {
      const selectedHours = `${intHours}`;
      response =
        selectedHours.length === 1 ? `0${selectedHours}` : `${selectedHours}`;
    } else {
      const selectedHours = `${intHours - 12}`;
      response =
        selectedHours.length === 1 ? `0${selectedHours}` : `${selectedHours}`;
    }

    const selectedMinutes = minutes.length === 1 ? `0${minutes}` : `${minutes}`;
    response = `${response}:${selectedMinutes}`;

    if (intHours < 12) response = `${response}am`;
    else response = `${response}pm`;

    return response;
  } catch {
    return '-';
  }
};

/**
 * Get Current Hours
 *
 * @param {Maybe<number>} additionalHours - additional hours
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {string} current hours
 */
export const getCurrentHours = (
  additionalHours: Maybe<number> = undefined
): string => {
  const today = new Date();

  if (additionalHours !== undefined)
    return `${
      today.getUTCHours() + 7 + additionalHours
    }:${today.getUTCMinutes()}`;

  return `${today.getUTCHours() + 7}:${today.getUTCMinutes()}`;
};
