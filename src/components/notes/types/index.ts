import { TodoTaskType } from '@/types/notes';

export type TaskEventHandler<T = undefined> = T extends undefined
  ? {
      handlerEditTask(): void;
      handlerMarkAsDone(): void;
      handlerMarkAsInProgress(): void;
      handlerMoveToWontDo(): void;
    }
  : {
      handlerEditTask(payload: T): void;
      handlerMarkAsDone(payload: T): void;
      handlerMarkAsInProgress(payload: T): void;
      handlerMoveToWontDo(payload: T): void;
    };

export type TaskEventKey =
  | 'edit'
  | 'mark-as-done'
  | 'mark-as-in-progress'
  | 'move-to-wont-do';

type TaskEventHandlerPayload = {
  payload: TodoTaskType;
  type: TaskEventKey;
};

export interface SimplyTaskEventHandler {
  on(payload: TaskEventHandlerPayload): void;
}
