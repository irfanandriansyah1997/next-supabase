import type { TodoTaskType } from '@/types/notes';

import { getMinutesFromTimeText } from './date';

/**
 * Sorting Bunch Of Tasks Based On Start Time
 *
 * @param {TodoTaskType[]} tasks - list of task
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {TodoTaskType[]} sorting task list
 */
export const sortTaskBasedOnTimes = (tasks: TodoTaskType[]): TodoTaskType[] => {
  return tasks.sort((prev, current) => {
    const { start: time1 } = prev;
    const { start: time2 } = current;

    let minutes1 = getMinutesFromTimeText(time1);
    let minutes2 = getMinutesFromTimeText(time2);
    return minutes1 - minutes2;
  });
};
