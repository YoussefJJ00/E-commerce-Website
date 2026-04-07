# Projet Ecomerce Back

A full-stack e-commerce platform with a Spring Boot backend and an Angular frontend.

Spring Boot Angular MySQL Postman XAMPP

## Table of Contents

- Overview
- Features
- Tech Stack
- Project Structure
- Database & API Notes
- Prerequisites
- Installation
- Running the App
- Testing
- Configuration Notes
- GitHub Upload
- License

## Overview

Projet Ecomerce Back is an e-commerce application built for product, category, client, and order management, with a browser-based Angular frontend and a Spring Boot REST API backend.

Key concept

- The backend exposes secure REST endpoints for auth, users, products, categories, clients, orders, and files.
- The frontend consumes those endpoints from a separate Angular application located in `ProjetFrontEnd/`.
- The project was tested with Postman, and it uses XAMPP/MySQL locally to run the backend.

## Features

1. Authentication
- JWT login and logout
- Secure password handling
- Role-based access control

2. Product Management
- Create, update, delete, and list products
- File upload support
- Product image handling

3. Category Management
- Create, update, delete, and list categories

4. Client Management
- Create, update, delete, and list clients

5. Order Management
- Create orders
- Manage order details
- Track order-related data

6. Frontend Interface
- Angular UI for browsing and managing the platform
- Separate frontend app in `ProjetFrontEnd/`

7. API Testing
- APIs were tested with Postman
- Local backend run verified with XAMPP/MySQL

## Tech Stack

### Backend & Services

- Java 17
- Spring Boot 3.3.x
- Spring Web
- Spring Data JPA
- Spring Security
- JWT
- MySQL
- Mail support
- Validation

### Frontend

- Angular 15
- TypeScript
- Bootstrap
- Angular CLI

### Testing

- Spring Boot Test
- H2 in-memory database for automated tests
- Postman for API verification

## Project Structure

```text
.
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/com/example/projet_ecomerce_back/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── payload/
│   │   │   ├── repositories/
│   │   │   ├── security/
│   │   │   ├── services/
│   │   │   └── utils/
│   │   └── resources/
│   └── test/
│       ├── java/com/example/projet_ecomerce_back/
│       └── resources/
├── ProjetFrontEnd/
│   ├── angular.json
│   ├── package.json
│   └── src/
└── upload/
```

## Database & API Notes

### Backend database

The backend is configured to use MySQL locally.

- Database: `formation_db`
- Host: `localhost:3306`
- Default user: `root`

If you use XAMPP, start the MySQL service before launching the backend.

### API base URL

The Angular frontend points to the backend at:

- `http://localhost:8085`

If you change the backend port, update the Angular environment file in:

- `ProjetFrontEnd/src/app/environments/environment.ts`

## Prerequisites

- Java 17
- Maven Wrapper or Maven
- Node.js 16+ and npm
- XAMPP or another MySQL server
- Postman for API testing

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Projet_Ecomerce_Back
```

### 2. Install backend dependencies

```bash
./mvnw test
```

On Windows:

```powershell
.\mvnw.cmd test
```

### 3. Install frontend dependencies

```bash
cd ProjetFrontEnd
npm install
```

## Running the App

### Backend

From the repository root:

```bash
./mvnw spring-boot:run
```

On Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

### Frontend

From `ProjetFrontEnd/`:

```bash
npm start
```

The Angular app runs on `http://localhost:4500` by default.

## Testing

The backend test suite is configured to run with an embedded H2 database, so it does not require MySQL.

Run the tests from the repository root:

```powershell
.\mvnw.cmd test
```

Testing notes

- APIs were tested with Postman.
- The backend was run locally using XAMPP/MySQL.
- Automated tests pass with the H2 test profile.

## Configuration Notes

- Main backend settings live in `src/main/resources/application.properties`.
- Test-only database settings live in `src/test/resources/application-test.properties`.
- The frontend backend URL lives in `ProjetFrontEnd/src/app/environments/environment.ts`.
- Do not commit real credentials for MySQL, mail, JWT secrets, or API keys.

## GitHub Upload

Not pushed yet.

When you give the go-ahead, the next step is to initialize or connect the Git repository, add the GitHub remote for `YOUSSEFJJ00`, and push the project.

## License

No license file is currently defined in this repository.

## Support

If you want, I can also turn this into a more polished GitHub README with badges, screenshots, and setup commands tailored for your final repo name.
