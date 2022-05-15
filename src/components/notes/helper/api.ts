import { GeneratorResponse } from '@/repository/todo';
import { Maybe } from '@/types/general';
import type { TodoStatusTaskEnum, TodoTaskType } from '@/types/notes';

interface GetTaskAPIArgs {
  timestamp: number;
  userId: string;
}

/**
 * Get Task API
 *
 * @param {GetTaskAPIArgs} param - get task api arguments
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {Promise<TodoTaskType[]>} list of task
 * @since 0.0.0
 */
export const getTaskAPI = async (
  param: GetTaskAPIArgs
): Promise<TodoTaskType[]> => {
  try {
    const url = new URL('http://localhost:3000/api/todo');
    url.searchParams.set('timestamp', `${param.timestamp}`);
    url.searchParams.set('userId', `${param.userId}`);

    const data = (await (
      await fetch(url.toString())
    ).json()) as GeneratorResponse<TodoTaskType[]>;

    if (data.code === 200 && data.response) {
      return data.response;
    }

    return [];
  } catch {
    return [];
  }
};

interface EditTodoAPIArgs {
  task: TodoTaskType;
  timestamp: number;
  userId: string;
}

/**
 * Edit Todo API
 *
 * @param {EditTodoAPIArgs} param - edit todo api arguments
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {Maybe<TodoTaskType>} task
 * @since 0.0.0
 */
export const editTodoAPI = async ({
  task: { desc, end, id, start, status, tags, type },
  timestamp,
  userId
}: EditTodoAPIArgs): Promise<Maybe<TodoTaskType>> => {
  try {
    const url = new URL('http://localhost:3000/api/todo');

    const data = (await (
      await fetch(url.toString(), {
        body: JSON.stringify({
          payload: {
            desc,
            end,
            id,
            start,
            status,
            tags,
            type
          },
          timestamp,
          userId
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'PATCH'
      })
    ).json()) as GeneratorResponse<Maybe<TodoTaskType>>;

    if (data.code === 200 && data.response) {
      return data.response;
    }

    return undefined;
  } catch {
    return undefined;
  }
};

interface CreateTodoAPIArgs {
  task: TodoTaskType;
  timestamp: number;
  userId: string;
}

/**
 * Create Todo API
 *
 * @param {CreateTodoAPIArgs} param - create todo api arguments
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {Maybe<TodoTaskType>} task
 * @since 0.0.0
 */
export const createTodoAPI = async ({
  task: { desc, end, start, status, tags, type },
  timestamp,
  userId
}: CreateTodoAPIArgs): Promise<Maybe<TodoTaskType>> => {
  try {
    const url = new URL('http://localhost:3000/api/todo');

    const data = (await (
      await fetch(url.toString(), {
        body: JSON.stringify({
          payload: {
            desc,
            end,
            start,
            status,
            tags,
            type
          },
          timestamp,
          userId
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      })
    ).json()) as GeneratorResponse<Maybe<TodoTaskType>>;

    if (data.code === 200 && data.response) {
      return data.response;
    }

    return undefined;
  } catch {
    return undefined;
  }
};

interface EditTodoStatusAPIArgs {
  id: number;
  status: TodoStatusTaskEnum;
  timestamp: number;
  userId: string;
}

/**
 * Edit Status Todo API
 *
 * @param {EditTodoStatusAPIArgs} param - edit todo status api arguments
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {Maybe<TodoTaskType>} task
 * @since 0.0.0
 */
export const editTodoStatusAPI = async ({
  id,
  status,
  timestamp,
  userId
}: EditTodoStatusAPIArgs): Promise<Maybe<TodoTaskType>> => {
  try {
    const url = new URL('http://localhost:3000/api/todo');

    const data = (await (
      await fetch(url.toString(), {
        body: JSON.stringify({
          id,
          status,
          timestamp,
          userId
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT'
      })
    ).json()) as GeneratorResponse<Maybe<TodoTaskType>>;

    if (data.code === 200 && data.response) {
      return data.response;
    }

    return undefined;
  } catch {
    return undefined;
  }
};
