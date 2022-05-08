import { Maybe } from '@/types/general';
import type { TodoTaskType } from '@/types/notes';
import { TodoStatusTaskEnum } from '@/types/notes';

export type GeneratorResponse<T> = {
  code: 200 | 500;
  message?: string;
  response: T;
};

export interface BasicArgs {
  timestamp: number;
  userId: string;
}

export interface UpsertTaskArgs extends BasicArgs {
  payload: TodoTaskType;
}

export interface UpdateStatusTaskArgs extends BasicArgs {
  id: string;
  status: TodoStatusTaskEnum;
}

/**
 * Todo Repository Contract
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface TodoRepository {
  editTask(
    args: UpsertTaskArgs
  ): Promise<GeneratorResponse<Maybe<TodoTaskType>>>;
  getTask(timestamp: BasicArgs): Promise<GeneratorResponse<TodoTaskType[]>>;
  insertTask(
    args: UpsertTaskArgs
  ): Promise<GeneratorResponse<Maybe<TodoTaskType>>>;
  updateStatusTask(
    args: UpdateStatusTaskArgs
  ): Promise<GeneratorResponse<Maybe<TodoTaskType>>>;
}
