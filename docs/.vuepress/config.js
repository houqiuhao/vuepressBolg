module.exports = {
    title: 'my vuepress blog',
    description: 'just a knowledge note',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Html', link: '/html/' },
          { text: 'css', link: '/css/' },
          { text: 'js', link: '/js/' },
          { text: 'vue', link: '/vue/' },
          { text: 'MarkDown', link: '/MarkDown/'},
          { text: 'useTool', link: '/useTool/devtool/'}
        ],
        sidebar: {
            "/html/": [
                {
                    title: "html",
                    collapsable: false,
                    sidbarDepth: 2,
                    children:['target']
                },
            ],
            "/js/": [
                {
                    title: "ES5",
                    collapsable: false,
                    sidbarDepth: 2,
                    children:['ES5','jsDaily']
                },
                {
                    title: "ES6",
                    collapsable: false,
                    sidbarDepth: 2,
                    children:['ES6']
                }
            ]
        }
      }
}