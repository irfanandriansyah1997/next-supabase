export enum TodoCategoryEnum {
  Bugs,
  FollowUp,
  Meeting,
  Slicing,
  DoingTask
}

export enum TodoStatusTaskEnum {
  All,
  Done,
  InProgress,
  WontDo
}

export type TaskLayout = 'grid' | 'list';

/**
 * Todo Category Type
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface TodoCategoryType {
  count: number;
  icon: string;
  text: string;
  type: TodoCategoryEnum;
}

/**
 * Todo Task Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface TodoTaskType {
  desc: string;
  end: string;
  id: string;
  start: string;
  status?: TodoStatusTaskEnum;
  tags?: string;
  type: TodoCategoryEnum;
}

/**
 * UI Config Type On Homepage
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface UIConfigType {
  selection: TodoStatusTaskEnum;
  template: TaskLayout;
}
