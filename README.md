# Task Flow

A modular full-stack project with a React (Vite) client and an Express.js + PostgreSQL backend.

## Project Structure

```
task-flow/
  client/      # React frontend (Vite)
  server/      # Express.js backend
```

## Server

- Express.js backend
- PostgreSQL database (via `pg`)
- Environment variables managed with `dotenv`
- Modular structure: controllers, routes, models, middleware, db

### Setup

1. Copy `.env.example` to `.env` and fill in your values.
2. Install dependencies:
   ```sh
   cd server
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Client

- React app bootstrapped with Vite

### Setup

1. Install dependencies:
   ```sh
   cd client
   npm install
   ```
2. Start the client:
   ```sh
   npm run dev
   ```

---

## License

MIT
