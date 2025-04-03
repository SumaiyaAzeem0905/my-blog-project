Blog Project
A full-stack blog application designed to provide a seamless blogging experience. Built using Spring Boot for the backend, Angular for the frontend, and MySQL as the database, this project allows users to create, manage, and interact with blog posts efficiently. 

## Technologies Used

- **Backend:** Spring Boot
    - Spring Starter Web
    - Spring Data JPA
    - MySQL Driver
   
- **Frontend:** Angular
    - Angular Material
      
- **Database:** MySQL

The backend follows a structured RESTful API approach and includes:

🔹 Controllers

PostController → Manages blog post requests

CommentController → Handles comment-related requests

🔹 Services

PostService → Business logic for handling posts

CommentService → Manages operations related to comments

🔹 Repositories

PostRepository → Extends JpaRepository, handles post-related database operations

CommentRepository → Extends JpaRepository, manages comments storage

Frontend (Angular - TypeScript)
The frontend provides an intuitive and dynamic interface where users can:
✅ Create, edit, and delete blog posts
✅ Like and search for posts
✅ Comment on blog posts
✅ View engagement metrics (likes, views, etc.)



