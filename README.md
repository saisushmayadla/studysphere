# StudySphere

A modern web application that helps students create, discover, and manage study groups on campus. StudySphere connects students with similar academic interests, study goals, and schedules, making collaborative learning more organized and accessible.

## Live Demo

**Application:** https://studysphere-woad.vercel.app/

**GitHub Repository:** https://github.com/saisushmayadla/studysphere

---

## Features

### Study Group Management
- Create study groups
- View all available study groups
- Update existing study groups
- Delete study groups

### Smart Group Discovery
- Browse available study groups
- View detailed group information
- Join study groups

### StudyDNA
Each study group includes a unique StudyDNA profile that provides:
- Learning Style
- Study Habit
- Primary Focus Area
- Consistency Score

### Compatibility Score
Each study group is assigned a compatibility score to help students identify groups that align with their learning preferences.

### Study Streak
Displays a study streak to encourage consistency and regular collaboration.

### Form Validation
Validates all required fields before allowing users to create or update study groups.

### Local Storage
Stores all study group information locally in the browser using LocalStorage.

---

## Technology Stack

- React.js
- Vite
- React Router DOM
- JavaScript (ES6)
- HTML5
- CSS3
- LocalStorage

---

## Project Structure

```text
src/
│
├── components/
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── StudyCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── CreateGroup.jsx
│   ├── GroupDetails.jsx
│   └── Profile.jsx
│
├── utils/
│   ├── storage.js
│   └── matchScore.js
│
├── styles/
│   ├── global.css
│   └── navbar.css
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/saisushmayadla/studysphere.git
```

Navigate to the project folder

```bash
cd studysphere
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build the project

```bash
npm run build
```

---

## Current Functionalities

- Responsive user interface
- Create, Read, Update and Delete (CRUD) operations
- Form validation
- LocalStorage integration
- StudyDNA generation
- Compatibility score generation
- Study streak tracking

---

## Future Enhancements

- AI-powered Study Buddy Matching
- Real-time Group Chat
- Calendar Integration
- Analytics Dashboard
- Dark Mode
- Notifications and Reminders
- Goal Tracking
- Improved Mobile Responsiveness
- Firebase Authentication
- Cloud Database Integration

---

## Motivation

Students often rely on multiple messaging platforms to organize study groups, making collaboration scattered and difficult to manage. StudySphere provides a dedicated platform where students can discover relevant study groups, organize sessions, and collaborate more effectively through a single interface.

---

## Developer

**Yadla Sai Sushma**

B.Tech Computer Science and Engineering  
GITAM (Deemed to be University)

Frontend Developer | MERN Stack Enthusiast

---

## License

This project was developed as part of the MDC Round 2 Web Development Task.