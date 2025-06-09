# 🧠 Project X

██████╗ ██████╗  ██████╗      ██╗     ██╗  ██╗
██╔══██╗██╔══██╗██╔═══██╗     ██║     ╚██╗██╔╝
██████╔╝██████╔╝██║   ██║     ██║      ╚███╔╝ 
██╔═══╝ ██╔═══╝ ██║   ██║     ██║      ██╔██╗ 
██║     ██║     ╚██████╔╝     ███████╗██╔╝ ██╗
╚═╝     ╚═╝      ╚═════╝      ╚══════╝╚═╝  ╚═╝
              P R O J E C T   X


A lightweight AI-powered tool to help researchers **prescreen abstracts** for systematic reviews. Built with:

- ⚡ **FastAPI** for the backend
- ⚛️ **React** for the frontend
- 🧠 **Ollama** for local LLM inference (e.g., LLaMA 3, Mistral)
- 🗃️ Future-ready for provider APIs and AI agents (MCP, OpenAI, Claude, etc.)

---

## 📦 Features

- Upload abstracts in bulk (CSV/JSON)
- AI-driven relevance classification
- Confidence scoring for each abstract
- Reviewer UI with filters and label override
- Role-based access control (auth included)
- Future roadmap for full AI agent integration

---

## 🚀 Quickstart

### Backend (FastAPI + Ollama)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

### Make sure Ollama is installed and a model is running:

```
ollama run mistral  # or any supported model
```

### **Frontend (React)**

```
cd frontend
npm install
npm run dev
```
