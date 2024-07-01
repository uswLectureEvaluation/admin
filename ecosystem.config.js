/*eslint no-undef: "off"*/
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'vite-react-app',
      script: 'serve',
      args: '-s /app -l 3000',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
