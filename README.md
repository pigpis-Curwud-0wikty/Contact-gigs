# 📇 Contact Gigs

A premium, modern contact management application built with **Angular 19** and **Node.js/Express**. Featuring a stunning glassmorphism UI, vibrant gradients, and full CRUD functionality with MongoDB integration.

![Contact Gigs Demo](https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2000&auto=format&fit=crop)

## ✨ Features

- 💎 **Premium UI/UX**: Modern glassmorphism design with frosted cards.
- 🎨 **Dynamic Aesthetics**: Vibrant purple-blue-pink gradients and animated mesh backgrounds.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile screens.
- ⚡ **Real-time Search**: Instant contact filtering as you type.
- 🔄 **Full CRUD**: Create, Read, Update, and Delete contacts seamlessly.
- 🛡️ **Validation**: Robust frontend form validation with reactive forms.
- 🎭 **Smooth Animations**: Carefully crafted micro-animations for a premium feel.

## 🚀 Tech Stack

### Frontend
- **Framework**: Angular 19 (Standalone Components)
- **Styling**: Vanilla CSS with CSS Custom Properties
- **State Management**: RxJS & Reactive Forms
- **Icons**: SVG & Lucide-inspired iconography

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **ORM**: Mongoose
- **Env Management**: Dotenv

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- npm
- MongoDB Atlas account or local MongoDB

### 1. Clone the repository
```bash
git clone <repository-url>
cd contact-gigs
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
Start the Angular development server:
```bash
npm start
```
The app will be available at `http://localhost:4200`.

---

## 📂 Project Structure

```text
Contact Gigs/
├── backend/
│   ├── config/         # DB Connection
│   ├── models/         # Mongoose Schemas
│   ├── routes/         # API Endpoints
│   ├── server.js       # Entry Point
│   └── .env            # Environment Variables
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/  # UI Components
    │   │   ├── models/      # TypeScript Interfaces
    │   │   └── services/    # API Services
    │   ├── environments/    # Environment Config
    │   └── styles.css       # Global Design System
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/contact` | Fetch all contacts |
| `GET` | `/api/contact/:id` | Get a single contact |
| `POST` | `/api/contact` | Create a new contact |
| `PUT` | `/api/contact/:id` | Update a contact |
| `DELETE` | `/api/contact/:id` | Remove a contact |

---

## 🎨 Design System

The project uses a custom-built design system defined in `frontend/src/styles.css`:
- **Glassmorphism**: `backdrop-filter: blur(20px)` for a sophisticated look.
- **Micro-animations**: Slide-ups, fade-ins, and scale-ins for interactivity.
- **Typography**: Inter font family for maximum readability.
- **Color Tokens**: Standardized CSS variables for consistent branding.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

Created with ❤️ by Ziad Mohamed.
