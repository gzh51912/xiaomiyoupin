const { override, fixBabelImports,addLessLoader ,addWebpackAlias,addDecoratorsLegacy} = require('customize-cra');
const {resolve} = require("path")
module.exports = override(
      addDecoratorsLegacy(),//配置装饰器（语法）
       fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
       }),
        addLessLoader({
           javascriptEnabled: true,
           modifyVars: { '@primary-color': '#00F' },
        }),
        addWebpackAlias({//用@指向src文件夹
          '@':resolve('src')
        })
     );