# 🗓️ Daily Schedule Manager

A simple full-stack web application for managing daily tasks and schedules.

✅ Built with:

- **Frontend:** React (Single Page App)
- **Backend:** Spring Boot REST API
- **Database:** H2 / MySQL / Postgres (configurable via Spring Data JPA)

---

## 🌟 Features

- View all tasks
- Create a new task
- Edit an existing task
- Delete a task
- Support for:
    - Single-date tasks
    - Repeating daily tasks (repeatDaily flag)
    - Simple, clean UI
    - REST API fully documented via code

---

## 🗂️ Project Structure

daily-schedule-manager/
├── backend/ # Spring Boot application (REST API)
│ ├── src/ # Java source code
│ ├── pom.xml # Maven build file
├── frontend/ # React application (SPA)
│ ├── src/ # React components and code
│ ├── public/ # Static files
│ ├── package.json # React project dependencies
└── README.md # Project documentation

---

## 🚀 How to Run the Application

### 1️⃣ Prerequisites

- Java 17+ (OpenJDK or Oracle JDK)
- Maven 3.6+
- Node.js 18+ with npm

---

### 2️⃣ Running the Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
👉 Backend will start on: http://localhost:8080

3️⃣ Running the Frontend (React)
cd frontend
npm install
npm start
👉 Frontend will start on: http://localhost:3000

4️⃣ Cross-Origin (CORS)
CORS is enabled via:

@CrossOrigin(origins = "http://localhost:3000")
This allows the React app to communicate with the backend during development.
```

🔗 REST API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/{id}	Get a specific task
POST	/api/tasks	Create a new task
PUT	/api/tasks/{id}	Update an existing task
DELETE	/api/tasks/{id}	Delete a task

```🗄️ Task Model

{
    "id": Long,
    "title": String,
    "description": String,
    "date": "YYYY-MM-DD" | null,
    "repeatDaily": Boolean
}
```
If date is null → task is repeating daily.

If repeatDaily is true → task repeats daily regardless of date.

## 🧑‍💻 Developer Notes
React components:

TaskForm → create a task

TaskItem → view/edit/delete a task

TaskList → show all tasks

## Spring Boot layers:

TaskController → REST controller

TaskService → business logic

TaskRepository → database access

Task → JPA Entity

## 🚀 Future Improvements
- Add authentication (JWT / OAuth2)
- Add due date reminders / notifications
- Add task categories or labels
- Add search/filter capabilities
- Add pagination for large task lists
- Improve UI with Material UI or Bootstrap
- Add unit and integration tests
