/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-08 11:55:00
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-08 17:17:03
 * @FilePath: /wave-global-h5/src/pages/api/version.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
type Data = {
  name: string
  age: number
  country: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  axios.post('https://api.devnet.wavemall.io/api/v5/nft/mystery-box/detail', req.body)
    .then(response => {
      console.log("succes");
      console.log(response);
      res.status(200).json(response.data)
    })
    .catch(error => {
      console.log("error");
      console.log(error);
      res.status(500)
    })
}
