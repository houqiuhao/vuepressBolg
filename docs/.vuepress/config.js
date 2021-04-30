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
        sidebar: [
            {
                "/html/" : [
                    {
                        title: "html",
                        collapsable: false,
                        sidbarDepth: 2,
                        children:['index']
                    },
                ],
            }
        ]
      }
}