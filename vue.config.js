module.exports = {
    lintOnSave: false,
    publicPath:'/home/',
    devServer: {
        open: true,		// 配置是否自动打开浏览器，默认false
        host: '192.168.0.101',		// 配置ip地址，默认192.168.1.101
        port: 8089,		// 配置端口，默认8080
        https: false,		// 配置是否是 https 协议，默认false
        hotOnly: false,		// 是否支持热更新，默认为 true
      }
}