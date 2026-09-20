<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
</p>

# 🔐 React Authentication Dashboard

> A complete client-side authentication system built with React 18, featuring animated UI with Framer Motion, protected routing, localStorage-based user management, and a responsive dashboard.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages & Routes](#-pages--routes)
- [Authentication Flow](#-authentication-flow)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

A fully functional authentication dashboard application demonstrating client-side auth patterns in React. Users can sign up, log in, access a protected dashboard, and log out — all with smooth Framer Motion animations and route protection.

The app uses `localStorage` for user persistence, making it fully self-contained with no backend dependency.

---

## ✨ Features

- **User Registration** — Email validation, password strength check (min 6 chars), confirm password matching, duplicate email detection
- **User Login** — Email/password verification against stored users with error feedback
- **Protected Routes** — Dashboard only accessible to authenticated users (auto-redirects to login)
- **Public Routes** — Login/Signup pages redirect to dashboard if already logged in
- **Session Persistence** — Auth state survives page refresh via localStorage
- **Animated UI** — Page transitions, card scaling, button hover/tap effects via Framer Motion
- **Responsive Design** — Mobile-first layouts with breakpoint adjustments
- **Loading States** — Spinner shown while auth state initializes
- **Form Validation** — Real-time error clearing, field-level error messages
- **Gradient Theme** — Purple-blue gradient backgrounds across all pages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI components and state management |
| Vite 7 | Development server and build tool |
| React Router 7 | Client-side routing and navigation |
| Framer Motion | Page transitions and micro-animations |
| localStorage | User data persistence (no backend needed) |
| CSS3 | Custom responsive styling per component |

---

## 📁 Project Structure

```
React-Authentication-Project/
│
├── index.html                          # HTML entry point
├── package.json                        # Dependencies and scripts
├── vite.config.js                      # Vite configuration
├── eslint.config.js                    # ESLint rules
├── .gitignore
│
├── public/                             # Static assets
│
└── src/
    ├── main.jsx                        # App bootstrap with BrowserRouter
    ├── App.jsx                         # Route definitions with auth guards
    ├── App.css                         # Global component styles
    ├── index.css                       # Base CSS reset
    │
    ├── context/
    │   └── AuthContext.jsx             # Auth provider with signup/login/logout
    │
    ├── components/
    │   ├── ProtectedRoute.jsx          # Redirects unauthenticated users to /login
    │   ├── PublicRoute.jsx             # Redirects authenticated users to /dashboard
    │   └── ProtectedRoute.css          # Loading spinner styles
    │
    └── pages/
        ├── Welcome.jsx                 # Landing page with Sign Up / Login buttons
        ├── Welcome.css
        ├── Signup.jsx                  # Registration form with validation
        ├── Signup.css
        ├── Login.jsx                   # Login form with error handling
        ├── Login.css
        ├── Dashboard.jsx               # Protected dashboard with user info
        └── DashBoard.css
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js ≥ 18.x
- npm ≥ 9.x

### 1. Clone the Repository

```bash
git clone https://github.com/Kumar44developer/React-Authentication-Project.git
cd React-Authentication-Project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
npm run preview
```

---

## 🗺️ Pages & Routes

| Route | Component | Auth | Description |
|-------|-----------|------|-------------|
| `/` | Welcome | Public | Landing page with Sign Up and Login buttons |
| `/welcome` | Welcome | Public | Same as `/` |
| `/signup` | Signup | Public Only | Registration form (redirects to `/dashboard` if logged in) |
| `/login` | Login | Public Only | Login form (redirects to `/dashboard` if logged in) |
| `/dashboard` | Dashboard | Protected | User dashboard (redirects to `/login` if not logged in) |
| `/*` | Welcome | Public | Catch-all fallback |

---

## 🔐 Authentication Flow

```
┌──────────────────────────────────────────────────────────────┐
│                        Auth Flow                             │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Welcome Page                                                │
│  ├── [Sign Up] → Signup Page                                 │
│  │   ├── Validates email, password (≥6), confirm match       │
│  │   ├── Checks for duplicate email in localStorage          │
│  │   ├── On success → stores user → redirects to /login      │
│  │   └── On failure → shows field-level error                │
│  │                                                           │
│  └── [Login] → Login Page                                    │
│      ├── Validates credentials against localStorage users    │
│      ├── On success → sets session → redirects to /dashboard │
│      └── On failure → shows error banner                     │
│                                                              │
│  Dashboard (Protected)                                       │
│  ├── Shows "Welcome, user@email.com!"                        │
│  ├── [Go to App] → navigates to /welcome                     │
│  └── [Logout] → clears session → redirects to /login         │
│                                                              │
│  Session Persistence                                         │
│  └── On page load, AuthContext checks localStorage           │
│      for userEmail + isLoggedIn flags                        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### localStorage Keys

| Key | Type | Description |
|-----|------|-------------|
| `users` | JSON Array | All registered users `[{email, password}]` |
| `userEmail` | String | Currently logged-in user's email |
| `isLoggedIn` | String | `"true"` if user is authenticated |

---

## 🎨 UI Design

- **Color Scheme** — Purple-blue gradient (`#667eea → #764ba2`) across all pages
- **Cards** — White cards with rounded corners and deep box shadows
- **Typography** — System font stack for fast rendering
- **Animations** — Framer Motion for page entry/exit, button hover scaling, error banner reveals
- **Responsive** — Flexbox-based layouts with mobile breakpoints at 480px and 640px
- **Form UX** — Real-time error clearing on input change, disabled states, red error borders

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👤 Author

**Kumar44developer** — [@Kumar44developer](https://github.com/Kumar44developer)

---

<p align="center">
  Built with ❤️ using React + Vite
</p>
