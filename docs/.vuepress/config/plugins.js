module.exports = [

    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
          transformer: (timestamp, lang) => {
            const dayjs = require('dayjs') // https://day.js.org/
            return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
          },
        },
    ],
    [
        'vuepress-plugin-zooming', // 放大图片
        {
          selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
          options: {
            bgColor: 'rgba(0,0,0,0.6)',
          },
        },
    ],

]