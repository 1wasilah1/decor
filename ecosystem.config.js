module.exports = {
  apps: [
    {
      name: 'decor-frontend',
      cwd: './frontend',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
        PORT: 8600
      }
    },
    {
      name: 'decor-backend',
      cwd: './backend',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
        PORT: 8700
      }
    }
  ]
};