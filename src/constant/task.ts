import type { TodoTaskType } from '@/types/notes';
import { TodoCategoryEnum, TodoStatusTaskEnum } from '@/types/notes';
import { sortTaskBasedOnTimes } from '@/utils/general/task';

export let TASK_LIST: TodoTaskType[] = [
  {
    desc: 'Fix feedback pr review',
    end: '10:30',
    id: 1,
    start: '10:00',
    status: TodoStatusTaskEnum.Done,
    tags: 'Atreus',
    type: TodoCategoryEnum.DoingTask
  },
  {
    desc: 'Continue migrate cashless cashback page to ts',
    end: '14:00',
    id: 2,
    start: '11:00',
    status: TodoStatusTaskEnum.Done,
    tags: 'Atlas',
    type: TodoCategoryEnum.Slicing
  },
  {
    desc: 'Fix wording on purchase-protection tnc page',
    end: '14:30',
    id: 3,
    start: '14:00',
    status: TodoStatusTaskEnum.WontDo,
    tags: 'Artemis',
    type: TodoCategoryEnum.Bugs
  },
  {
    desc: 'Discussion Tracker & Monitoring',
    end: '9:30',
    id: 4,
    start: '9:00',
    type: TodoCategoryEnum.Meeting
  },
  {
    desc: 'Weekly sprint planning',
    end: '10:00',
    id: 5,
    start: '9:00',
    tags: 'Logistic',
    type: TodoCategoryEnum.FollowUp
  }
];

TASK_LIST = sortTaskBasedOnTimes(TASK_LIST);
