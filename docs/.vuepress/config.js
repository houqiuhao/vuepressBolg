const themeConfig = require('./config/themeConfig')
module.exports = {
    title: "Hammer's blog",
    description: '愿知晓并笃行',
    theme: require.resolve('../../vdoing'),//'vdoing',
    themeConfig,
    base: "/vuepressBolg/",
    // dest: "dist"
}