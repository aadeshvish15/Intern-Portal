# 🧑‍💼 Intern Portal

A simple full-stack Intern Portal to manage intern progress, referrals, and donations using a ReactJS frontend and Node.js backend. This project simulates a basic dashboard for interns working in a fundraising-based system.

## 📁 Project Structure

Intern-Portal/
├── backend/ # Express.js backend API
│ ├── routes/ # API route handlers
│ ├── controllers/ # Business logic
│ └── ... # Other backend files
├── frontend/ # ReactJS frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── ...
│ └── ...
└── README.md

## 🚀 Features
### ✅ Frontend (React.js + TailwindCSS)
- Intern Dashboard UI
- Dummy Login Page
- Displays:
  - Intern Name
  - Referral Code
  - Total Donations Raised
  - Rewards Earned
  - Leaderboard (Bonus Feature)
  - Claim History (Bonus Feature)

### 🔧 Backend (Node.js + Express)
- REST API with dummy intern data
- Endpoints to fetch dashboard data, leaderboard, claim history

## 🛠️ Tech Stack
| Frontend | Backend | Tools |
|----------|---------|-------|
| React.js | Node.js | Git & GitHub |
| Tailwind CSS | Express.js | Render / Vercel (for deployment) |
| Axios | CORS | Dotenv |
| React Router | | |


## 🔌 Installation & Setup
cd backend
npm install
npm start