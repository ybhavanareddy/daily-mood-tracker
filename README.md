# 😊 Daily Mood Tracker

![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=flat-square&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue?style=flat-square&logo=css3)
![Recharts](https://img.shields.io/badge/Recharts-Data%20Visualization-green?style=flat-square)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

A **responsive Daily Mood Tracker** built using **React.js** that allows users to track their daily emotions using emojis on a calendar and analyze mood patterns through filters and reports.

This project focuses on **real-world frontend architecture**, clean UI/UX, state management, and analytics-style dashboards.

---

## 🚀 Live Demo
🔗  https://daily-mood-tracker-two.vercel.app/

---

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|--------|
| ⚛️ **React.js (Vite)** | Frontend framework |
| ✨ **JavaScript (ES6)** | Application logic |
| 🎨 **CSS3** | Component-level styling |
| 📊 **Recharts** | Data visualization |
| 🍪 **js-cookie** | Mock authentication handling |
| 💾 **localStorage** | Client-side data persistence |

---

## ✨ Features

✔️ **Login Page with Mock Authentication**  
✔️ **Calendar-Based Mood Tracking**  
✔️ Emoji selection with add / replace / remove functionality  
✔️ Month & year navigation  
✔️ **Emoji & Day Filters** with non-destructive visual highlighting  
✔️ **Reports Dashboard**

- Overall emoji count
- Month-wise mood analytics using bar charts
  
✔️ Mood data persistence using **localStorage**  
✔️ Fully **responsive UI** (Desktop, Tablet, Mobile)  
✔️ Clean component-based architecture  

---

## 🔐 Authentication (Mock Login)

This project uses a **mock authentication flow** to simulate real-world login behavior on the frontend.

### How it works:
- User enters a username and password
- A mock token is stored in cookies
- Protected routes are accessible only after login

> ⚠️ **Note:**  
> This is a frontend-only mock authentication.  
> It does not include backend validation or real JWT generation.  
> The structure supports easy integration with a real backend in the future.

### 🧪 Sample Login Credentials

Use the following credentials to access the app:

Username: Bhavana
Password: bhavana@123 


---

## 💾 Data Persistence

Mood data is persisted using **browser localStorage**.

### Behavior:
- Selected moods remain available after page refresh
- Data is retained even after logout and re-login
- This simulates session persistence in a frontend-only application

> In a production setup, this would typically be handled by a backend and database.

---

## 🧠 Key Concepts Implemented

- Component-based architecture
- State lifting and derived state
- Controlled components
- Non-destructive filtering (UX-driven)
- Calendar logic with dynamic date generation
- Client-side persistence using localStorage
- Responsive layouts using **CSS Grid & Flexbox**
- Chart-driven analytics using Recharts

---

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── Header/
│   ├── EmojiSelector/
│   ├── Calendar/
│   └── Filters/
├── pages/
│   ├── Login/
│   ├── Home/
│   ├── Reports/
|   └── NotFound/
├── routes/
|   └── ProtectedRoute.jsx
├── services/
|   └──authService.js
├── utils/
│   └── constants.js
├── App.jsx
├── index.css
├── index.html
└── main.jsx

```

## How to Run Locally

1️⃣ Clone the repository
    ```
        git clone <https://github.com/ybhavanareddy/daily-mood-tracker.git>
    ```

2️⃣ Navigate into the project folder
    ```
        cd daily-mood-tracker
    ```


3️⃣ Install dependencies
    ```
        npm install
    ```

4️⃣ Start the development server
    ```
        npm run dev
    ```

## 📜 License

This project is licensed under the MIT License.

## 👩‍💻 Author

Bhavana
Frontend Developer | React Enthusiast

🔗 LinkedIn
http://www.linkedin.com/in/yatham-bhavana

⭐ If you like this project, give it a star!
