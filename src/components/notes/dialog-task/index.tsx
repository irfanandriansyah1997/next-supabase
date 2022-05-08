import { useFormik } from 'formik';
import { useCallback, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { object, string } from 'yup';

import Text from '@/components/general/text';
import Textfield from '@/components/general/textfield';
import TimePicker from '@/components/general/time-picker';
import { withReactPortal } from '@/hoc/portal';
import { fadeAnimaton } from '@/styles/constant/animation';
import {
  TodoCategoryEnum,
  TodoStatusTaskEnum,
  TodoTaskType
} from '@/types/notes';

import { styDialogTask, styDialogTaskBackdrop } from './style';
import StatusDropdown from './type-task-dropdown';

/**
 * Dialog Task Props Interface
 *
 * @since 0.0.0
 */
interface DialogTaskProps extends Partial<TodoTaskType> {
  mode?: 'create' | 'edit';
  onCloseDialog(): void;
  onSubmit(args: TodoTaskType): void;
}

/**
 * Dialog Task Component
 *
 * @param {DialogTaskProps} props - component props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} dialog task html element
 */
const DialogTask = (props: DialogTaskProps) => {
  const {
    desc,
    end,
    id,
    mode,
    onCloseDialog: onCloseDialogProps,
    onSubmit: onSubmitProps,
    start,
    status,
    tags,
    type
  } = props;
  const {
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
    values
  } = useFormik<TodoTaskType>({
    initialValues: {
      desc: '',
      end: '09:00',
      id: undefined,
      start: '08:00',
      status: TodoStatusTaskEnum.All,
      tags: undefined,
      type: TodoCategoryEnum.Bugs
    },
    onSubmit: (form) => {
      onSubmitProps(form);
      resetForm();
    },
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: object().shape({
      desc: string()
        .min(2, 'Description Task Too Short!')
        .max(50, 'Description Task Too Long!')
        .required('Description Task Is Required'),
      tags: string().min(2, 'Tags Too Short!').max(50, 'Tags Too Long!')
    })
  });

  useEffect(() => {
    if (desc) setFieldValue('desc', desc);
    if (end) setFieldValue('end', end);
    if (id) setFieldValue('id', id);
    if (start) setFieldValue('start', start);
    if (status) setFieldValue('status', status);
    if (tags) setFieldValue('tags', tags);
    if (type) setFieldValue('type', type);
  }, [desc, end, id, setFieldValue, start, status, tags, type]);

  /**
   * On Change Task Type
   *
   * @param {TodoCategoryEnum} param - selected category
   * @returns {void}
   */
  const onChangeTaskType = useCallback(
    (param: TodoCategoryEnum) => {
      setFieldValue('type', param);
    },
    [setFieldValue]
  );

  /**
   * On Change Time Range
   *
   * @param {string} name - key name, start / end
   * @param {string} value - selected times, the format text value will be hh:mm
   * @returns {void}
   */
  const onChangeTimeRange = useCallback(
    (name: string, value: string) => {
      setFieldValue(name, value);
    },
    [setFieldValue]
  );

  /**
   * On Close Dialog
   *
   * @description this method will be invoked when user try to close or click cancel on dialog task component
   * @returns {void}
   */
  const onCloseDialog = useCallback(() => {
    onCloseDialogProps();
    resetForm();
  }, [onCloseDialogProps, resetForm]);

  return (
    <div className={fadeAnimaton}>
      <CSSTransition
        in={mode !== undefined}
        timeout={200}
        classNames="fade"
        mountOnEnter
        unmountOnExit
      >
        <div className={styDialogTaskBackdrop} />
      </CSSTransition>
      <CSSTransition
        in={mode !== undefined}
        timeout={200}
        classNames="fade"
        mountOnEnter
        unmountOnExit
      >
        <div className={styDialogTask}>
          <form onSubmit={handleSubmit}>
            <div className="heading">
              <Text
                tag="h1"
                fontSize="large"
                fontWeight={700}
                color="title"
                lineHeight="preset-10"
              >
                Create Task 📌
              </Text>
            </div>
            <div className="content">
              <Textfield
                type="text"
                placeholder="Fill task description"
                name="desc"
                label="Description"
                isRequired
                value={values.desc}
                onChange={handleChange}
                error={errors.desc}
              />
              <section className="custom-field">
                <Textfield
                  type="text"
                  classNameWrapper="custom-field__item"
                  placeholder="Fill tags task"
                  name="tags"
                  label="Tags"
                  value={values.tags}
                  onChange={handleChange}
                  error={errors.tags}
                  message={
                    <>
                      You can set that field related specified{' '}
                      <b>service or workgroup ex: atreus, wg-tracker etc</b>
                    </>
                  }
                />
                <StatusDropdown
                  typeTask={values.type}
                  onChange={onChangeTaskType}
                />
              </section>
              <section className="half-field">
                <TimePicker
                  label="Start Time"
                  name="start"
                  value={values.start}
                  isRequired
                  className="half-field__item"
                  afterTime={values.end}
                  onChangeValue={onChangeTimeRange}
                />
                <TimePicker
                  label="End Time"
                  name="end"
                  value={values.end}
                  isRequired
                  beforeTime={values.start}
                  className="half-field__item"
                  onChangeValue={onChangeTimeRange}
                />
              </section>
            </div>
            <div className="footer">
              <button
                type="button"
                className="secondary"
                onClick={onCloseDialog}
              >
                Cancel
              </button>
              <button type="submit" className="primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </CSSTransition>
    </div>
  );
};

export default withReactPortal(DialogTask);
