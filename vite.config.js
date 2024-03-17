import { defineConfig } from 'vite';
import vue from'@vitejs/plugin-vue'

export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        // 去除构建环境的debugger以及console
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: false, // 分割css
    lib: {
      entry: './src/index.js', // 组件源码入口
      formats: ['es'], // 组件打包方式 es即可
      fileName: 'main', // 输出打包好的入口js文件名称
    },
    minify: 'terser', // 混淆加密方式 terser/esbuild
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 依赖打包时处理，依赖单独引入
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
      external: [
		  "vue"
      ],
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      localsConvention: 'camelCase',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
	  vue()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: [{ find: /^~/, replacement: './node_modules/' }],
  },
});
