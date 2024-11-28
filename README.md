# Healthcare System Backend with Authentication, Authorization, and Role-Based Access Control (RBAC)
This project is a Healthcare System Backend built using Node.js and MongoDB. The backend provides secure authentication, authorization, and role-based access control (RBAC) to manage various types of users (Admin, Moderator, and User) in a healthcare application. The system allows users to register, log in, and interact with resources based on their assigned roles. Different roles have different levels of access, ensuring that the system remains secure and properly organized.
# Features:
## Authentication (JWT-based):

User Registration: Allows new users to register with a username, email, password, and role (Admin, Moderator, or User).
User Login: Allows existing users to log in using their email and password. On successful login, a JWT (JSON Web Token) is issued for secure communication and further access to protected routes.
JWT Authentication: Protects sensitive routes by verifying the token sent in the HTTP request headers.

## Role-Based Access Control (RBAC):

Roles: There are three roles in the system:
Admin: Has full access to all resources and can view and manage all users.
Moderator (Doctor): Can create and manage appointments, but has limited access compared to admins.
User: Can only view content and their own profile, with no permissions to manage appointments or users.
Role-based Middleware: Middleware is implemented to ensure that only users with the appropriate roles can access specific routes (e.g., only Admin can view all users, only Moderators can manage appointments).

## Appointments Management:

Create Appointments: Moderators (doctors) can create new appointments for users. Appointments can be in different statuses like "pending," "confirmed," or "completed."
Appointment Schema: The system stores appointment data, linking the user and the moderator (doctor) to specific appointments.
Secure and Scalable Architecture:

Express.js: The backend is built using Express.js, a lightweight web framework for building RESTful APIs.
MongoDB: The system uses MongoDB as the NoSQL database to store user and appointment data. Mongoose is used for managing the database schema and interactions.
Environment Variables: Configuration and sensitive data (like JWT secret and MongoDB URI) are stored in a .env file to keep the application secure.
