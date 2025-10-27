# ✅ React Task Manager Project (Vite + Tailwind CSS)

This is a React application built using *Vite, styled with **Tailwind CSS*, and includes components, routing, state management, API integration, and theme switching (light/dark mode).

---

## 🚀 Features Implemented

### ✅ *Task 1: Project Setup*
- Created React application using Vite
- Installed and configured Tailwind CSS
- Project structured into: components, pages, hooks, context
- React Router configured for page navigation

### ✅ *Task 2: Component Architecture*
- Reusable components:
  - ✅ Navbar
  - ✅ Footer
  - ✅ Button (variants: primary, secondary, danger)
  - ✅ Card component
- Layout file wraps all pages with Navbar & Footer
- Used props to make components reusable and dynamic

### ✅ *Task 3: State Management & Hooks*
- TaskManager component supports:
  - Add task
  - Mark as completed
  - Delete task
  - Filter tasks (All, Active, Completed)
- Hooks used:
  - useState for managing tasks
  - useEffect to load tasks from localStorage
  - useContext for light/dark theme
- Custom Hook: useLocalStorage to save tasks

### ✅ *Task 4: API Integration*
- Data fetched from JSONPlaceholder API
- Displays API data in grid/list layout
- Loading and error states handled
- Pagination or simple load more option implemented

### ✅ *Task 5: Tailwind CSS Styling*
- Fully responsive design (mobile/tablet/desktop)
- Light/Dark theme switcher using Tailwind dark mode
- Tailwind utility classes used for spacing, colors, layout, typography
- Smooth animations on hover/click

---

## 🗂 Folder Structure


project-folder/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── TaskManager.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   ├── context/
│   │   ├── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md


---

## ⚙ How to Run the Project

### 📌 *1. Install Dependencies*
bash
npm install


### 📌 *2. Start Development Server*
bash
npm run dev


### 📌 *3. Build for Production*
bash
npm run build


---

## 🌍 Deployment

This project is deployed on:

*🔗 Live Link:* your deployed link here  
(Replace with your Vercel / Netlify / GitHub Pages URL)

---

## 📸 Screenshots

Add screenshots of your Home Page, Task Manager, Dark Mode, API Data, etc.

---

## ✅ Technologies Used

| Technology     | Purpose                             |
|----------------|--------------------------------------|
| React + Vite   | Front-end framework & fast bundler  |
| Tailwind CSS   | Styling & responsive design          |
| React Router   | Page navigation                      |
| useState, useEffect, useContext | State management   |
| JSONPlaceholder API | External data fetching        |
| LocalStorage   | Task persistence                    |

---

## 👩‍💻 Author

*Your Name*  
GitHub: https://github.com/your-username

---

### ✅ Final Note
This project fulfills all the requirements of the assignment, including:
✔ Components  
✔ Routing  
✔ State management  
✔ API usage  
✔ Tailwind styling  
✔ Deployment + README