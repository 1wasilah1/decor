module.exports = {
  apps: [
    {
      name: 'decor-frontend',
      cwd: './frontend',
      script: 'node_modules/.bin/next',
      args: 'start -p 8600',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'decor-backend',
      cwd: './backend',
      script: 'index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 8700
      }
    }
  ]
};