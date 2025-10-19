# 🧩 Hassan Task App

A simple, responsive **Task Management Web App** built with **React (Vite)** and **Tailwind CSS**.  
Users can add, complete, delete, and filter tasks while switching between **light** and **dark** themes.

---

## 🌐 Live Demo
🔗 **Live URL:** [https://hassan-task-app.vercel.app](https://hassan-task-app.vercel.app)

---

## 🗂️ Folder Structure

```
hassan-task-app/
├── public/                     # Static assets
│   └── favicon.ico
│
├── src/                        # Main source code
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Layout and base UI elements
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── TaskManager.jsx
│   │
│   ├── pages/                  # Application pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Tasks.jsx
│   │
│   ├── context/                # Context API (ThemeContext, etc.)
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useLocalStorage.js
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   └── App.css                 # Component-level styles
│
├── package.json                # Project metadata and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite build configuration
└── README.md                   # Project documentation
```

---

## 🚀 Features
✅ Add new tasks  
✅ Mark tasks as completed  
✅ Delete tasks  
✅ Filter tasks (All, Active, Completed)  
✅ Light/Dark mode toggle using Tailwind CSS  
✅ Fully responsive design  
✅ Reusable components (Navbar, Footer, Button, Card)  
✅ Uses `useState`, `useEffect`, `useContext`, and a custom `useLocalStorage` hook  

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Hooks & Context API
- **Hosting:** Vercel

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Hassantaiye.git
```

### 2️⃣ Navigate into the project folder
```bash
cd react-js-jsx-and-css-mastering-front-end-development-Hassantaiye
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Start the development server
```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## 🧱 Build for Production
To create an optimized production build:

```bash
npm run build
```

This generates a `dist` folder ready for deployment.

---

## 🌈 Deployment
This project is automatically deployed on Vercel from the `main` branch. Each push to GitHub triggers a new deployment.

---

## 👨‍💻 Author
**Hassan Taiye Oseni**  
📧 Email: hassantaiwo204@gmail.com  
📞 Phone: 08156228026

---

## 📄 License
This project is open source and available for educational use under the MIT License.
