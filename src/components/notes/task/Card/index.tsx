import { cx } from '@emotion/css';
import { useCallback, useMemo } from 'react';

import Avatar from '@/components/general/avatar';
import Badge from '@/components/general/badge';
import Icon from '@/components/general/icon';
import Text from '@/components/general/text';
import DropdownTask from '@/components/notes/task/Dropdown';
import type { SimplyTaskEventHandler } from '@/components/notes/types';
import { CATEGORY_ICON, CATEGORY_LABEL } from '@/constant/category';
import { TodoStatusTaskEnum, TodoTaskType } from '@/types/notes';
import { formattingTime } from '@/utils/general/date';

import { styTaskCardItem } from './style';

interface TaskGridItemProps extends TodoTaskType, SimplyTaskEventHandler {
  enableEdit?: boolean;
}
/**
 * Task Card Item
 *
 * @param {TaskGridItemProps} props - component props
 * @since 0.0.0
 * @returns {JSX.Element} task card item
 */
const TaskCardItem = (props: TaskGridItemProps) => {
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

  const labelStatus = useMemo(() => {
    switch (status) {
      case TodoStatusTaskEnum.Done:
        return 'Done';

      case TodoStatusTaskEnum.WontDo:
        return "Won't Do";

      default:
        return 'In Progress';
    }
  }, [status]);

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
    <div className={styTaskCardItem(status)}>
      <div className="dropdown">
        <DropdownTask
          handlerEditTask={onEditTask}
          handlerMarkAsDone={onMarkAsDone}
          handlerMarkAsInProgress={onMarkInProgress}
          handlerMoveToWontDo={onMoveToWontDo}
          status={status}
          toggle={
            <Icon
              size={20}
              icon="more_vert"
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
        tag="h3"
        fontSize="medium"
        fontWeight={400}
        color="title"
        lineHeight="preset-7"
        className="desc-task"
        dangerouslySetInnerHTML={{
          __html: descTask
        }}
      />
      <section className="footer">
        <Text
          tag="span"
          fontSize="text"
          fontWeight={400}
          color="text"
          lineHeight="preset-6"
        >
          {labelStatus}
        </Text>
        <Badge className="badge">{rangeTime}</Badge>
      </section>
    </div>
  );
};

export default TaskCardItem;
