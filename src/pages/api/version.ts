// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
type Data = {
  name: string
  age: number
  country: string
}
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  axios
    .get('https://api.wavemall.io/api/v1/common/version/latest')
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(error => {
      res.status(500)
    })
}
