# 🔗 Linkly — URL Shortener

**Linkly** is a full-stack URL shortening platform that allows users to create, manage, and track shortened URLs through a secure and user-friendly interface.

The project is built using **React, Java, Spring Boot, Spring Security, JWT, JPA/Hibernate, and MySQL**, with the frontend and backend deployed separately.

---

## 🌐 Live Demo

### 🚀 Frontend

**https://sonal-linkly.netlify.app/**

### ⚙️ Backend API

**https://url-shortener-yt80.onrender.com**

The frontend communicates with the deployed Spring Boot backend through REST APIs.

---

## ✨ Features

### 👤 Authentication & Security

* User registration and login
* JWT-based authentication
* Secure API endpoints using Spring Security
* Protected user-specific resources

### 🔗 URL Management

* Create shortened URLs
* Generate unique short codes
* Redirect users using short URLs
* Manage created URLs
* User-specific URL management

### 📊 Analytics & Tracking

* Track URL click events
* Monitor total clicks
* Retrieve click statistics
* Analytics support for shortened URLs

### 🌐 Full-Stack Application

* React-based frontend
* Spring Boot REST API backend
* MySQL database
* Secure frontend-backend communication
* Deployed frontend and backend

---

## 🛠️ Tech Stack

| Category            | Technology           |
| ------------------- | -------------------- |
| Frontend            | React                |
| Backend             | Java, Spring Boot    |
| Security            | Spring Security, JWT |
| Database            | MySQL                |
| ORM                 | JPA / Hibernate      |
| API                 | REST APIs            |
| Build Tool          | Maven                |
| API Testing         | Postman              |
| Version Control     | Git & GitHub         |
| Frontend Deployment | Netlify              |
| Backend Deployment  | Render               |

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    │   Web Browser       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │      Netlify        │
                    └──────────┬──────────┘
                               │
                         REST API Calls
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Spring Boot API   │
                    │       Render        │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
         ┌────────────┐ ┌────────────┐ ┌────────────┐
         │  Security  │ │  Services  │ │ Controllers│
         │ JWT +      │ │  Business  │ │ REST APIs  │
         │ Spring     │ │   Logic    │ │            │
         │ Security   │ │            │ │            │
         └────────────┘ └─────┬──────┘ └────────────┘
                              │
                              ▼
                       ┌─────────────┐
                       │ JPA/Hibernate│
                       └──────┬──────┘
                              │
                              ▼
                       ┌─────────────┐
                       │    MySQL    │
                       └─────────────┘
```

---

## 🔐 Authentication Flow

Linkly uses **JWT (JSON Web Token)** authentication to secure user-specific APIs.

```text
User
 │
 ▼
Register / Login
 │
 ▼
Spring Boot Authentication
 │
 ▼
JWT Token Generated
 │
 ▼
Frontend Stores Token
 │
 ▼
Authenticated API Request
 │
 ▼
Spring Security Validates JWT
 │
 ▼
Authorized Request
```

---

## 🔗 URL Shortening Flow

```text
Original URL
     │
     ▼
Frontend
     │
     ▼
Spring Boot REST API
     │
     ▼
Generate Unique Short Code
     │
     ▼
Store URL in MySQL
     │
     ▼
Return Short URL
     │
     ▼
User Opens Short URL
     │
     ▼
Backend Finds Original URL
     │
     ▼
Record Click Event
     │
     ▼
Redirect to Original URL
```

---

## 📊 Click Tracking

Linkly tracks activity associated with shortened URLs.

The analytics functionality allows users to:

* View total clicks
* Track URL usage
* Monitor individual shortened URLs
* Retrieve click statistics
* Analyze URL performance

---

## 📁 Project Structure

```text
src/main/java/com/example/demo/
│
├── controller/
│   └── REST API endpoints
│
├── dtos/
│   └── Data Transfer Objects
│
├── models/
│   └── Database entities
│
├── repository/
│   └── JPA repositories
│
├── service/
│   └── Business logic
│
└── security/
    └── JWT & Spring Security configuration
```

---

## 🔌 REST API

The backend provides RESTful APIs for authentication, URL management, redirection, and analytics.

| Functionality   | Description                  |
| --------------- | ---------------------------- |
| Authentication  | User registration and login  |
| URL Creation    | Generate shortened URLs      |
| URL Management  | Manage user's shortened URLs |
| URL Redirection | Redirect using short codes   |
| Click Tracking  | Record URL click events      |
| Analytics       | Retrieve click statistics    |

API endpoints can be tested using **Postman**.

---

## 🧪 API Testing

The backend APIs were tested using Postman.

Typical application flow:

```text
Register
   ↓
Login
   ↓
Receive JWT
   ↓
Authorize API Requests
   ↓
Create Short URL
   ↓
Manage URL
   ↓
Open Short URL
   ↓
Track Click
   ↓
View Analytics
```

---

## 🚀 Running the Project Locally

### Prerequisites

Make sure the following are installed:

* Java
* Maven
* MySQL
* Node.js
* Git

### Backend

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <BACKEND_DIRECTORY>
```

Configure the MySQL database in:

```text
src/main/resources/application.properties
```

Then run:

```bash
mvn clean install
mvn spring-boot:run
```

The backend will start at:

```text
http://localhost:8080
```

### Frontend

Navigate to the frontend directory and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

## 🌍 Deployment

Linkly uses separate deployment environments for the frontend and backend.

```text
React Frontend
      │
      ▼
   Netlify
      │
      │ REST API
      ▼
Spring Boot Backend
      │
      ▼
    Render
      │
      ▼
    MySQL
```

### Hosted Application

**Frontend:**
https://sonal-linkly.netlify.app/

**Backend:**
https://url-shortener-yt80.onrender.com

---

## 🌿 Git Workflow

The project was developed using Git and GitHub with feature-based branches.

```text
main
│
├── feature-url-shortening
│
└── feature-frontend
```

The `main` branch contains the integrated and completed project.

---

## 🎯 Project Objectives

The main objectives of Linkly were to:

* Build a complete full-stack web application
* Implement secure user authentication
* Understand JWT-based authorization
* Develop RESTful APIs using Spring Boot
* Work with relational databases using JPA/Hibernate
* Implement URL shortening and redirection
* Track URL click activity
* Integrate a React frontend with a Spring Boot backend
* Deploy a full-stack application to the cloud

---

## 💡 What I Learned

Through Linkly, I gained practical experience in:

* Full-stack web development
* Java and Spring Boot
* REST API development
* Spring Security and JWT authentication
* Database design and MySQL
* JPA/Hibernate
* React frontend development
* Frontend-backend integration
* API testing with Postman
* Git and GitHub workflows
* Cloud deployment using Netlify and Render
* Debugging and troubleshooting full-stack applications

---

## 👩‍💻 Developer

**Sonal Wadkar**

B.Tech Computer Science & Engineering

---

## 📄 License

This project was developed for educational and portfolio purposes.
