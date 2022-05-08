import { cx } from '@emotion/css';
import { InputHTMLAttributes, ReactNode } from 'react';

import Text from '@/components/general/text';

import { styTextfield, styTextfieldWrapper } from './style';

interface DefaultTextfieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {}

/**
 * Text Field Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
interface TextfieldProps extends DefaultTextfieldProps {
  classNameInput?: string;
  classNameWrapper?: string;
  error?: string;
  isRequired?: boolean;
  label: string;
  message?: ReactNode;
}

/**
 * Text Field Component
 *
 * @param {TextfieldProps} props - textfield props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} text field html element
 */
const Textfield = (props: TextfieldProps) => {
  const {
    classNameInput,
    classNameWrapper,
    error,
    isRequired,
    label,
    message,
    name,
    ...res
  } = props;

  return (
    <div className={cx(styTextfieldWrapper, classNameWrapper)}>
      <label htmlFor={name}>
        <Text tag="p" fontSize="normal" fontWeight={600} color="title">
          {isRequired && <span>*&nbsp;</span>}
          {label}
        </Text>
      </label>
      <input
        {...res}
        name={name}
        id={name}
        className={cx(styTextfield, classNameInput)}
      />

      <Text
        className="message"
        tag="p"
        fontSize="small"
        fontWeight={400}
        lineHeight="preset-7"
        color={error ? 'red' : 'text'}
      >
        {error ? error : message}
      </Text>
    </div>
  );
};

export default Textfield;
