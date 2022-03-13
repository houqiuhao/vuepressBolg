
const nav = require('./nav.js');
const htmlModules = require('./htmlModules.js');
module.exports = {
    nav,
    sidebarDepth: 2,
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    sidebar: 'structuring',
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    // bodyBgImg: '/img/bannerBg.jpg',
    // bodyBgImgOpacity: 0.9,

    author: {
        // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
        name: 'hammer', // 必需
        // link: 'https://github.com/xugaoyi', // 可选的
      },
    blogger: {
        // 博主信息，显示在首页侧边栏
        // avatar: 'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg',
        // TODO 本地图片部署后获取图片失败了，看看怎么处理
        avatar: 'https://s1.ax1x.com/2022/03/08/b2nunA.jpg',
        name: 'Hammer',
        slogan: '愿知晓并笃行',
    },
    footer: {
        // 页脚信息
        createYear: 2021, // 博客创建年份
        // copyrightInfo:
        //   'Evan Xu | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
    },

    htmlModules // 插入hmtl(广告)模块

}
