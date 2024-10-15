# Jobee Backend Documentation

## Overview

**Jobee** is a job platform designed to provide ALX graduates with reliable and trusted job opportunities. This backend service handles user authentication, job postings, email notifications, and secure access to various features. The backend is built using **Node.js**, **Express.js**, **Nodemailer** for email services, and **JWT** (JSON Web Tokens) for secure authentication.

## Technologies Used

- **Node.js**: A JavaScript runtime for building fast, scalable server-side applications.
- **Express.js**: A web framework for Node.js, used for building APIs.
- **Nodemailer**: For sending email notifications.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization of users.

## Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine.
- **MongoDB**: For data storage.
- **Environment Variables**: Set up `.env` file for sensitive data such as:
  - `PORT`: The port the server runs on.
  - `MONGODB_URI`: The connection string for MongoDB.
  - `JWT_SECRET`: The secret key used for signing JWT tokens.
  - `EMAIL_USER`: The email address used by Nodemailer.
  - `EMAIL_PASS`: The password for the email account.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/jobee-backend.git
   cd jobee-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file at the root of the project and add the following:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. **Run the server**:
   ```bash
   npm start
   ```

## How It Works

The Jobee backend follows a RESTful API approach, where resources like `users`, `jobs`, and `applications` are exposed via well-defined endpoints. Below is a step-by-step explanation of how different parts of the backend work.

### 1. **User Authentication**

- **Registration**:
  - **Route**: `POST /api/auth/register`
  - **Description**: Registers a new user (ALX graduate).
  - **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "your_password"
    }
    ```
  - **Response**:
    - **201 Created**: User registered successfully, returns a JWT token.
    - **400 Bad Request**: Missing required fields or invalid input.

- **Login**:
  - **Route**: `POST /api/auth/login`
  - **Description**: Logs in a registered user and generates a JWT.
  - **Request Body**:
    ```json
    {
      "email": "john@example.com",
      "password": "your_password"
    }
    ```
  - **Response**:
    - **200 OK**: Returns a JWT token for authenticated access.
    - **401 Unauthorized**: Incorrect email or password.

### 2. **Job Postings**

- **Create a Job**:
  - **Route**: `POST /api/jobs`
  - **Description**: Allows authenticated employers to post a new job.
  - **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Request Body**:
    ```json
    {
      "title": "Frontend Developer",
      "company": "TechCorp",
      "location": "Remote",
      "description": "Looking for a skilled frontend developer...",
      "requirements": "Experience with React, JavaScript..."
    }
    ```
  - **Response**:
    - **201 Created**: Job created successfully.
    - **400 Bad Request**: Missing required fields.

- **Get All Jobs**:
  - **Route**: `GET /api/jobs`
  - **Description**: Retrieves a list of all job postings.
  - **Response**:
    - **200 OK**: Returns an array of job objects.

- **Get a Single Job**:
  - **Route**: `GET /api/jobs/:id`
  - **Description**: Retrieves details of a specific job by ID.
  - **Response**:
    - **200 OK**: Returns the job object.
    - **404 Not Found**: Job not found.

- **Update a Job**:
  - **Route**: `PUT /api/jobs/:id`
  - **Description**: Allows employers to update their job postings.
  - **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Request Body**: Fields to be updated.
  - **Response**:
    - **200 OK**: Job updated successfully.
    - **403 Forbidden**: User is not the owner of the job.
    - **404 Not Found**: Job not found.

- **Delete a Job**:
  - **Route**: `DELETE /api/jobs/:id`
  - **Description**: Deletes a job by ID.
  - **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Response**:
    - **200 OK**: Job deleted successfully.
    - **403 Forbidden**: User is not the owner of the job.
    - **404 Not Found**: Job not found.

### 3. **Job Applications**

- **Apply for a Job**:
  - **Route**: `POST /api/jobs/:id/apply`
  - **Description**: Allows users to apply for a job.
  - **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Request Body**:
    ```json
    {
      "coverLetter": "I am very interested in this role..."
    }
    ```
  - **Response**:
    - **201 Created**: Application submitted successfully.
    - **404 Not Found**: Job not found.

- **Get Applications for a Job**:
  - **Route**: `GET /api/jobs/:id/applications`
  - **Description**: Allows employers to view applications for a specific job.
  - **Request Headers**: `Authorization: Bearer <JWT_TOKEN>`
  - **Response**:
    - **200 OK**: Returns an array of application objects.
