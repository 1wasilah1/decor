# Decor Backend API

## Install
```bash
cd backend
npm install
```

## Run
```bash
npm run dev
```

Server akan berjalan di `http://localhost:8700`

## Admin Panel
Buka `http://localhost:8600/admin`

**Login:**
- Username: `admin`
- Password: `admin123`

## API Endpoints

### GET /api/sections
Mendapatkan semua section

### PUT /api/sections
Update semua section
```json
{
  "sections": [...]
}
```

### PUT /api/sections/:id
Update section tertentu
```json
{
  "visible": false,
  "order": 5
}
```
