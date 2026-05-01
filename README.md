# LaDu
تطبيق ذكي لإدارة المصاريف يسهّل تسجيل النفقات باستخدام الصوت أو تصوير الفواتير بدل الإدخال اليدوي. يعتمد على واجهة مبنية بـ React وVite وتصميم متجاوب، مع باك إند بـ Node.js لمعالجة البيانات. يهدف لدمج الذكاء الاصطناعي لتحليل المصاريف وتصنيفها تلقائيًا.
# AI Expense Tracker

## Description
A smart expense management application designed to simplify tracking daily spending using voice input and camera scanning instead of manual entry. The system is built with modern web technologies and prepared for AI integration to automatically analyze and categorize expenses.

## Objectives
- Simplify expense tracking
- Reduce user effort and time
- Introduce AI into daily financial management
- Provide a fast and intuitive user experience

## Features
- Voice-based expense input
- Camera-based receipt capture
- Automatic transaction creation
- Transaction list and filtering
- Search functionality
- Multi-language support (Arabic and English)
- Responsive design for mobile and desktop

## Technologies

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express

### APIs
- Web Speech API
- MediaDevices API

### Tools
- ngrok

## Project Structure
src/
 ├── components/
 ├── screens/
 ├── contexts/
 ├── routes/
 ├── assets/
 ├── App.tsx
 └── main.tsx

## Running the Project

### Install dependencies
npm install

### Start development server
npm run dev -- --host

## Mobile Testing

### Start the app
npm run dev -- --host

### Start ngrok
ngrok http 5173

### Open the generated link on your phone

## Configuration

If you encounter a blocked request error, update vite.config.js:

server: {
  allowedHosts: "all"
}

## Application Flow
1. Open the application
2. Choose voice input or camera scan
3. Provide expense data
4. The system processes the input
5. The transaction is added automatically
6. View transactions in the list

## Future Improvements
- OCR integration for receipt analysis
- Database integration
- Expense analytics dashboard
- Budget planning system
- AI assistant

## Status
In development

## License
This project is intended for learning and development purposes
