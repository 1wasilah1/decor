module.exports = {
  apps: [
    {
      name: 'decor-frontend',
      cwd: './frontend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 8600
      }
    },
    {
      name: 'decor-backend',
      cwd: './backend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 8700
      }
    }
  ]
};