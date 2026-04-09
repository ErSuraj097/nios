# NIOS AI-Powered LMS Portal 🚀

## 🎯 Overview
Next.js 15+ Learning Management System with AI integration, gamification, role-based dashboards for **Learner/Teacher/Parent/Admin/Guest**.

**Live Demo Features:**
- AI Tutor & Live Classes
- Gamification (badges, streaks, leaderboards, challenges)
- Parent Portal (reports, alerts, attendance, PTM, TMA feedback)
- Virtual Orientation Tour
- Responsive design with TailwindCSS

## 🛠️ Tech Stack
```
Frontend: Next.js 15, TypeScript, TailwindCSS, Lucide React
Data: Mock API (lib/mock-data.ts)
Auth: Context-based
Animations: Tailwind transitions
Deployment: Vercel/Netlify ready
```

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone <repo-url>
cd nios
npm install
```

### 2. Development
```bash
npm run dev
# Open http://localhost:3000
```

### 3. Roles & Login (Demo)
| Role | Email | Password | Dashboard |
|------|-------|----------|-----------|
| Learner | student@nios.edu.in | (demo) | `/dashboard/learner`
| Teacher | teacher@nios.edu.in | (demo) | `/dashboard/teacher`
| Parent | parent@nios.edu.in | (demo) | `/dashboard/parent` ⭐ **NEW**
| Admin | principal@nios.edu.in | (demo) | `/dashboard/admin`
| Guest | guest@portal.com | (demo) | `/dashboard/guest`

**Quick Links:**
```
Parent Features: /dashboard/parent (reports/alerts/attendance/PTM/TMA) ⭐
Gamification: /achievements /onboarding
Courses: /courses
Live: /live /schedule
AI Tutor: /ai-tutor
```

## ✨ Key Features

### 🎮 **Gamification System** ⭐ NEW
```
✅ /achievements - Badges collection, streaks, levels
✅ /onboarding - Interactive tour for new users
📊 Leaderboards, challenges (mock data ready)
```
- 5 badge tiers (Bronze→Diamond)
- Daily/weekly missions
- Streak bonuses & leaderboards

### 👨‍👩‍👧‍👦 **Parent Portal** ⭐ NEW
```
✅ Reports (/dashboard/parent/reports)
✅ Alerts & notifications
✅ Class activities & TMA feedback
✅ Attendance tracker
✅ PT Meeting booking
```
- Mock data for all child/student metrics
- Downloadable reports, apply for meetings

### 📚 Learning Tools
- **Courses** with progress tracking
- **Live Classes** schedule & join
- **Assessments** & exams
- **Library** flipbooks
- **AI Tutor** chat interface

### 🎨 UI/UX
- Glassmorphism design
- Gradient animations
- Responsive (mobile-first)
- Role-based sidebars

## 📁 Project Structure
```
app/
├── dashboard/[role]/ - Role-specific pages
├── achievements/ - Gamification ⭐
├── onboarding/ - Tour ⭐
├── courses/ - Learning content
├── live/ - Real-time classes
lib/mock-data.ts - All demo data ⭐
components/Sidebar.tsx - Role nav ⭐
```

## 🎯 Gamification Data (mock-data.ts)
```
MOCK_BADGES (5 tiers)
MOCK_LEADERBOARD (top 5)
MOCK_CHALLENGES (active/expired)
MOCK_STREAKS (subject streaks)
MOCK_MISSIONS (daily/weekly/monthly)
```

## 🔮 Next Features (Planned)
```
[ ] /leaderboard page
[ ] /challenges dashboard
[ ] Role gamification dashboards (/dashboard/[role]/gamification)
[ ] Topbar streak/badge display
[ ] Real backend integration
[ ] Push notifications
```

## 🤝 Contributing
1. Fork & PR
2. Follow Tailwind + TypeScript patterns
3. Update mock-data.ts for new features
4. Test on mobile

## 📄 License
MIT - Free for educational/commercial use.

**Made with ❤️ using Next.js & AI**

⭐ **Star if useful!** 👏

