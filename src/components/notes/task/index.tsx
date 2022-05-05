import { memo, useMemo, useRef } from 'react';
import Masonry from 'react-masonry-css';

import { SimplyTaskEventHandler } from '@/components/notes/types';
import type { TaskLayout, TodoTaskType } from '@/types/notes';
import { getCurrentTimestamp } from '@/utils/general/date';

import TaskCardItem from './Card';
import TaskListItem from './List';
import { styTaskGrid, styTaskList } from './style';

/**
 * Task List Props Interface
 *
 * @since 0.0.0
 */
interface TaskListProps extends SimplyTaskEventHandler {
  selectedDate: number;
  tasks: TodoTaskType[];
  template: TaskLayout;
}

/**
 * Task List Component
 *
 * @param {TaskListProps} props - props pass from parent component
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} task list html element
 */
const TaskList = (props: TaskListProps) => {
  const { on, selectedDate, tasks, template } = props;
  const currentDate = useRef(getCurrentTimestamp());

  const isEnableEdit = useMemo(() => {
    return selectedDate >= currentDate.current;
  }, [selectedDate]);

  return (
    <>
      {template === 'list' && (
        <div className={styTaskList}>
          {tasks.map((item, index) => (
            <TaskListItem
              key={`${item.desc}-${item.type}-${index}-card`}
              {...item}
              on={on}
              enableEdit={isEnableEdit}
            />
          ))}
        </div>
      )}
      {template === 'grid' && (
        <Masonry breakpointCols={2} className={styTaskGrid}>
          {tasks.map((item, index) => (
            <TaskCardItem
              key={`${item.desc}-${item.type}-${index}-grid`}
              {...item}
              on={on}
              enableEdit={isEnableEdit}
            />
          ))}
        </Masonry>
      )}
    </>
  );
};

export default memo(TaskList);
