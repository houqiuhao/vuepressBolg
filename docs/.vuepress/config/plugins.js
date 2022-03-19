module.exports = [
    // [
    //     '@vuepress/last-updated', // "上次更新"时间格式
    //     {
    //       transformer: (timestamp, lang) => {
    //         const dayjs = require('dayjs') // https://day.js.org/
    //         return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
    //       },
    //     },
    // ],
    [
        'vuepress-plugin-zooming', // 放大图片
        {
          selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
          options: {
            bgColor: 'rgba(0,0,0,0.6)',
          },
        },
    ],
    [
        'vuepress-plugin-comment',
        {
          choosen: 'valine', 
          // options选项中的所有参数，会传给Valine的配置
          options: {
            el: '#valine-vuepress-comment',
            appId: 'N9EVfa11nwxftvNc1oi2nJRk-gzGzoHsz',
            appKey: '9zLL7Xo2BU8tlnjiMccJLGPk'
          }
        }
    ]

]