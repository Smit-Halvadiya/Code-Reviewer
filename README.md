🧠 AI-Powered Code Reviewer

An intelligent and efficient AI-powered code review tool that analyzes source code and provides smart suggestions to improve code quality, performance, readability, and adherence to best practices. Powered by Google Gemini API.

📦 Tech Stack

Backend:

Node.js

Express.js

Google GenAI SDK (Gemini)

Frontend:

React.js

CSS

AI Model:

Gemini 2.0 Flash by Google

🚀 Features

✅ Accepts code input and reviews it using Gemini AI

🔍 Highlights issues and bad practices

💡 Provides better alternatives with explanation

📝 Suggests improved code and documents it

⚡ Lightweight and fast integration

🛠️ Setup Instructions

1. Clone the repository
git clone https://github.com/Smit-Halvadiya/ai-code-reviewer.git
cd ai-code-reviewer

2. Setup Environment

Create a .env file in the Backend/ directory:

GOOGLE_GEMINI_KEY=your_google_api_key

3. Install dependencies

cd Backend
npm install

cd ../Frontend
npm install

4. Run the application

# Start Backend
cd Backend
npm run dev

# Start Frontend (in separate terminal)
cd Frontend
npm run dev

🧠 How it Works

User pastes code in the frontend UI.

The code is sent to the backend server.

Gemini API analyzes the code based on system prompt (Senior Code Reviewer logic).

Review with issues, suggestions, improved version, and tips is returned.

The frontend displays the review in a formatted and styled UI.

🔐 Environment Variables

Variable

Description

GOOGLE_GEMINI_KEY

Your API key for Google Gemini GenAI

📁 Project Structure

├── Backend
│   ├── controllers
│   ├── services
│   ├── routes
│   ├── utils
│   └── index.js


├── Frontend
│   ├── components
│   ├── pages
│   ├── App.jsx
│   └── main.jsx

📸 Screenshots

Add screenshots of the interface here.

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License

This project is open source and available under the MIT License.

🙏 Acknowledgements

Google GenAI SDK

Gemini LLM by Google

Inspiration from AI Copilots

💬 Feedback

If you have feedback or suggestions, feel free to open an issue or reach out.

Made with ❤️ by Smit

