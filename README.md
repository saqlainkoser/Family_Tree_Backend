# Family Tree Web Application

A modern web application for creating and managing family trees with a beautiful dark theme, gradients, and glowing borders.

## Features

- Create and manage family trees
- Search through family records and archives
- Photo processing and enhancement
- Professional research services integration
- User profiles and authentication
- Dark theme with modern UI elements
- Responsive design for all devices

## Tech Stack

- Frontend:
  - React with TypeScript
  - Material-UI
  - Framer Motion
  - React Router
  - React Query

- Backend:
  - Node.js with Express
  - MongoDB with Mongoose
  - JWT Authentication
  - Cloudinary for image processing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Cloudinary account (for image processing)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd family-tree
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Configure environment variables:
   - Copy `.env.example` to `.env` in the backend directory
   - Update the variables with your values

5. Start MongoDB:
```bash
mongod
```

6. Start the backend server:
```bash
cd backend
npm run dev
```

7. Start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
family-tree/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── theme.ts
│   │   └── App.tsx
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 