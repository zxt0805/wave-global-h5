/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 11:46:48
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-26 15:00:44
 * @FilePath: /wave-global-h5/src/model/navModel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class PageModel {
  title: string
  description: string
  name: string
  image: string
  constructor(title: string, description: string = '', name: string, image: string = '') {
    this.title = title
    this.description = description
    this.name = name
    this.image = image
  }
}
