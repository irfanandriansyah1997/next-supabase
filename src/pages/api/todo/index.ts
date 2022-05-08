import type { NextApiHandler } from 'next';

import SupabaseTodoImpl from '@/repository/supabase/todo';
import { UpdateStatusTaskArgs, UpsertTaskArgs } from '@/repository/todo';

/**
 * TODO endpoint api
 *
 * @param {NextApiRequest} req - request api payload
 * @param {NextApiResponse} res - response api will be send into client
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
const todoEndpointAPI: NextApiHandler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET': {
      const {
        query: { timestamp, userId }
      } = req;

      const response = await SupabaseTodoImpl.singleton().getTask({
        timestamp: parseInt(timestamp as string, 10),
        userId: `${userId}`
      });

      res.status(response.code).json(response);
      break;
    }

    case 'POST': {
      const { body } = req;

      const response = await SupabaseTodoImpl.singleton().insertTask(
        body as UpsertTaskArgs
      );

      res.status(response.code).json(response);
      break;
    }

    case 'PATCH': {
      const { body } = req;

      const response = await SupabaseTodoImpl.singleton().editTask(
        body as UpsertTaskArgs
      );

      res.status(response.code).json(response);
      break;
    }

    case 'PUT': {
      const { body } = req;

      const response = await SupabaseTodoImpl.singleton().updateStatusTask(
        body as UpdateStatusTaskArgs
      );

      res.status(response.code).json(response);
      break;
    }

    default:
      res.status(404).json({ message: 'page not found' });
      break;
  }
};

export default todoEndpointAPI;
