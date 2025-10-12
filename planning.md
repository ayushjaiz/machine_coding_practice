Library Management System

# Features

- Authentication & Authorization

- List a book
- List all books

- Add a book
- Delete a book
- Update a book

- Issue a book
- Return a book


# Routes

Public routes
- GET api/v1/books - Get all books (param avaliable=true: Get only avaliable books)
- GET api/v1/book/:id - Get a book by add 

Routes protected for admin
- POST api/v1/books - Add a Book
- PUT api/v1/books/:id - Update a book
- DELETE api/v1/books/:id - Delete a book

Routes protected for student
- POST api/v1/books/:id/issue
- POST api/v1/books/:id/return
- GET api/v1/my-books


# Tables

Users
- id
- name
- email
- password (hashed)
- role
- createdAt
- updatedAt

Book
- id
- name
- author
- createdAt
- updatedAt

Issues
- book_id
- user_id
- timestamp
- number_of_days


# Choices

- Language & Framework: NodeJs(Express) - Javascript
- Authorization & authentication: JWT
- Database: MongoDB
- Folder Structure: 


# Plan

- Setup basic server, db 
- implement auth
- implement book related functionality
- implement booking feature
- testing


# cases to handle

- Max issues allowed for 3 books
- Return should be allowd only if it is issued by that user
- Admin cannot delete/update an issued book


# Extra points
- Rate limiter
- Pagination
- Caching





