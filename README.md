#!/bin/bash

cat << EOF

# Taskify - Task Management Application

Taskify is a task management application that allows users to create, manage, and track their tasks. It helps users stay organized by providing features such as task creation, updates, deletions, and filtering tasks based on different criteria.

## Features

- **Create tasks**: Add new tasks with title, description, due date, and priority.
- **View tasks**: View all tasks in a list format.
- **Update tasks**: Edit tasks to modify the title, description, priority, or status.
- **Delete tasks**: Remove completed or irrelevant tasks.
- **Filter tasks**: Filter tasks based on status (e.g., Pending, Completed) or priority (Low, Medium, High).

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication (Optional)**: User authentication for managing tasks.

## Project Structure

### Frontend (React)

- **TaskForm**: Component for adding new tasks.
- **TaskList**: Displays all tasks and allows for deletion.
- **TaskItem**: Individual task display and action buttons.
- **App**: Main component that connects the frontend to the backend and manages state.

### Backend (Node.js/Express)

- **Routes**: 
  - `POST /tasks`: Create a new task.
  - `GET /tasks`: Retrieve all tasks.
  - `GET /tasks/:id`: Retrieve a specific task.
  - `PUT /tasks/:id`: Update a task.
  - `DELETE /tasks/:id`: Delete a task.

### Database

- MongoDB is used to store task details, such as title, description, due date, and priority.

## Installation

### Frontend

1. Clone the repository:
   \`git clone https://github.com/celshya/taskify.git\`

2. Navigate to the frontend directory:
   \`cd taskify/frontend\`

3. Install dependencies:
   \`npm install\`

4. Run the application:
   \`npm start\`

### Backend

1. Clone the repository:
   \`git clone https://github.com/celshya/taskify.git\`

2. Navigate to the backend directory:
   \`cd taskify/backend\`

3. Install dependencies:
   \`npm install\`

4. Set up environment variables (\`.env\` file):
   - **MONGO_URI**: Your MongoDB connection URI.
   - **PORT**: Port for the backend server (default is \`5000\`).

5. Run the server:
   \`npm start\`

## Deployment

- **Frontend**: The frontend is deployed on [Vercel](https://vercel.com/).
- **Backend**: The backend is deployed on [Render](https://render.com/).

## API Endpoints

- **POST /tasks**: Create a new task.
- **GET /tasks**: Get all tasks.
- **GET /tasks/:id**: Get a task by ID.
- **PUT /tasks/:id**: Update a task.
- **DELETE /tasks/:id**: Delete a task.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

EOF
