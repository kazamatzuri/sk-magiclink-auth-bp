# SvelteKit Magic Link Authentication Example

This is a simple example project that demonstrates how to implement passwordless authentication using magic links in a SvelteKit application. The project combines several powerful tools:

- [SvelteKit](https://kit.svelte.dev/) - The application framework
- [Prisma](https://www.prisma.io/) - For database management
- [AuthJS](https://authjs.dev/) - For authentication
- [Nodemailer](https://nodemailer.com/) - For sending magic link emails

## Features

- Passwordless authentication using magic links
- Protected routes example
- PostgreSQL database integration with Prisma
- Email-based authentication flow

## Getting Started

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

3. Copy the `.env.example` to `.env` and configure your environment variables:
```bash
cp .env.example .env
```

4. Update the following variables in your `.env`:
- `AUTH_SECRET`: Generate a new secret using `npx auth secret`
- `DATABASE_URL`: Your PostgreSQL database connection string
- Email configuration:
  - `EMAIL_SERVER_HOST`
  - `EMAIL_SERVER_PORT`
  - `EMAIL_SERVER_USER`
  - `EMAIL_SERVER_PASSWORD`
  - `EMAIL_FROM`

5. Initialize the database:
```bash
npx prisma migrate dev
```

6. Start the development server:
```bash
npm run dev
```

## How It Works

1. Users enter their email address on the login page
2. A magic link is sent to their email
3. Clicking the link authenticates them automatically
4. Once authenticated, they can access protected routes

## Project Structure

- `/src/auth.ts` - AuthJS configuration
- `/src/routes/protected` - Example of protected routes
- `/prisma/schema.prisma` - Database schema
- `/src/lib/database` - Database utilities

## Development

For local development, you can use the included Docker Compose file to spin up a PostgreSQL database:

```bash
docker-compose up -d
```

## Contributing

Feel free to submit issues and enhancement requests!
