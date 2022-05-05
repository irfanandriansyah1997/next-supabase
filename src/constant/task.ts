import type { TodoTaskType } from '@/types/notes';
import { TodoCategoryEnum, TodoStatusTaskEnum } from '@/types/notes';

export const TASK_LIST: TodoTaskType[] = [
  {
    desc: 'Fix feedback pr review',
    end: '10:30am',
    id: '1',
    start: '10:00am',
    status: TodoStatusTaskEnum.Done,
    tags: 'Atreus',
    type: TodoCategoryEnum.DoingTask
  },
  {
    desc: 'Continue migrate cashless cashback page to ts',
    end: '11:00am',
    id: '2',
    start: '2:00pm',
    status: TodoStatusTaskEnum.Done,
    tags: 'Atlas',
    type: TodoCategoryEnum.Slicing
  },
  {
    desc: 'Fix wording on purchase-protection tnc page',
    end: '2:00pm',
    id: '3',
    start: '2:30pm',
    status: TodoStatusTaskEnum.WontDo,
    tags: 'Artemis',
    type: TodoCategoryEnum.Bugs
  },
  {
    desc: 'Discussion Tracker & Monitoring',
    end: '9:00am',
    id: '4',
    start: '9:30am',
    type: TodoCategoryEnum.Meeting
  },
  {
    desc: 'Weekly sprint planning',
    end: '9:00am',
    id: '5',
    start: '10:00am',
    tags: 'Logistic',
    type: TodoCategoryEnum.FollowUp
  }
];
