
# 🌐 Rozgaar Mitra

Rozgaar Mitra is a job portal web application designed to bridge the gap between job seekers and employers. The platform allows users to register as job seekers or recruiters, create job listings, apply for jobs, and manage their application workflow in an intuitive and organized interface.

---

## 📁 Directory Structure

```
RozgaarMitra/
│
├── backend/        # Express.js server and RESTful APIs
├── frontend/       # React frontend with Material UI
└── README.md       # Project documentation
```

---

## 🚀 Getting Started

Follow the instructions below to set up the Rozgaar Mitra web application on your local machine.

### Prerequisites

Ensure the following software is installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

---

### 🧪 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm start
   ```
   The backend server will run at: `http://localhost:4444`

---

### 🎨 Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React frontend:
   ```bash
   npm start
   ```
   The frontend will be available at: `http://localhost:3000`

---

### ✅ Usage

Once both servers are running:

- Open your browser and go to [http://localhost:3000](http://localhost:3000)
- Sign up as a job seeker or recruiter
- Create job postings or apply to available jobs
- Manage applications and listings via your dashboard

---

## 🖥️ Machine Specifications (Tested On)

- **Operating System:** Windows 11 Home
- **Processor:** Intel Core i5-11400H @ 2.20GHz
- **RAM:** 16 GB

---

## 📌 Notes

- Ensure MongoDB is running before starting the backend server.
- Environment variables (e.g., DB URI, session secrets) should be configured in a `.env` file (not included here for security reasons).
