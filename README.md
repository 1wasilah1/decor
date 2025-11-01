# Decor Project Ecosystem

This is a full-stack decor application with separate frontend and backend services.

## Project Structure

```
decor/
├── frontend/          # Next.js React application
├── backend/           # Node.js backend API
├── mockup/           # Design mockups
└── package.json      # Root ecosystem configuration
```

## Quick Start

### Install All Dependencies
```bash
npm run install:all
```

### Development
```bash
# Run both frontend and backend concurrently
npm run dev

# Or run individually
npm run dev:frontend    # Frontend only (Next.js)
npm run dev:backend     # Backend only (Node.js)
```

### Build
```bash
# Build both projects
npm run build

# Or build individually
npm run build:frontend
npm run build:backend
```

### Production
```bash
# Start both services
npm start

# Or start individually
npm run start:frontend
npm run start:backend
```

## Available Scripts

- `npm run install:all` - Install dependencies for root, frontend, and backend
- `npm run install:frontend` - Install frontend dependencies only
- `npm run install:backend` - Install backend dependencies only
- `npm run dev` - Run both services in development mode
- `npm run dev:frontend` - Run frontend development server
- `npm run dev:backend` - Run backend development server
- `npm run build` - Build both projects for production
- `npm run start` - Start both services in production mode

## Services

- **Frontend**: http://localhost:3000 (Next.js)
- **Backend**: http://localhost:5000 (Node.js/Express)

## Technologies

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

### Backend
- Node.js
- Express.js
- Additional dependencies as configured