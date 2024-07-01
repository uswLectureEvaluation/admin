module.exports = {
  apps: [
    {
      name: 'vite-react-app',
      script: 'serve',
      args: '-s . -l 3000',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
