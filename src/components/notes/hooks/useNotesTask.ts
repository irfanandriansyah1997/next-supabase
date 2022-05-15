import { useCallback, useEffect, useMemo, useState } from 'react';

import { useUser } from '@/context/user';
import { Maybe } from '@/types/general';
import { TodoStatusTaskEnum, TodoTaskType } from '@/types/notes';
import {
  getCurrentTimestamp,
  isDayOff as isDayOffValidator
} from '@/utils/general/date';

/**
 * Use Notes Task
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description custom hooks for providing notes functionality
 * @returns {object} bla bla
 */
export const useNotesTask = () => {
  const { userId } = useUser();
  const [selectedTimestamp, setSelected] = useState(() =>
    getCurrentTimestamp()
  );
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState<TodoTaskType[]>([]);

  /**
   * Set Selected Date
   *
   * @param {number} timestamp - new selected timestamp
   * @returns {void}
   */
  const setSelectedDate = useCallback((timestamp: number) => {
    setSelected((prevTimestamp) => {
      if (prevTimestamp !== timestamp) return timestamp;

      return prevTimestamp;
    });
  }, []);

  const mergeListOfTask = useCallback(
    (selectedTask: Maybe<TodoTaskType>, type: 'edit' | 'create') => {
      if (selectedTask) {
        if (type === 'edit') {
          if (selectedTask && task.length) {
            let isChanged = false;
            let response: TodoTaskType[] = [];

            task.forEach((item) => {
              if (item.id === selectedTask.id) {
                isChanged = true;
                response.push(selectedTask);
              } else {
                response.push(item);
              }
            });

            if (isChanged) setTask(response);
          } else if (!task.length) {
            setTask([selectedTask]);
          }
        } else if (type === 'create') {
          setTask([...task, selectedTask]);
        }
      }
    },
    [task]
  );

  /**
   * Get Task By Timestamp
   *
   * @param {number} currentTimestamp - selected timestamp
   * @returns {void}
   */
  const getTaskByTimestamp = useCallback(
    async (currentTimestamp: number) => {
      setLoading(true);
      setTask([]);

      try {
        const { getTaskAPI } = await import('@/components/notes/helper/api');

        let response = await getTaskAPI({
          timestamp: currentTimestamp,
          userId
        });
        setLoading(false);
        setTask(response);
      } catch (e) {
        console.error(e);
      }
    },
    [userId]
  );

  /**
   * On Edit Task
   *
   * @param {number} currentTimestamp - selected timestamp
   * @returns {void}
   */
  const onEditTask = useCallback(
    async (args: TodoTaskType) => {
      setLoading(true);

      try {
        const { editTodoAPI } = await import('@/components/notes/helper/api');

        let response = await editTodoAPI({
          task: args,
          timestamp: selectedTimestamp,
          userId
        });
        setLoading(false);
        mergeListOfTask(response, 'edit');
      } catch (e) {
        console.error(e);
      }
    },
    [mergeListOfTask, selectedTimestamp, userId]
  );

  /**
   * On Edit Status Task
   *
   * @param {number} currentTimestamp - selected timestamp
   * @returns {void}
   */
  const onEditStatusTask = useCallback(
    async (status: TodoStatusTaskEnum, id: number) => {
      setLoading(true);

      try {
        const { editTodoStatusAPI } = await import(
          '@/components/notes/helper/api'
        );

        let response = await editTodoStatusAPI({
          id,
          status,
          timestamp: selectedTimestamp,
          userId
        });
        setLoading(false);
        mergeListOfTask(response, 'edit');
      } catch (e) {
        console.error(e);
      }
    },
    [mergeListOfTask, selectedTimestamp, userId]
  );

  /**
   * On Create Task
   *
   * @param {number} currentTimestamp - selected timestamp
   * @returns {void}
   */
  const onCreateTask = useCallback(
    async (args: TodoTaskType) => {
      setLoading(true);

      try {
        const { createTodoAPI } = await import('@/components/notes/helper/api');

        let response = await createTodoAPI({
          task: args,
          timestamp: selectedTimestamp,
          userId
        });
        setLoading(false);
        mergeListOfTask(response, 'create');
      } catch (e) {
        console.error(e);
      }
    },
    [mergeListOfTask, selectedTimestamp, userId]
  );

  const isDayOff = useMemo(() => {
    return isDayOffValidator(new Date(selectedTimestamp));
  }, [selectedTimestamp]);

  useEffect(() => {
    if (selectedTimestamp && !isDayOff) {
      getTaskByTimestamp(selectedTimestamp);
    }
  }, [getTaskByTimestamp, isDayOff, selectedTimestamp]);

  return useMemo(
    () => ({
      action: {
        getTaskByTimestamp,
        onCreateTask,
        onEditStatusTask,
        onEditTask,
        setSelectedDate
      },
      state: {
        isDayOff,
        loading,
        selectedTimestamp,
        task
      }
    }),
    [
      getTaskByTimestamp,
      isDayOff,
      loading,
      onCreateTask,
      onEditStatusTask,
      onEditTask,
      selectedTimestamp,
      setSelectedDate,
      task
    ]
  );
};
