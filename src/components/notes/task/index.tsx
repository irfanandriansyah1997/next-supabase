import { memo } from 'react';
import Masonry from 'react-masonry-css';

import { SimplyTaskEventHandler } from '@/components/notes/types';
import { TASK_LOADER_ITEM } from '@/constant/task';
import type { TaskLayout, TodoTaskType } from '@/types/notes';

import TaskCardItem, { TaskCardItemLoader } from './Card';
import TaskListItem, { TaskListItemLoader } from './List';
import { styTaskGrid, styTaskList } from './style';

/**
 * Task List Props Interface
 *
 * @since 0.0.0
 */
interface TaskListProps extends SimplyTaskEventHandler {
  loading?: boolean;
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
  const { loading, on, tasks, template } = props;

  return (
    <>
      {template === 'list' && (
        <div className={styTaskList}>
          {loading &&
            TASK_LOADER_ITEM.map((_, index) => (
              <TaskListItemLoader key={`loader-list-${index}`} />
            ))}
          {!loading &&
            tasks.map((item, index) => (
              <TaskListItem
                key={`${item.desc}-${item.type}-${index}-card`}
                {...item}
                on={on}
              />
            ))}
        </div>
      )}
      {template === 'grid' && (
        <Masonry breakpointCols={2} className={styTaskGrid}>
          {loading &&
            TASK_LOADER_ITEM.map((_, index) => (
              <TaskCardItemLoader key={`loader-card-${index}`} />
            ))}
          {!loading &&
            tasks.map((item, index) => (
              <TaskCardItem
                key={`${item.desc}-${item.type}-${index}-grid`}
                {...item}
                on={on}
              />
            ))}
        </Masonry>
      )}
    </>
  );
};

export default memo(TaskList);
