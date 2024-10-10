# MERN Stack Task Management App - Machine Test

## Overview

This test requires you to build a simplified **Task Management App** using the **MERN Stack** (**MongoDB**, **Express**, **React**, and **Node.js**). The app will allow users to manage tasks by performing basic CRUD (Create, Read, Update, Delete) operations. You will focus on building a minimal full-stack solution with basic UI and backend logic. The expected time to complete the test is **2 hours**.

## Key Requirements

### 1. **Backend (Node.js, Express, MongoDB)**:
- **Basic Authentication**:
  - Implement user registration and login using **JWT** (JSON Web Tokens).

- **Data Models**:
  - **User**: Name, Email, Password (hashed).
  - **Task**: Title, Description, Status (To Do, In Progress, Completed), User (reference to User ID).

- **API Endpoints**:
  - **/api/auth/register** (POST): Register a new user.
  - **/api/auth/login** (POST): Login a user and return a JWT.
  - **/api/tasks** (GET): Retrieve tasks for the logged-in user.
  - **/api/tasks** (POST): Create a new task.
  - **/api/tasks/:id** (PUT): Update a task’s status or details.
  - **/api/tasks/:id** (DELETE): Delete a task.

- **Validation**: (Optional)
  - Use server-side validation for all input fields using libraries like **Joi** or **express-validator**.

### 2. **Frontend (React)**:
- **Authentication**:
  - Create a basic login and registration form.
  - Use **React Context** or **useState** to manage authentication state.

- **Task Management**:
  - Display a list of tasks for the logged-in user.
  - Create new tasks and update their status (To Do, In Progress, Completed).
  - Basic form validation for task creation.

- **UI/UX**:
  - Simple and responsive design using **CSS** or a framework like **Bootstrap**.

### 3. **Testing** (Bonus/Optional):
- Write a simple unit test for one API route (e.g., task creation) using **Jest** or **Mocha**.

## Prerequisites

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community) or use **MongoDB Atlas**.

## Getting Started

### 1. **Backend Setup**:
1. Clone the repository:
    ```bash
    git clone <backend-repo-url>
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with the following variables:
    ```bash
    PORT=5000
    MONGODB_URI=<your-mongodb-uri>
    JWT_SECRET=<your-secret-key>
    ```

4. Run the backend server:
    ```bash
    npm start
    ```

   The backend will be available at `http://localhost:5000`.

### 2. **Frontend Setup**:
1. Clone the repository:
    ```bash
    git clone <frontend-repo-url>
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the frontend:
    ```bash
    npm start
    ```

   The frontend will be available at `http://localhost:3000`.

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login and obtain JWT token.

### Tasks
- **GET /api/tasks**: Retrieve tasks for the logged-in user.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/:id**: Update task details or status.
- **DELETE /api/tasks/:id**: Delete a task.

## Submission

1. Push your code to a **Git
