import { useCallback, useMemo, useState } from 'react';

import { CATEGORY_LIST } from '@/constant/category';
import { TASK_LIST } from '@/constant/task';
import { TodoCategoryEnum, UIConfigType } from '@/types/notes';
import { TodoStatusTaskEnum } from '@/types/notes';
import { getCurrentTimestamp } from '@/utils/general/date';

import NotesCalendar from './calendar';
import NotesCategory from './category';
import NotesHeading from './heading';
import { styNotesPage } from './style';
import TaskList from './task';

/**
 * Notes Page Container
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes page container html
 */
const NotesPageContainer = () => {
  const [selectedTimestamp, setSelected] = useState(() =>
    getCurrentTimestamp()
  );
  const [ui, setUIConfig] = useState<UIConfigType>({
    selection: TodoStatusTaskEnum.All,
    template: 'grid'
  });
  const { selection, template } = ui;

  const onSetUIConfig = useCallback(
    (args: Partial<UIConfigType>) => {
      let response = { selection, template };

      if (args.selection !== undefined && args.selection !== selection)
        response.selection = args.selection;

      if (args.template !== undefined && args.template !== template)
        response.template = args.template;

      if (
        (args.selection !== undefined && args.selection !== selection) ||
        (args.template !== undefined && args.template !== template)
      ) {
        setUIConfig(response);
      }
    },
    [selection, template]
  );

  const filterredTaskList = useMemo(() => {
    switch (selection) {
      case TodoStatusTaskEnum.Done:
        return TASK_LIST.filter(
          (item) => item.status === TodoStatusTaskEnum.Done
        );

      case TodoStatusTaskEnum.WontDo:
        return TASK_LIST.filter(
          (item) => item.status === TodoStatusTaskEnum.WontDo
        );

      case TodoStatusTaskEnum.InProgress:
        return TASK_LIST.filter(
          (item) =>
            item.status === TodoStatusTaskEnum.InProgress ||
            item.status === undefined
        );

      case TodoStatusTaskEnum.All:
      default:
        return TASK_LIST;
    }
  }, [selection]);

  const categoryTask = useMemo(() => {
    const countedTaskByCategory = TASK_LIST.reduce(
      (prev, { type }) => {
        switch (type) {
          case TodoCategoryEnum.Bugs:
          case TodoCategoryEnum.DoingTask:
          case TodoCategoryEnum.FollowUp:
          case TodoCategoryEnum.Meeting:
          case TodoCategoryEnum.Slicing:
            return {
              ...prev,
              [type]: prev[type] + 1
            };

          default:
            return prev;
        }
      },
      {
        [TodoCategoryEnum.Bugs]: 0,
        [TodoCategoryEnum.DoingTask]: 0,
        [TodoCategoryEnum.FollowUp]: 0,
        [TodoCategoryEnum.Meeting]: 0,
        [TodoCategoryEnum.Slicing]: 0
      } as Record<TodoCategoryEnum, number>
    );

    return CATEGORY_LIST.map((item) => ({
      ...item,
      count: countedTaskByCategory[item.type]
    }));
  }, []);

  const progressTask = useMemo(() => {
    const isDoneTaskLists = TASK_LIST.filter(
      (item) => item.status === TodoStatusTaskEnum.Done
    );

    return {
      doneTaskCount: isDoneTaskLists.length,
      progressText: `${isDoneTaskLists.length}/${TASK_LIST.length}`,
      taskCount: TASK_LIST.length
    };
  }, []);

  return (
    <div className={styNotesPage}>
      <section className="content">
        <NotesHeading
          selectedDate={selectedTimestamp}
          selection={selection}
          template={template}
          setUIConfig={onSetUIConfig}
        />
        <section className="notes">
          <NotesCategory {...progressTask} categories={categoryTask} />
          <TaskList
            on={console.debug}
            selectedDate={selectedTimestamp}
            template={template}
            tasks={filterredTaskList}
          />
        </section>
      </section>
      <NotesCalendar
        selectedTimestamp={selectedTimestamp}
        setSelected={setSelected}
      />
    </div>
  );
};

export default NotesPageContainer;
