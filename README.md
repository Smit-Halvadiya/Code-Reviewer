# 🧠 AI-Powered Code Reviewer

An intelligent and efficient AI-powered code review tool that analyzes source code and provides smart suggestions to improve code quality, performance, readability, and adherence to best practices. Powered by Google Gemini API.

---

## 📦 Tech Stack

### Backend:
- Node.js
- Express.js
- Google GenAI SDK (Gemini)

### Frontend:
- React.js
- CSS

### AI Model:
- Gemini 2.0 Flash by Google

---

## 🚀 Features

- ✅ Accepts code input and reviews it using Gemini AI
- 🔍 Highlights issues and bad practices
- 💡 Provides better alternatives with explanations
- 📝 Suggests improved code and documents it
- ⚡ Lightweight and fast integration

---

## 🛠️ Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Smit-Halvadiya/ai-code-reviewer.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd ai-code-reviewer
    ```

3. **Setup Environment:**

   Create a `.env` file in the `Backend/` directory:
    ```env
    GOOGLE_GEMINI_KEY=your_google_api_key
    ```

4. **Install dependencies:**

   - For Backend:
     ```bash
     cd Backend
     npm install
     ```

   - For Frontend:
     ```bash
     cd ../Frontend
     npm install
     ```

5. **Run the application:**

   - Start Backend:
     ```bash
     cd Backend
     npm run dev
     ```

   - Start Frontend (in a separate terminal):
     ```bash
     cd Frontend
     npm run dev
     ```

---

## 🧠 How it Works

1. User pastes code in the frontend UI.
2. The code is sent to the backend server.
3. Gemini API analyzes the code based on the system prompt (Senior Code Reviewer logic).
4. Review with issues, suggestions, improved version, and tips is returned


---

## 📸 Screenshots

![AI Code Reviewer Screenshot](./assets/codeReviewer.png)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgements

- Google GenAI SDK
- Gemini LLM by Google
- Inspiration from AI Copilots

---

## 💬 Feedback

If you have feedback or suggestions, feel free to open an issue or reach out.

---

Made with ❤️ by Smit

