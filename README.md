Sure — here is the exact **`README.md` Markdown code** you can copy and paste:

# URL Shortener

A URL Shortener backend built using **Spring Boot, Spring Security, JWT, JPA/Hibernate, and MySQL**.

## 🚀 Features

* User registration and login
* JWT-based authentication
* Secure API endpoints with Spring Security
* Create and manage shortened URLs
* URL redirection using short codes
* Click event tracking
* MySQL database integration
* REST APIs tested using Postman

## 🛠️ Tech Stack

* **Backend:** Java, Spring Boot
* **Security:** Spring Security, JWT
* **Database:** MySQL
* **ORM:** JPA / Hibernate
* **Build Tool:** Maven
* **Testing:** Postman
* **Version Control:** Git & GitHub

## 📁 Project Structure

```text
src/main/java/com/example/demo/
├── controller/
├── dtos/
├── models/
├── repository/
├── service/
└── security/
```

## 📌 Current Status

### Backend

* [x] Authentication & JWT
* [x] URL shortening
* [x] URL redirection
* [x] Click tracking
* [x] Database integration
* [x] API testing

### Frontend

* [ ] Frontend development
* [ ] Backend–frontend integration
* [ ] Dashboard & analytics UI

## 🌿 Branches

* `main` — stable project branch
* `feature-url-shortening` — completed backend
* `feature-frontend` — upcoming frontend development

## ▶️ Run Locally

Configure your MySQL database in `application.properties`, then run:

```bash
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```
