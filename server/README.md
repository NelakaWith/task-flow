# Task Flow Server

This is the backend for the Task Flow project, built with Express.js and PostgreSQL.

## Features

- Modular Express.js structure
- PostgreSQL database connection using `pg`
- Environment variables managed with `dotenv`
- Placeholder routes and controllers for authentication, projects, and tasks
- Ready for JWT authentication and bcrypt password hashing

## Folder Structure

```
server/
  controllers/   # Route logic (auth, projects, tasks)
  routes/        # API route definitions
  models/        # Database access (optional/stub)
  middleware/    # JWT authentication (placeholder)
  db/            # Database connection logic
  app.js         # Express app setup
  server.js      # Server entry point
  .env           # Environment variables
```

## Setup

1. Copy `.env` and fill in your `DATABASE_URL` and `JWT_SECRET`.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## API Endpoints (placeholders)

- `POST   /api/auth/register`
- `POST   /api/auth/login`
- `GET    /api/projects`
- `POST   /api/projects`
- `GET    /api/projects/:id`
- `POST   /api/tasks/:projectId/tasks`
- `PUT    /api/tasks/:id`

---

## License

MIT
