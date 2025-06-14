
📋 iTask - Your Daily Task Manager

A simple and elegant To-Do List Web App built with React.js.
Designed to help you organize your day, stay productive, and track completed tasks effortlessly — all stored right in your browser’s local storage, so your data persists even after refresh!

⸻

🌟 Features
	•	✅ Add new tasks instantly
	•	📝 Edit existing tasks with ease
	•	🗑️ Delete tasks you no longer need
	•	☑️ Mark tasks as complete/incomplete
	•	👀 Toggle to show/hide finished tasks
	•	💾 Auto-saves data to localStorage — no database needed
	•	📱 Responsive UI – works on mobile, tablet & desktop
	•	⚡ Built with Vite for fast performance

⸻

🧑‍💻 Tech Stack
	•	React.js – UI and component logic
	•	Tailwind CSS – utility-first responsive styling
	•	Vite – next-gen build tool for ultra-fast development
	•	UUID – to generate unique IDs for each task
	•	LocalStorage – for persisting tasks in the browser


🚀 Getting Started

1. Clone the repository

git clone https://github.com/Rachittyagi17/react-to-do-list.git
cd react-todo-list

2. Install dependencies

npm install

3. Start the development server

npm run dev

Open http://localhost:5173 to view it in your browser.
To test it on mobile, run:

npm run dev -- --host

Then visit the shown IP on your phone (e.g., http://192.168.x.x:5173).

⸻

🛠 Folder Structure

<pre>
src/
├── components/
│   └── Navbar.jsx
├── App.jsx
├── main.jsx
├── index.css
</pre>



⸻

💡 Future Improvements 
	•	Add deadlines & reminders
	•	Add dark/light mode toggle
	•	Backend support (Firebase or MongoDB)
	•	Task category filters (work, personal, etc.)

⸻

🧑‍🎓 Ideal For
	•	React beginners looking to build their first real app
	•	Anyone who wants a lightweight task manager
	•	Showcasing your frontend skills in a portfolio

⸻

📄 License

This project is open-source and available under the MIT License.

⸻


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
