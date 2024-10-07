1.	CALORIES_SEARCHER:
The website connects to a local MySQL database containing six distinct categories of food and drinks. Users can navigate through each category individually, viewing only the products that belong to the specific category they select. Within each category, all related products are displayed along with their respective calorie counts. This structure allows users to focus on one category at a time, making it easier to explore products relevant to their interests. Additionally, a search feature enables users to find any product across all categories, showing the product along with its calorie information.
At the code level:
Frontend (React):
•	A Navigation Bar has been implemented to provide access to various options across all pages.
•	Within the Navigation Bar, a light/dark mode toggle button has been created using CSS and a toggle function for theme switching.
•	The website includes dedicated “Categories” pages, where users can select a category to view. Upon selection, a RESTful API request is made to the database to retrieve and display all items within that specific category.
•	For the “Search” page, a real-time search function has been implemented. As the user types, the search field dynamically queries items matching the entered letters, displaying predictions in a dropdown list. This feature enhances usability by allowing users to select an item directly from the dropdown instead of typing the full name.
Backend (Java/Spring Boot/Hibernate):
•	RESTful APIs are developed to manage the interaction between the database and frontend, enabling smooth data retrieval and updates.
•	The Spring Framework is integral to the backend, as it organizes application components and manages dependencies. In this application, Spring annotations simplify the creation of controllers for handling API requests and services for processing business logic, ensuring clean and modular code.
•	Spring’s dependency injection is leveraged to streamline the connections between various backend components. This is particularly useful in this application for connecting controllers, services, and repositories, allowing for easy testing and maintenance of the code.
•	Spring Boot is used to quickly configure and run the backend application. By leveraging Spring Boot’s embedded server, the application can be deployed independently, simplifying the setup and reducing the time required to go from development to deployment.
•	Hibernate is used for Object-Relational Mapping (ORM) to simplify database operations. In this application, Hibernate helps to translate complex data interactions, such as retrieving items by category or searching for specific products, into simple Java methods. This reduces the need for extensive SQL code and allows for efficient data access.
•	JPA Repository functionalities, supported by Hibernate, are employed to implement CRUD operations on the database. This allows the application to easily handle user data requests, such as adding, updating, or retrieving product information.



2.	EXERCISE_ADVISOR 
The website provides personalized exercise programs designed according to users' individual data, including height, weight, and age. Users can select specific fitness goals, such as muscle gain, weight loss, or muscle definition, to receive a customized workout plan that aligns with their objectives.
At the code level:
Frontend (React/Bootstrap):
•	A Navigation Bar has been implemented to provide users with access to various options across all pages.
•	Bootstrap has been used to design and implement user-specific pages, such as registration, login, and profile.
•	The registration page requires users to input essential information for program personalization, including height, weight, age, desired program, email, and password for authentication.
•	On the login page, a RESTful request checks if the user exists. If they do, the user is automatically saved in the backend, and all their information is retrieved. A special authentication process is also in place for administrators to access the admin interface, which facilitates data management for exercises and users.
•	The profile page displays user data alongside the personalized program, which includes exercises and the number of sets. This information is generated automatically in the backend.
•	Exception handling is implemented to prevent users from logging in while already logged in or from logging in if their profile does not exist.
Backend (Java/Spring Boot/Hibernate):
•	The database includes two separate tables: one for exercises, detailing characteristics such as difficulty level and associated program, and another for users, containing their specific data.
•	RESTful APIs are developed to facilitate interaction between the database and frontend, ensuring smooth data retrieval and updates.
•	The Spring Framework is essential for organizing application components and managing dependencies. In this application, Spring annotations streamline the creation of controllers for handling API requests and services for processing business logic, resulting in clean and modular code.
•	Spring’s dependency injection is utilized to connect various backend components efficiently. This is particularly beneficial for linking controllers, services, and repositories, allowing for easier testing and maintenance. For this application there are two sets of controllers, services, and repositories, one for users and one for exercises.
•	Spring Boot is employed for rapid configuration and deployment of the backend application. Its embedded server enables independent deployment, simplifying the setup and reducing development time.
•	Hibernate is utilized for Object-Relational Mapping (ORM), simplifying database operations. In this application, Hibernate translates complex data interactions, such as retrieving user and exercise information, into straightforward Java methods, minimizing the need for extensive SQL code and enhancing data access efficiency.
•	JPA Repository functionalities, supported by Hibernate, are used to implement CRUD operations on the database, enabling the application to manage user data requests effectively, such as adding, updating, or retrieving user and program information, most of them used for administration porposes.

1. CHESS
Is a classic chess game for two players, developed in Java using Java Swing for the frontend interface. The primary objective is to capture the opponent's king. The game implements fundamental chess logic, including piece movement, capturing, and turn-based play.
To ensure accurate positioning and spacing of the pieces, a custom measurement system resembling a chessboard tile layout is utilized, allowing precise control over all game processes. The game features a main game loop to manage the running time and flow of the game.
Additionally, special moves such as "Castling" are included, allowing the simultaneous movement of the king and a rook. This implementation enhances gameplay dynamics, making the experience more engaging for players.
