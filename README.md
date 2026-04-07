# E-commerce Website

A full-stack e-commerce platform with a Spring Boot REST API backend and an Angular 15 frontend.

[![Java 17](https://img.shields.io/badge/Java-17-ED8B00?style=flat&logo=java)](https://www.oracle.com/java/)
[![Spring Boot 3.3](https://img.shields.io/badge/Spring%20Boot-3.3-6DB33F?style=flat&logo=springboot)](https://spring.io/projects/spring-boot)
[![Angular 15](https://img.shields.io/badge/Angular-15-DD0031?style=flat&logo=angular)](https://angular.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8+-4479A1?style=flat&logo=mysql)](https://www.mysql.com/)
[![Postman](https://img.shields.io/badge/API_Tested-Postman-FF6C37?style=flat&logo=postman)](https://www.postman.com/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Database & API Notes](#database--api-notes)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Configuration Notes](#configuration-notes)
- [License](#license)

## Overview

E-commerce Website is a comprehensive e-commerce platform designed for product, category, client, and order management with a modern web interface and secure REST API backend.

**Key features:**

- Secure JWT-based authentication and authorization
- REST API backend built with Spring Boot 3.3 and MySQL
- Interactive Angular 15 frontend with Bootstrap styling
- Complete CRUD operations for products, categories, clients, and orders
- File upload support for product images
- All APIs tested and verified with **Postman**
- Local deployment supported with **XAMPP/MySQL**

## Features

### Authentication & Security
- JWT-based login and logout
- Secure password handling with validation
- Role-based access control (RBAC)
- User authentication with Spring Security

### Product Management
- Create, update, delete, and list products
- File upload support for product images
- Product categorization and filtering
- Inventory tracking

### Category Management
- Create, update, delete, and list product categories
- Category-based product organization
- Hierarchical category support

### Client Management
- Create, update, delete, and list client profiles
- Client information management
- Order history tracking

### Order Management
- Create and manage customer orders
- Order detail tracking
- Order status management
- Order history and analytics

### Frontend Interface
- Responsive Angular 15 UI
- Bootstrap-based design
- Intuitive user interface for all operations
- Real-time data management

### API Testing & Verification
- All endpoints tested with **Postman**
- Backend verified with **XAMPP/MySQL** environment
- Production-ready API documentation

## Screenshots

### Login Page
![Login Interface](https://raw.githubusercontent.com/YoussefJJ00/E-commerce-Website/main/screenshots/login-page.png)

*E-commerce application login interface with username and password fields.*

## Tech Stack

### Backend & Services
- **Java 17** - Core language
- **Spring Boot 3.3.x** - Application framework
- **Spring Web** - REST API development
- **Spring Data JPA** - Database access layer
- **Spring Security** - Authentication and authorization
- **JWT** - Token-based security
- **MySQL 8+** - Primary database
- **Mail support** - Email notifications
- **Validation** - Input validation framework

### Frontend
- **Angular 15** - Frontend framework
- **TypeScript** - Language for Angular
- **Bootstrap 5** - UI toolkit and styling
- **Angular CLI** - Development tools

### Testing & Quality
- **Spring Boot Test** - Unit and integration testing
- **H2 Database** - In-memory database for tests
- **Postman** - API endpoint testing and verification
- **JUnit** - Test framework

## Project Structure

```text
.
├── pom.xml                                 # Maven configuration
├── README.md                               # Project documentation
├── mvnw / mvnw.cmd                        # Maven wrapper
│
├── src/
│   ├── main/
│   │   ├── java/com/example/projet_ecomerce_back/
│   │   │   ├── controllers/               # REST endpoints
│   │   ├── models/                    # Entity classes
│   │   ├── payload/                   # DTOs (request/response)
│   │   ├── repositories/              # Data access layer
│   │   ├── security/                  # JWT and security config
│   │   ├── services/                  # Business logic
│   │   └── utils/                     # Utility classes
│   │   └── resources/
│   │       ├── application.properties     # Main config
│   │       ├── static/                    # Static files
│   │       └── templates/                 # Email templates
│   │
│   └── test/
│       ├── java/com/example/projet_ecomerce_back/
│       │   └── ProjetEcomerceBackApplicationTests.java
│       └── resources/
│           └── application-test.properties # Test config (H2)
│
├── ProjetFrontEnd/                        # Angular frontend app
│   ├── angular.json
│   ├── package.json
│   ├── src/
│   │   ├── app/                           # Angular components
│   │   ├── assets/                        # Static assets
│   │   └── environments/                  # Configuration
│   └── ...
│
└── upload/                                # File upload directory
```

## Database & API Notes

### Backend Database

The backend is configured to use MySQL locally by default.

**Default configuration:**
- **Host:** localhost:3306
- **Database:** formation_db
- **Username:** root
- **Port:** 8085

> **Note:** If you use XAMPP, start the MySQL service before launching the backend.

### API Base URL

The Angular frontend points to the backend at:

```
http://localhost:8085
```

If you change the backend port, update the Angular environment file:

- `ProjetFrontEnd/src/app/environments/environment.ts`

## Prerequisites

- Java 17 or higher
- Maven Wrapper or Maven 3.6+
- Node.js 16+ and npm 8+
- XAMPP or MySQL Server 8+
- Postman (optional, for API testing)
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YoussefJJ00/E-commerce-Website.git
cd E-commerce-Website
```

### 2. Set Up the Backend

**a) Start MySQL (if using XAMPP)**
- Open XAMPP Control Panel
- Start the MySQL service

**b) Build and test the backend**

```bash
# Windows
.\mvnw.cmd test

# Linux/macOS
./mvnw test
```

### 3. Set Up the Frontend

```bash
cd ProjetFrontEnd
npm install
```

## Running the App

### Backend

From the repository root:

```bash
# Windows
.\mvnw.cmd spring-boot:run

# Linux/macOS
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8085`

### Frontend

From the `ProjetFrontEnd/` directory:

```bash
npm start
```

The Angular app will run on `http://localhost:4500`

### Access the Application

Open your browser and navigate to:
```
http://localhost:4500
```

## Testing

### Run Backend Tests

From the repository root:

```bash
# Windows
.\mvnw.cmd test

# Linux/macOS
./mvnw test
```

The test suite uses an embedded **H2 database**, so it does not require MySQL to be running.

### Test with Postman

1. Open **Postman**
2. Import the API collection (if available in the repository)
3. Configure the base URL to: `http://localhost:8085`
4. Run the endpoint tests

**Testing Notes:**
- ✅ All APIs tested and verified with Postman
- ✅ Backend context load test passes with H2 test profile
- ✅ Backend runs locally with XAMPP/MySQL

## Configuration Notes

### Main Configuration Files

- **Backend:** `src/main/resources/application.properties`
- **Test:** `src/test/resources/application-test.properties`
- **Frontend:** `ProjetFrontEnd/src/app/environments/environment.ts`

### Security Best Practices

Do not commit real credentials for:
- MySQL passwords
- Mail provider credentials
- JWT secret keys
- API keys

### Production Deployment

For production use, externalize all secrets using:
- Environment variables
- Secret management services
- Configuration management tools

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Youssef Ghouila**
- GitHub: [@YoussefJJ00](https://github.com/YoussefJJ00)
- Email: youssefghouilz@gmail.com

---

Made with ❤️ by Youssef Ghouila
