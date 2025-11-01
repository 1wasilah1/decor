module.exports = {
  apps: [
    {
      name: 'decor-frontend',
      cwd: './frontend',
      script: 'npm',
      args: 'run dev -- -p 8600',
      env: {
        NODE_ENV: 'development'
      }
    },
    {
      name: 'decor-backend',
      cwd: './backend',
      script: 'npm',
      args: 'run dev -- --port 8700',
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};