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


GHFORCE = https://drive.google.com/drive/folders/1HDQTfi92WJ22fTAc2yErRuxRtqFn6YpA?usp=drive_link,

MINI BOOTH = https://drive.google.com/drive/folders/1LZyuOHvkdCzy7NmItAQtfxoBJ00OJGeh?usp=drive_link,

NETCUT = https://drive.google.com/drive/folders/1lrjF2wSF9SgN0iiC5wmUYek1igvjLOJS?usp=drive_link, 

PANCKOO = https://drive.google.com/drive/folders/17olcYAG-PnawUfENgBNZXuwEXam7TFRz?usp=drive_link, 

SAN GROUP = https://drive.google.com/drive/folders/1geWEf9rIoOWW-zTTf_JJAnw_8rv0AtB6?usp=drive_link, 

XIANGJUN = https://drive.google.com/drive/folders/1ZxMZghjTQg3_d4_GtZVdLwEEGq6zTJ9J?usp=drive_link, 

ZANRAY = https://drive.google.com/drive/folders/1uYinpNHUTBvTSQZk9is4KcilximnQY46?usp=drive_link, 

MIHO Filler = https://drive.google.com/drive/folders/1OeEucWewRlTtNMpKSIPNuncvD9ahcFUL?usp=drive_link,

REESEE = https://drive.google.com/drive/folders/1KKiM9mXWKqdYcnMDFH6YCEVX0sHmryD6?usp=drive_link, 

 Veraclara = https://drive.google.com/drive/folders/1o-0dScwB5pQZfqBQpyLPmz5Mq1suzec1?usp=drive_link,

 Belleza Office MHM = https://drive.google.com/drive/folders/1XTsXbaGeVorztt_isUT2T-Uo6QIFbqyZ?usp=drive_link, 

 Medom Kpop Merch = https://drive.google.com/drive/folders/1hvkGIfDrZZt4Dr7lX_MY5ZSnP5vJk1aC?usp=drive_link,

Blackpink Pop Up Store = https://drive.google.com/drive/folders/1Plif1K4ahYdwnapsy6A_MeKnKMf1CUOj?usp=drive_link,

 Ppulbatu TXT Pop Up Store = https://drive.google.com/drive/folders/1iJdJpGLXmXIdssK9ZRqRq5cx7exwSaAX?usp=drive_link, 

 Zero Base One = https://drive.google.com/drive/folders/1-WAuIm4xfwVLENRvah2eJUkhNPKyELXA?usp=drive_link,

 EDDR = https://drive.google.com/drive/folders/1DjusXSpnwaTU_PGLE_COABai2unSUIO9?usp=drive_link,

 Backdrop Rental = https://drive.google.com/drive/folders/1eviD29OmQ4mr1PpyxeRgFfuRrzca_k5E?usp=drive_link,

 CNC Cutting = https://drive.google.com/drive/folders/18O76CKA9OJhQ8UaFuGAJLx7o9sqDEHPD?usp=drive_link,

 3d Design = https://drive.google.com/drive/folders/1RVrX84j2jYsVkV2NQQd26O0Wl3r1Og_w?usp=drive_link


 BTS Pop Up Store = https://drive.google.com/drive/folders/1ZhJmqbM9k7t--XKGZNiN7n5gHrQ6sreU?usp=drive_link