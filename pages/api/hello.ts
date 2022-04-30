import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

/**
 *
 * @param {NextApiRequest} req - next request
 * @param {NextApiResponse<Data>} res - next response
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
