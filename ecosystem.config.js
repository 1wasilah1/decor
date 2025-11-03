module.exports = {
  apps: [
    {
      name: 'decor-backend',
      cwd: './backend',
      script: 'server.js',
      env: {
        PORT: 8700,
        NODE_ENV: 'production'
      }
    },
    {
      name: 'decor-frontend',
      cwd: './',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 8600,
        NODE_ENV: 'production',
        NEXT_PUBLIC_API_URL: 'https://apidecor.kelolahrd.life/api'
      }
    }
  ]
};
