<div align="center">

# 💼 DataPortfolio

### ✨ A Modern Portfolio Website for Data Science & Engineering Projects

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📖 About

DataPortfolio is a modern, responsive portfolio website built with **Vite + React + TypeScript**, designed for showcasing data science, machine learning, and engineering projects. It features a clean, professional UI with dark mode support, smooth animations, and optimized performance.

## ✨ Features

- ⚡ **Lightning Fast** - Powered by Vite for instant HMR and optimized builds
- 🎨 **Modern UI** - Built with React, TypeScript, and Tailwind CSS
- 🌗 **Dark/Light Mode** - Seamless theme switching with next-themes
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🧠 **Comprehensive Sections** - Projects, Experience, Skills, Education, and Contact
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🔐 **Authentication** - Secure login with Passport.js
- 📊 **Data Visualization** - Interactive charts with Recharts
- 🗄️ **Database Integration** - PostgreSQL with Drizzle ORM
- 🚀 **Easy Deployment** - Ready to deploy on Vercel or any Node.js hosting

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React](https://react.dev/) 18.3.1
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5.6.3
- **Build Tool:** [Vite](https://vitejs.dev/) 5.4.19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4.17
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [Wouter](https://github.com/molefrog/wouter)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **State Management:** [TanStack Query](https://tanstack.com/query/)

### Backend
- **Runtime:** [Node.js](https://nodejs.org/) with Express
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Neon](https://neon.tech/)
- **ORM:** [Drizzle](https://orm.drizzle.team/)
- **Authentication:** [Passport.js](http://www.passportjs.org/)
- **Session Management:** Express Session with PostgreSQL store

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- 🟢 **Node.js** (v16 or higher)
- 📦 **npm** or **yarn** or **pnpm**
- 🐘 **PostgreSQL** database (local or cloud like Neon)

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rohit11-OG/Portfolio.git
cd Portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add your configuration:

```env
DATABASE_URL=your_postgresql_database_url
SESSION_SECRET=your_session_secret
NODE_ENV=development
```

### 4️⃣ Initialize Database

```bash
npm run db:push
```

### 5️⃣ Run Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5000` 🎉

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| 🔧 `npm run dev` | Start development server with hot reload |
| 🏗️ `npm run build` | Build for production (client + server) |
| ▶️ `npm start` | Run production server |
| ✅ `npm run check` | Type-check TypeScript files |
| 🗄️ `npm run db:push` | Push database schema changes |

## 📂 Project Structure

```
Portfolio/
├── 📁 client/              # Frontend React application
│   ├── src/                # Source code: components, hooks, pages
│   └── index.html          # HTML entry point
├── 📁 server/              # Backend Express server
├── 📁 shared/              # Shared types and utilities
├── 📁 attached_assets/     # Static images and logos
├── ⚙️ vite.config.ts       # Vite build configuration
├── ⚙️ tsconfig.json        # TypeScript settings
├── ⚙️ tailwind.config.ts   # Tailwind CSS configuration
├── ⚙️ drizzle.config.ts    # Drizzle ORM configuration
├── 📦 package.json         # Project dependencies and scripts
└── 📖 README.md            # Project documentation
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/)
3. Configure environment variables
4. Deploy! 🚀

### Deploy to Other Platforms

This application can be deployed to any platform that supports Node.js:
- Railway
- Render
- Heroku
- DigitalOcean App Platform
- AWS/GCP/Azure

## 🎨 Customization

- **Colors & Theme:** Modify `tailwind.config.ts`
- **UI Components:** Customize components in `client/src/components`
- **Database Schema:** Update schemas in Drizzle configuration
- **API Routes:** Add/modify routes in `server/` directory

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🎯 Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Rohit**

- 💼 Portfolio: [https://rohitmandwade.vercel.app/]
- 🐙 GitHub: [@Rohit11-OG](https://github.com/Rohit11-OG)
- 📧 Email: [rohitm7298@gmail.com]

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">

**Built with ❤️ and ☕ by Rohit**

</div>
