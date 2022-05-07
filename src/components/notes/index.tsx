import { useCallback, useMemo, useState } from 'react';

import { CATEGORY_LIST } from '@/constant/category';
import { TASK_LIST } from '@/constant/task';
import { TodoCategoryEnum, TodoTaskType, UIConfigType } from '@/types/notes';
import { TodoStatusTaskEnum } from '@/types/notes';
import { getCurrentTimestamp } from '@/utils/general/date';

import NotesCalendar from './calendar';
import NotesCategory from './category';
import DialogTask from './DialogTask';
import NotesHeading from './heading';
import { styNotesPage } from './style';
import TaskList from './task';
import { TaskEventHandlerPayload } from './types';

interface DialogToggleTypes {
  mode?: 'create' | 'edit';
  payload?: Partial<TodoTaskType>;
}

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
  const [{ mode, payload }, setToggleDialog] = useState<DialogToggleTypes>({});

  /**
   * On Set UI Config
   *
   * @param {Partial<UIConfigType>} args - ui config preset
   * @returns {void}
   */
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

  /**
   * On Click Create Task
   *
   * @description this method will be invoked when user try to click "create task" on heading component
   * @returns {void}
   */
  const onClickCreateTask = useCallback(() => {
    setToggleDialog({
      mode: 'create',
      payload: {}
    });
  }, []);

  /**
   * On Close Dialog
   *
   * @description this method will be invoked when user try to close or click cancel on dialog task component
   * @returns {void}
   */
  const onCloseDialog = useCallback(() => {
    setToggleDialog({
      mode: undefined,
      payload: {}
    });
  }, []);

  /**
   * On Submit Dialog
   *
   * @param {TodoTaskType} args - form value from dialog task
   * @description this method will be invoked when user try to submit / edit what we've done inputted from dialog task
   * @returns {void}
   */
  const onSubmitTask = useCallback(
    (args: TodoTaskType) => {
      if (mode === 'create') {
        console.debug('create', args);
      } else {
        console.debug('edit', args);
      }
      onCloseDialog();
    },
    [mode, onCloseDialog]
  );

  /**
   * Event Handler Task List Component
   *
   * @param {TaskEventHandlerPayload} args - payload event handler will be invoked from task list component
   * @returns {void}
   */
  const eventHandlerTaskLists = useCallback(
    ({ payload, type }: TaskEventHandlerPayload) => {
      switch (type) {
        case 'edit':
          setToggleDialog({
            mode: 'edit',
            payload
          });
          break;

        default:
          break;
      }
    },
    []
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
          onClickCreateTask={onClickCreateTask}
        />
        <section className="notes">
          <NotesCategory {...progressTask} categories={categoryTask} />
          <TaskList
            on={eventHandlerTaskLists}
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
      <DialogTask
        {...payload}
        onCloseDialog={onCloseDialog}
        mode={mode}
        onSubmit={onSubmitTask}
      />
    </div>
  );
};

export default NotesPageContainer;
