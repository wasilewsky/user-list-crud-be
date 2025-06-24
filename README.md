# 🧾 User List CRUD API

A robust and scalable REST API for managing users, built with Node.js, Express, TypeScript, and Prisma ORM.

This backend powers a full-stack CRUD application, allowing user registration, login, role-based access control, and full user management by admin accounts.

---

## ✨ Features

- **User Registration & Login** with hashed passwords and JWT-based authentication.
- **Role-based Access Control** – admins can view and manage all users.
- **Protected Routes** – middleware ensures only authorized users access certain endpoints.
- **Full CRUD** for user entities (Create, Read, Update, Delete).
- **Database Seeding** – quickly populate the database with test users.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT for authentication
- bcrypt for password hashing
- ts-node-dev for local development

---

## 📁 Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/wasilewsky/user-list-crud-be.git
cd user-list-crud-be
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Set up your environment:

Create a `.env` file and define the following variables:

```env
DATABASE_URL=postgresql://your-user:your-password@localhost:5432/your-database
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Initialize the database:

```bash
npx prisma migrate dev --name init
```

### 5. Seed the database:

```bash
npx prisma db seed
```

This will create:
- 2 admin users (`admin@example.com`, `user@example.com`)
- 3 regular users (`alice@example.com`, `bob@example.com`, `charlie@example.com`)
- All passwords: `admin123`

### 6. Run the development server:

```bash
npm run dev
```

### 7. Access the API:

Visit `http://localhost:5000/api` in Postman or your preferred API client.

---

## 🔒 Auth Endpoints

| Method | Route               | Access        | Description          |
|--------|---------------------|---------------|----------------------|
| POST   | /api/auth/register  | Public        | Register new user    |
| POST   | /api/auth/login     | Public        | Authenticate user    |
| GET    | /api/auth/me        | Authenticated | Get current user     |

---

## 👥 User Endpoints

| Method | Route               | Access  | Description             |
|--------|---------------------|---------|-------------------------|
| GET    | /api/users          | Admin   | Get all users           |
| GET    | /api/users/:id      | Admin   | Get user by ID          |
| PUT    | /api/users/:id      | Admin   | Update user by ID       |
| DELETE | /api/users/:id      | Admin   | Delete user by ID       |
