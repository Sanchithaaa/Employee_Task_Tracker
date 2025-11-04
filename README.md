📌 Employee Task Tracker
-> This is a simple full-stack web project where we can:
-> Add employees
-> Assign tasks to employees
-> Update task status (ex: Completed)
-> View employee task performance
-> Basic dashboard summary

I built this project to practice Spring Boot + React + MySQL and understand how frontend and backend work together in a real application.

🧰 Tech Stack
Part	              Technology
Frontend	      React (Vite), Material UI, Axios
Backend	        Spring Boot, Spring Data JPA, Lombok
Database	      MySQL
Tools	          Postman, Maven, Git, VS Code

📂 Project Structure
Employee_Task_Tracker/
 ├── tracker        -> Spring Boot backend
 └── tracker-ui     -> React frontend

✨ Features
-> Add & view employees
-> Assign tasks to specific employees
-> Change task status (ex: Completed)
-> View performance based on completed tasks
-> Simple dashboard with summary

🧠 What I Learned
-> Creating REST APIs in Spring Boot
-> MySQL database design & one-to-many mapping
-> Testing APIs using Postman
-> Calling APIs from React using Axios
-> Using Material UI components
-> Handling React state and forms
-> Folder structure for full-stack project
-> Basic Git & GitHub usage

⚙️ How to Run
Backend
cd tracker
mvn spring-boot:run


Create MySQL DB:
-> CREATE DATABASE task_tracker;
-> Update DB username & password in application.properties.

Frontend
cd tracker-ui
npm install
npm run dev

🚀 Future Improvements
-> Login & authentication
-> More UI improvements
-> Online deployment
