const themeConfig = require('./config/themeConfig')
const plugins = require('./config/plugins')
module.exports = {
    title: "Hammer's blog",
    description: '愿知晓并笃行',
    theme: require.resolve('../../vdoing'),//'vdoing',
    themeConfig,
    base: "/vuepressBolg/",
    plugins,
    // dest: "dist"
}