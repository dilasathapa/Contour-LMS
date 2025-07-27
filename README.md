# Student LMS – Full Stack Feature

```
This project implements a basic Learning Management System (LMS) feature where students can:
✅ Log in / Sign up 
✅ View a dashboard of today’s lessons (with upcoming and completed lessons)
✅ Toggle lessons as complete or incomplete
✅ Navigate to Lectures, Notes, Bookmarks, Assignments, and Quiz 


The project uses:

- Next.js (Frontend + Backend API Routes)
- TypeScript
- Supabase (Database & Authentication)
```

# Features

```
✅ User Authentication (via Supabase)
✅ Lessons Dashboard (filter: All, Upcoming, Completed)
✅ Lesson Status Toggle (Mark as Done / Incomplete)
✅ Responsive Navbar & Sidebar Navigation
✅ Search Lectures by Title
```

# Project Structure

```bash
src/
 ├── app/
 │    ├── login/             # Login Page
 │    ├── signup/            # Signup Page
 │    ├── dashboard/         # Dashboard with lesson filters
 │    ├── lectures/          # All lectures page
 │    ├── layout.tsx         # Global layout with navbar/sidebar
 │    └── page.tsx           # Root landing page (redirects to signup)
 │
 ├── lib/
 │    └── lessonsService.ts  # Supabase queries (fetch/toggle lessons)
 │
 ├── styles/                 # CSS Modules for components
 │
 └── assets/                 # Logos and images
 
```

# Tech Stack

```
- Frontend: Next.js + TypeScript + CSS Modules
- Backend: Next.js API Routes (Serverless)
- Database: Supabase (PostgreSQL)
- Auth: Supabase Auth
- Deployment: Vercel
````

# ⚡ Setup & Run Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/dilasathapa/Contour-LMS.git
cd my-lms
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Configure Environment Variables
```
- create a .env.local file in the root folder
  - NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
  - NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 4️⃣ Run locally
```
npm run dev
```

# Database Setup (Supabase)

1. Go to https://supabase.io and create a new project.
2. Use the SQL Editor to create the lessons table:

```
   CREATE TABLE lessons (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title text NOT NULL,
    description text,
    scheduled_date date NOT NULL,
    duration interval NOT NULL,
    img text,
    is_completed boolean DEFAULT false,
    stream text NOT NULL
  );
```

3. Insert sample data:

```
  INSERT INTO lessons (title, description, scheduled_date, duration, img, is_completed, stream)
  VALUES 
  ('React Basics', 'Introduction to React components', '2025-07-28', '45 minutes', 'your-image-url', false, 'live session');
```

# Supabase DB Dump

Provided a dump file supabase_dump.sql in the repository to load sample data.


# ✅ GitHub Actions (CI/CD)

- This project includes a GitHub Actions workflow to lint and build on every push.
- File: .github/workflows/nextjs-ci.yml
- It ensures the app builds successfully before deployment.


# 🌐 Deployment

deployed the project in vercel [delpoyed link](https://contour-lms-project-assignment.vercel.app/login)


# 🎯 Deliverables Checklist

 - Frontend in Next.js
 - Backend Logic (API Routes & Supabase)
 - README with Setup/Run Instructions
 - Supabase Access (SQL Dump Provided)
 - Optional: GitHub Actions CI/CD Config






