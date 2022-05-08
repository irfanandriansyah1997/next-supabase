import { cx } from '@emotion/css';
import { useCallback, useMemo } from 'react';

import Avatar from '@/components/general/avatar';
import Badge from '@/components/general/badge';
import Icon from '@/components/general/icon';
import Text from '@/components/general/text';
import DropdownTask from '@/components/notes/task/Dropdown';
import type { SimplyTaskEventHandler } from '@/components/notes/types';
import { CATEGORY_ICON, CATEGORY_LABEL } from '@/constant/category';
import { styShimmer } from '@/styles/constant/animation';
import { TodoStatusTaskEnum, TodoTaskType } from '@/types/notes';
import { formattingTime } from '@/utils/general/date';

import { styCheckbox, styTaskListItem, styTaskListItemLoader } from './style';

/**
 * Task List Item Loader
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {JSX.Element} task list item loader html
 */
export const TaskListItemLoader = () => {
  return (
    <div className={styTaskListItemLoader}>
      <div className={cx(styShimmer, 'checkbox')} />
      <div className={cx(styShimmer, 'category')} />
      <div className={cx(styShimmer, 'desc-task')} />
      <div className="badge" />
    </div>
  );
};

interface TaskListItemProps extends TodoTaskType, SimplyTaskEventHandler {
  enableEdit?: boolean;
}

/**
 * Task List Item Component
 *
 * @param {TaskListItemProps} props - component props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} list item html element
 */
const TaskListItem = (props: TaskListItemProps) => {
  const { desc, enableEdit, end, id, on, start, status, tags, type } = props;
  const payload: TodoTaskType = useMemo(
    () => ({
      desc,
      end,
      id,
      start,
      status,
      tags,
      type
    }),
    [desc, end, id, start, status, tags, type]
  );

  /**
   * On Edit Task
   *
   * @description this handler will be invoked when user choose edit task on dropdown item
   * @returns {void}
   */
  const onEditTask = useCallback(() => {
    on({
      payload,
      type: 'edit'
    });
  }, [on, payload]);

  /**
   * On Mark As Done
   *
   * @description this handler will be invoked when user try to mark as done
   * @returns {void}
   */
  const onMarkAsDone = useCallback(() => {
    on({
      payload,
      type: 'mark-as-done'
    });
  }, [on, payload]);

  /**
   * On Mark In Progress
   *
   * @description this handler will be invoked when user try to mark as in progress
   * @returns {void}
   */
  const onMarkInProgress = useCallback(() => {
    on({
      payload,
      type: 'mark-as-in-progress'
    });
  }, [on, payload]);

  /**
   * On Move To Wont Do
   *
   * @description this handler will be invoked when user decide to wont do this task for today
   * @returns {void}
   */
  const onMoveToWontDo = useCallback(() => {
    on({
      payload,
      type: 'move-to-wont-do'
    });
  }, [on, payload]);

  /**
   * On Change Check Value
   *
   * @returns {void}
   */
  const onChangeCheckboxValue = useCallback(() => {
    switch (status) {
      case TodoStatusTaskEnum.Done:
        on({
          payload,
          type: 'mark-as-in-progress'
        });
        break;

      case TodoStatusTaskEnum.InProgress:
      case undefined:
        on({
          payload,
          type: 'mark-as-done'
        });
        break;
    }
  }, [on, payload, status]);

  const descTask = useMemo(() => {
    let response = desc;

    if (tags) {
      response = `<b>[${tags}]</b> ${response}`;
    }

    return response;
  }, [desc, tags]);

  const rangeTime = useMemo(() => {
    return `${formattingTime(start)} - ${formattingTime(end)}`;
  }, [start, end]);

  return (
    <div className={styTaskListItem(status)}>
      <div
        className={styCheckbox(status)}
        onClick={onChangeCheckboxValue}
        role="button"
        tabIndex={0}
        aria-hidden="true"
      />
      <section>
        <div className="category">
          <Avatar
            shape="rectangle"
            size={16}
            alt={CATEGORY_LABEL[type]}
            src={CATEGORY_ICON[type]}
          />
          <Text
            tag="p"
            fontSize="text"
            fontWeight={600}
            color="title"
            lineHeight="preset-6"
          >
            {CATEGORY_LABEL[type]}
          </Text>
        </div>
        <Text
          tag="span"
          fontSize={13}
          fontWeight={400}
          color="text"
          className="desc-task"
          lineHeight="preset-6"
          dangerouslySetInnerHTML={{
            __html: descTask
          }}
        />
      </section>
      <Badge className="badge">{rangeTime}</Badge>
      <DropdownTask
        handlerEditTask={onEditTask}
        handlerMarkAsDone={onMarkAsDone}
        handlerMarkAsInProgress={onMarkInProgress}
        handlerMoveToWontDo={onMoveToWontDo}
        status={status}
        toggle={
          <Icon
            size={20}
            icon="more_horiz"
            className={cx(
              'dropdown-toggle',
              enableEdit && 'dropdown-toggle--active'
            )}
            color={enableEdit ? 'title' : 'text'}
          />
        }
        enableEdit={enableEdit}
      />
    </div>
  );
};

export default TaskListItem;
