/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-05-05 11:09:56
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-11 15:39:02
 * @FilePath: /wave-website/tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      lineHeight: {
        leading10: '10px',
      },
      fontSize: {
        font40xl: ['2.55rem'],
        font22xl: ['1.375rem'],
        font34xl: ['2rem'],
        font7: ['0.35rem']
      },
      colors: {
        gray666: '#666666',
        grayc1: '#c1c1c1',
        graycb: '#cbcbcb',
        gray999: '#999999',
        gray333: '#333333',
        grayED: '#EDEDED',
        grayEA: '#eaeaea',
        grayc4: '#C4C4C4',
        white: '#fff',
        whitef0: '#f0f0f0',
        grey7f7f: '#7F7F7F',
        grayf1: '#F1F1F1',
        grayfb: '#FBFBFB',
        grayf5: '#f5f5f5',
        grayf9: '#f9f9f9',
        graybf: '#bfbfbf',
        grayef: '#EFEFEF',
        gray6a: '#6a6a6a',
        green2d: '#2DD867',
        greenIcon: '#00C6A8',
        greenLight: '#DBFFF9',
        greenMain: '#00D237',
        greenDark: '#00bb31'
      },
      border: {
        imgcol: 'border-image: -webkit-linear-gradient(top left, #CFFFFA 0%, #B5EAFF 32%, #FEBCE6 69%, #FFAFB1 100%)100 100 100 100;'
      },
      backgroundImage: {
        'featbg': "url('/assets/image/fbg.png')",
        'featbgh5': "url('/assets/image/featbg.png')",
        'prev': "url('/assets/image/prev.png')",
        'next': "url('/assets/image/next.png')",
        'code': "url('/assets/image/code-bg.png')",
        'store-h5':"url('/assets/image/store-h5.png')",
        'play-h5':"url('/assets/image/play-h5.png')",
        'apk-h5':"url('/assets/image/apk-h5.png')",
        'footer-telegram': "url('/assets/image/telegram.png')",
        'footer-telegram-hover': "url('/assets/image/telegram_hover.png')",
        'footer-twitter': "url('/assets/image/twitter.png')",
        'footer-twitter-hover': "url('/assets/image/twitter_hover.png')",
        'footer-discord': "url('/assets/image/discord.png')",
        'footer-discord-hover': "url('/assets/image/discord_hover.png')",
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      black: '#000',
      grayf9: '#F9F9F9',
    }),
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
}
