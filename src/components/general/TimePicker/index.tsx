import {
  LegacyRef,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import TimeKeeper, { TimeOutput } from 'react-timekeeper';

import { Maybe } from '@/types/general';
import { formattingTime, getMinutesFromTimeText } from '@/utils/general/date';

import Dropdown from '../dropdown';
import Textfield from '../textfield';
import { styTimePicker } from './style';

/**
 * Time Picker Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface TimePickerProps {
  afterTime?: string;
  beforeTime?: string;
  className?: string;
  isRequired?: boolean;
  label: string;
  name: string;
  onChangeValue(name: string, time: string): void;
  value: string;
}

/**
 * Time Picker Component
 *
 * @param {TimePickerProps} props - component props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} time picker html element
 */
const TimePicker = (props: TimePickerProps) => {
  const {
    afterTime,
    beforeTime,
    className,
    isRequired,
    label,
    name,
    onChangeValue,
    value
  } = props;
  const [openDropdown, toggleDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>();

  const formattedTime = useMemo(() => {
    return formattingTime(value);
  }, [value]);

  useEffect(() => {
    /**
     * Handler Mouse Event
     *
     * @param {MouseEvent<HTMLElement>} e - event handler when user try to click every element on browser
     * @returns {void}
     */
    const handlerMouseEvent = (e: MouseEvent<HTMLElement>) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        toggleDropdown(false);
      }
    };

    document.addEventListener('mousedown', handlerMouseEvent as any);

    return () =>
      document.removeEventListener('mousedown', handlerMouseEvent as any);
  }, []);

  /**
   * Handler On Change
   *
   * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
   * @description this method will be invoked when user try to change time picker value / do click done button on time picker
   * @returns {void}
   */
  const handlerOnChange = useCallback(
    (param: TimeOutput) => {
      const { formatted24 } = param;
      const selectedMinutes = getMinutesFromTimeText(formatted24);
      const beforeTimeMinutes: Maybe<number> = beforeTime
        ? getMinutesFromTimeText(beforeTime)
        : undefined;

      const afterTimeMinutes: Maybe<number> = afterTime
        ? getMinutesFromTimeText(afterTime)
        : undefined;

      if (
        beforeTimeMinutes !== undefined &&
        selectedMinutes < beforeTimeMinutes
      ) {
        onChangeValue(name, value);
        toggleDropdown(false);
        return;
      }

      if (
        afterTimeMinutes !== undefined &&
        selectedMinutes > afterTimeMinutes
      ) {
        onChangeValue(name, value);
        toggleDropdown(false);
        return;
      }

      onChangeValue(name, formatted24);
      toggleDropdown(false);
    },
    [afterTime, beforeTime, name, onChangeValue, value]
  );

  return (
    <div className={styTimePicker} ref={ref as LegacyRef<HTMLDivElement>}>
      <Dropdown
        open={openDropdown}
        ignoreEventHandler
        toggle={
          <Textfield
            onClick={() => {
              toggleDropdown(true);
            }}
            label={label}
            name={name}
            value={formattedTime}
            classNameWrapper={className}
            isRequired={isRequired}
          />
        }
      >
        <TimeKeeper
          time={value}
          hour24Mode
          switchToMinuteOnHourSelect
          forceCoarseMinutes
          onDoneClick={handlerOnChange}
        />
      </Dropdown>
    </div>
  );
};

export default TimePicker;
