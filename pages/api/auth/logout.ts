import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userToken = serialize('user', 'no', {
    httpOnly: true,
    path: '/',
    expires: new Date(Date.now() + 336 * 60 * 60 * 1000),
  });
  res.setHeader('Set-Cookie', userToken);
  res.status(200).json({ message: 'Successfully remove cookie!' });
};