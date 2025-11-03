# Deployment Guide

## Prerequisites
```bash
npm install -g pm2
```

## Backend Setup
```bash
cd backend
npm install
```

## Frontend Setup
```bash
npm install
npm run build
```

## Running with PM2

### Start All Services
```bash
pm2 start ecosystem.config.js
```

### Individual Commands
```bash
# Start backend only
pm2 start ecosystem.config.js --only decor-backend

# Start frontend only
pm2 start ecosystem.config.js --only decor-frontend
```

### Management Commands
```bash
# View status
pm2 status

# View logs
pm2 logs

# Restart
pm2 restart all

# Stop
pm2 stop all

# Delete
pm2 delete all
```

### Auto-start on System Reboot
```bash
pm2 startup
pm2 save
```

## Ports
- Backend: 8700
- Frontend: 8600

## Environment Variables
Create `.env.production` for production settings:
```
NEXT_PUBLIC_API_URL=https://apidecor.kelolahrd.life/api
```
