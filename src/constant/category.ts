import Bugs from '@/asset/images/bugs.svg';
import FollowUp from '@/asset/images/follow-up.svg';
import Meeting from '@/asset/images/meeting.svg';
import Slicing from '@/asset/images/slicing.svg';
import Task from '@/asset/images/task.svg';
import { TodoCategoryEnum, TodoCategoryType } from '@/types/notes';

export const CATEGORY_LABEL: Record<TodoCategoryEnum, string> = {
  [TodoCategoryEnum.Bugs]: 'Bugs',
  [TodoCategoryEnum.FollowUp]: 'Follow Up',
  [TodoCategoryEnum.Meeting]: 'Meeting',
  [TodoCategoryEnum.Slicing]: 'Slicing UI',
  [TodoCategoryEnum.DoingTask]: 'Doing Task'
};

export const CATEGORY_ICON: Record<TodoCategoryEnum, string> = {
  [TodoCategoryEnum.Bugs]: Bugs,
  [TodoCategoryEnum.FollowUp]: FollowUp,
  [TodoCategoryEnum.Meeting]: Meeting,
  [TodoCategoryEnum.Slicing]: Slicing,
  [TodoCategoryEnum.DoingTask]: Task
};

export const CATEGORY_LIST: TodoCategoryType[] = [
  {
    count: 7,
    icon: CATEGORY_ICON[TodoCategoryEnum.Bugs],
    text: CATEGORY_LABEL[TodoCategoryEnum.Bugs],
    type: TodoCategoryEnum.Bugs
  },
  {
    count: 2,
    icon: CATEGORY_ICON[TodoCategoryEnum.FollowUp],
    text: CATEGORY_LABEL[TodoCategoryEnum.FollowUp],
    type: TodoCategoryEnum.FollowUp
  },
  {
    count: 0,
    icon: CATEGORY_ICON[TodoCategoryEnum.Meeting],
    text: CATEGORY_LABEL[TodoCategoryEnum.Meeting],
    type: TodoCategoryEnum.Meeting
  },
  {
    count: 2,
    icon: CATEGORY_ICON[TodoCategoryEnum.Slicing],
    text: CATEGORY_LABEL[TodoCategoryEnum.Slicing],
    type: TodoCategoryEnum.Slicing
  },
  {
    count: 3,
    icon: CATEGORY_ICON[TodoCategoryEnum.DoingTask],
    text: CATEGORY_LABEL[TodoCategoryEnum.DoingTask],
    type: TodoCategoryEnum.DoingTask
  }
];
