import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const express = require('express');
const { createServer: createViteServer } = require('vite');

export default defineConfig({
  plugins: [vue()],
},
{
  server: {
    middlewareMode: true,
    before: (app) => {
      // app.use(express.static('public')); // 可选：如果有静态文件目录，请添加该行代码
      // app.use(express.json()); // 可选：如果需要解析JSON请求体，请添加该行代码

      // 将Express应用作为中间件添加到Vite开发服务器
      app.use('/api/data', app); // 替换 yourExpressApp 为你的Express应用实例
    },
  },
});


// module.exports = {
//   server: {
//     middlewareMode: true,
//     before: (app) => {
//       // app.use(express.static('public')); // 可选：如果有静态文件目录，请添加该行代码
//       // app.use(express.json()); // 可选：如果需要解析JSON请求体，请添加该行代码

//       // 将Express应用作为中间件添加到Vite开发服务器
//       app.use('/api/data', app); // 替换 yourExpressApp 为你的Express应用实例
//     },
//   },
// };