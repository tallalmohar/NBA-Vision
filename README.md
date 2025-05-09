# 🏀 NBA Vision

**NBA Vision** is a cutting-edge web platform designed to visualize and analyze NBA game data with clarity and style. Built using the latest technologies like **Next.js**, **React 19**, and **Tailwind CSS**, this application helps users gain meaningful insights through interactive data visualizations and a streamlined user interface. It leverages **Prisma** ORM for seamless database interaction.

---

## 🚀 Features

- 📊 Interactive dashboards for NBA player and team statistics
- 🎯 Clean and responsive UI with Tailwind CSS
- ⚡ Built with Next.js for optimized performance and SEO
- 🛠️ Prisma ORM integration for efficient data handling
- 📁 Modular and scalable project structure
- 🧪 TypeScript support for improved code quality

---

## 🧰 Tech Stack

- **Frontend Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS, PostCSS
- **Database ORM:** Prisma
- **Language:** TypeScript

---

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js >= 18
- npm or yarn
- PostgreSQL or any other supported database

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nba-vision.git
cd nba-vision/frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Generate Prisma client and run database migrations
npx prisma generate
npx prisma migrate dev --name init

# Start the development server
npm run dev
```

---

## 📁 Project Structure

```
nba-vision/
└── frontend/
    ├── pages/          # Next.js pages
    ├── components/     # Reusable UI components
    ├── prisma/         # Prisma schema and migration files
    ├── public/         # Static files
    ├── styles/         # Tailwind and global CSS
    └── utils/          # Utility functions
```

---

## 📜 Scripts

- `npm run dev` – Run development server
- `npm run build` – Build app for production
- `npm run start` – Start production server
- `npm run lint` – Lint the code

---

## 📄 License

This project is licensed under the MIT License.

---

Made with 🏀 by data and basketball enthusiasts.
