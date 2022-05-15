import loadable from '@loadable/component';
import Head from 'next/head';
import { useCallback, useMemo, useState } from 'react';

import { CATEGORY_LIST } from '@/constant/category';
import { TodoCategoryEnum, TodoTaskType, UIConfigType } from '@/types/notes';
import { TodoStatusTaskEnum } from '@/types/notes';

import { useNotesTask } from './hooks/useNotesTask';
import NotesCalendar from './calendar';
import DayOffMessage from './day-off';
import DialogTask from './dialog-task';
import { styNotesPage } from './style';
import { TaskEventHandlerPayload } from './types';

const NotesCategory = loadable(() => import('./category'));
const TaskList = loadable(() => import('./task'));
const NotesHeading = loadable(() => import('./heading'));

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
  const {
    action: { onCreateTask, onEditStatusTask, onEditTask, setSelectedDate },
    state: { isDayOff, loading, selectedTimestamp, task }
  } = useNotesTask();
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
        onCreateTask(args);
      } else {
        onEditTask(args);
      }
      onCloseDialog();
    },
    [mode, onCloseDialog, onCreateTask, onEditTask]
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

        case 'mark-as-done': {
          if (payload.id !== undefined)
            onEditStatusTask(TodoStatusTaskEnum.Done, payload.id);
          break;
        }

        case 'mark-as-in-progress': {
          if (payload.id !== undefined)
            onEditStatusTask(TodoStatusTaskEnum.InProgress, payload.id);
          break;
        }

        case 'move-to-wont-do': {
          if (payload.id !== undefined)
            onEditStatusTask(TodoStatusTaskEnum.WontDo, payload.id);
          break;
        }

        default:
          break;
      }
    },
    [onEditStatusTask]
  );

  const filterredTaskList = useMemo(() => {
    switch (selection) {
      case TodoStatusTaskEnum.Done:
        return task.filter((item) => item.status === TodoStatusTaskEnum.Done);

      case TodoStatusTaskEnum.WontDo:
        return task.filter((item) => item.status === TodoStatusTaskEnum.WontDo);

      case TodoStatusTaskEnum.InProgress:
        return task.filter(
          (item) =>
            item.status === TodoStatusTaskEnum.InProgress ||
            item.status === undefined
        );

      case TodoStatusTaskEnum.All:
      default:
        return task;
    }
  }, [selection, task]);

  const categoryTask = useMemo(() => {
    const countedTaskByCategory = task.reduce(
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
  }, [task]);

  const progressTask = useMemo(() => {
    const isDoneTaskLists = task.filter(
      (item) => item.status === TodoStatusTaskEnum.Done
    );

    return {
      doneTaskCount: isDoneTaskLists.length,
      progressText: `${isDoneTaskLists.length}/${task.length}`,
      taskCount: task.length
    };
  }, [task]);

  return (
    <div className={styNotesPage}>
      <Head>
        <title>Daily Task</title>
      </Head>
      {isDayOff ? (
        <DayOffMessage />
      ) : (
        <section className="content">
          <NotesHeading
            selectedTimestamp={selectedTimestamp}
            selection={selection}
            template={template}
            setUIConfig={onSetUIConfig}
            onClickCreateTask={onClickCreateTask}
          />
          <section className="notes">
            <NotesCategory
              {...progressTask}
              categories={categoryTask}
              loading={loading}
            />
            <TaskList
              on={eventHandlerTaskLists}
              template={template}
              tasks={filterredTaskList}
              loading={loading}
            />
          </section>
        </section>
      )}
      <NotesCalendar
        selectedTimestamp={selectedTimestamp}
        setSelected={setSelectedDate}
        loading={loading}
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
