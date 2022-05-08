import { number, object, string } from 'yup';

import type {
  BasicArgs,
  GeneratorResponse,
  TodoRepository,
  UpdateStatusTaskArgs,
  UpsertTaskArgs
} from '@/repository/todo';
import { TasksTableRowType } from '@/types/contract';
import { Maybe } from '@/types/general';
import type { TodoTaskType } from '@/types/notes';
import { TodoCategoryEnum, TodoStatusTaskEnum } from '@/types/notes';
import { castingError } from '@/utils/general/error';
import { supabase } from '@/utils/supabase';

/**
 * Supabase Todo Repository Implementation
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
class SupabaseTodoImpl implements TodoRepository {
  private static _instance: TodoRepository;

  /**
   * Normalize Task
   *
   * @param {TasksTableRowType} databaseRow - database rows from supabase response
   * @returns {TodoTaskType} formatted raw data
   */
  private normalizeListTask(databaseRow: TasksTableRowType): TodoTaskType {
    const { desc, end, id, start, status, tags, type } = databaseRow;
    let tempType: TodoCategoryEnum = TodoCategoryEnum.DoingTask;
    let statusType: TodoStatusTaskEnum = TodoStatusTaskEnum.InProgress;

    switch (type) {
      case TodoCategoryEnum.Bugs:
      case TodoCategoryEnum.DoingTask:
      case TodoCategoryEnum.FollowUp:
      case TodoCategoryEnum.Meeting:
      case TodoCategoryEnum.Slicing:
        tempType = type;
        break;

      default:
        // do nothing the value will be contains `TodoCategoryEnum.DoingTask`
        break;
    }

    switch (status) {
      case TodoStatusTaskEnum.Done:
      case TodoStatusTaskEnum.WontDo:
        statusType = status;
        break;

      default:
        // do nothing the value will be contains `TodoStatusTaskEnum.InProgress`
        break;
    }

    return {
      desc,
      end,
      id,
      start,
      status: statusType,
      tags,
      type: tempType
    };
  }

  /**
   * Normalize List Of Task
   *
   * @param {TasksTableRowType[]} databaseRows - database rows from supabase response
   * @returns {TodoTaskType[]} formatted raw data
   */
  private normalizeListOfTask(
    databaseRows: TasksTableRowType[]
  ): TodoTaskType[] {
    return databaseRows.map(this.normalizeListTask);
  }

  /**
   * Get List Of Tasks
   *
   * @description Get list of task based on parameter
   * @param {BasicArgs} args - argument get task repository
   * @returns {Promise<GeneratorResponse<TodoTaskType[]>>} formatted response
   */
  async getTask(args: BasicArgs): Promise<GeneratorResponse<TodoTaskType[]>> {
    const rules = object().shape({
      timestamp: number().required('Selected timestamp is required'),
      userId: string().required('You must adding user id on your payload data')
    });

    try {
      await rules.validate({
        ...args
      });

      const { timestamp, userId } = args;

      const { data, error } = await supabase
        .from<TasksTableRowType>('task')
        .select('*')
        .filter('date', 'eq', timestamp)
        .filter('userId', 'eq', userId);

      if (error) throw error;

      if (data)
        return {
          code: 200,
          response: this.normalizeListOfTask(data)
        };

      return {
        code: 200,
        response: []
      };
    } catch (e) {
      const { message } = castingError(e);

      return {
        code: 500,
        message: message,
        response: []
      };
    }
  }

  /**
   * Insert Task
   *
   * @description Do insert payload data
   * @param {UpsertTaskArgs} args - argument for upsert task into supabase database
   * @returns {Promise<GeneratorResponse<Maybe<TodoTaskType>>>} result after do insert task record
   */
  async insertTask(
    args: UpsertTaskArgs
  ): Promise<GeneratorResponse<Maybe<TodoTaskType>>> {
    const rules = object().shape({
      payload: object().shape({
        desc: string().required('Description on payload object is required'),
        end: string().required('End time on payload object is required'),
        start: string().required('Start time on payload object is required')
      }),
      timestamp: number().required('Selected timestamp is required'),
      userId: string().required('You must adding user id on your payload data')
    });

    try {
      await rules.validate({
        ...args
      });

      const { payload, timestamp, userId } = args;

      const { data, error } = await supabase
        .from<TasksTableRowType>('task')
        .insert({
          ...payload,
          date: timestamp,
          userId
        })
        .single();

      if (error) throw error;

      if (data)
        return {
          code: 200,
          response: this.normalizeListTask(data)
        };

      throw new Error('Save task failure');
    } catch (e) {
      const { message } = castingError(e);

      return {
        code: 500,
        message: message,
        response: undefined
      };
    }
  }

  /**
   * Update Status Task
   *
   * @description Update status on task table, ex: in progress, done, wont'do etc
   * @param {UpdateStatusTaskArgs} args - argument for uodate status task into supabase database
   * @returns {Promise<GeneratorResponse<Maybe<TodoTaskType>>>} result after do update status task
   */
  async updateStatusTask(
    args: UpdateStatusTaskArgs
  ): Promise<GeneratorResponse<Maybe<TodoTaskType>>> {
    const rules = object().shape({
      id: number().required('Task ID on payload is required'),
      status: number().required('Status task on payload is required'),
      timestamp: number().required('Selected timestamp is required'),
      userId: string().required('You must adding user id on your payload data')
    });

    try {
      await rules.validate({
        ...args
      });

      const { id, status, timestamp, userId } = args;

      const { data, error } = await supabase
        .from<TasksTableRowType>('task')
        .update({
          status
        })
        .match({ date: timestamp, id, userId })
        .single();

      if (error) throw error;

      if (data)
        return {
          code: 200,
          response: this.normalizeListTask(data)
        };

      throw new Error('Save task failure');
    } catch (e) {
      const { message } = castingError(e);

      return {
        code: 500,
        message: message,
        response: undefined
      };
    }
  }

  /**
   * Edit Task
   *
   * @description Do edit payload data
   * @param {UpsertTaskArgs} args - argument for upsert task into supabase database
   * @returns {Promise<GeneratorResponse<Maybe<TodoTaskType>>>} result after do edit task record
   */
  async editTask(
    args: UpsertTaskArgs
  ): Promise<GeneratorResponse<Maybe<TodoTaskType>>> {
    const rules = object().shape({
      payload: object().shape({
        desc: string().required('Description on payload object is required'),
        end: string().required('End time on payload object is required'),
        id: number().required('Task ID on payload object is required'),
        start: string().required('Start time on payload object is required')
      }),
      timestamp: number().required('Selected timestamp is required'),
      userId: string().required('You must adding user id on your payload data')
    });

    try {
      await rules.validate({
        ...args
      });

      const {
        payload: { id, ...resPayload },
        timestamp,
        userId
      } = args;

      const { data, error } = await supabase
        .from<TasksTableRowType>('task')
        .update({
          ...resPayload
        })
        .match({ date: timestamp, id, userId })
        .single();

      if (error) throw error;

      if (data)
        return {
          code: 200,
          response: this.normalizeListTask(data)
        };

      throw new Error('Save task failure');
    } catch (e) {
      const { message } = castingError(e);

      return {
        code: 500,
        message: message,
        response: undefined
      };
    }
  }

  /**
   * Singleton
   *
   * @returns {TodoRepository} instance of supabase todo impl based on todo repository contract
   */
  public static singleton() {
    if (this._instance === undefined) {
      this._instance = new SupabaseTodoImpl();
    }

    return this._instance;
  }
}

export default SupabaseTodoImpl;
