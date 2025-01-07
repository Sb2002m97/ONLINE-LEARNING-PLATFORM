# Online Learning Platform (OLP) - MERN Stack Application

This is a full-stack Online Learning Platform (OLP) application built using the MERN stack (MongoDB, Express, React, Node.js). The OLP allows students to enroll in courses, view content, and track progress. Teachers can manage courses, and administrators have access to user and course management functionalities.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Features](#features)
  - [User Features](#user-features)
  - [Teacher Features](#teacher-features)
  - [Admin Features](#admin-features)
- [Tech Stack](#tech-stack)
- [Project Demo Video](#Project-Demo)
## Project Structure
The project is organized into two main folders:
- `frontend/` - Contains the front-end React code for the OLP application.
  - `src/assets/Images` - Stores images used in the frontend.
  - `src/components/admin` - Contains components for admin functionalities.
  - `src/components/common` - Contains common components like login, dashboard, and navbar.
  - `src/components/user/student` - Contains components for student-specific views.
  - `src/components/user/teacher` - Contains components for teacher-specific views.

- `backend/` - Contains the back-end Node.js and Express code for the OLP.
  - `config/` - Database configuration.
  - `controllers/` - Contains controllers for admin and user operations.
  - `middlewares/` - Authentication middleware.
  - `routers/` - Contains route definitions for admin and user routes.
  - `schemas/` - Mongoose schemas for database models.
  - `uploads/` - Stores uploaded files (e.g., course materials).

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Sb2002m97/supriya.git
cd Learning Platform
```

### 2. Install Dependencies

#### Server
```bash
cd backend
npm install
```

#### Client
```bash
cd frontend
npm install
```

## Environment Variables

Create a `.env` file in the `backend` folder and add the following variables:

```plaintext
MONGO_DB=mongodb://localhost:27017/lms
PORT=5000
JWT_KEY=my_super_secret_key_123456
```

- `MONGO_DB`: The MongoDB connection string.
- `PORT`: The server port (default: 5000).
- `JWT_KEY`: Secret key for JSON Web Token (JWT) authentication.

## Usage

### Running the Server
The server will run on port 5000.

```bash
cd backend
node index.js
```

### Running the Client
The client will start on port 3000 by default.

```bash
cd frontend
npm start
```

## Features

### User Features (Students)
- **Course Enrollment**: Students can enroll in courses.
- **View Courses**: Students can access course content and track their progress.
- **Enrolled Courses**: View a list of all courses they’re enrolled in.

### Teacher Features
- **Course Management**: Teachers can add, update, and delete courses.
- **Course Content**: Teachers can upload content for their courses.

### Admin Features
- **User Management**: View and manage all registered users.
- **Course Management**: View and manage all courses available on the platform.
- **Banner Management**: Add and manage banners on the platform (e.g., promotional images).

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)



