import { useState } from "react";
import "./FloatingChat.css";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

 const sendMessage = async () => {
  if (!input) return;

  try {
     const lowerInput = input.toLowerCase();
  const isSingleWord = input.trim().split(" ").length === 1;
  const isGreeting = ["hi", "hello", "hey"].includes(lowerInput);
const resumeKeywords = ["projects", "experience", "education", "skills", "achievements", "contact"];
  // ✅ 1. GREETING HANDLING (NO API CALL)
  if (isGreeting) {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      {
        role: "assistant",
        content: "Hi! 👋 Ask me about my projects, skills, or experience.",
      },
    ]);
    setInput("");
    return;
  }

  // ✅ 2. SINGLE WORD HANDLING (OPTIONAL SMART RESPONSE)
 if (isSingleWord && !resumeKeywords.includes(lowerInput) && !isGreeting) {
  setMessages((prev) => [
    ...prev,
    { role: "user", content: input },
    {
      role: "assistant",
      content: "I can explain topics like React, Python, Java, AI, etc. Ask me something more specific 👍",
    },
  ]);
  setInput("");
  return;
}
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Typing animation
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Typing..." },
    ]);

    const RESUME_CONTEXT = `
You are a friendly AI portfolio chatbot for Swetha S.

You have access to her resume data.

RULES:

1. If question is about:
- projects
- skills
- experience
- education
- achievements
→ Answer strictly from resume data in a professional way.

2. If user asks a SINGLE WORD like:
"react", "python", "java", "ai"
→ Give a SHORT simple explanation (1–2 lines), not resume summary.

3. If greeting:
"hi", "hello"
→ respond casually and friendly.

4. If question is NOT in resume:
Say:
"I can only answer questions related to my portfolio, projects, skills, and experience."

TONE:
- Natural human conversation
- Not overly formal unless needed
- Avoid long paragraphs unless asked

Candidate: Swetha S
Location: Chennai, India

SUMMARY:
Computer Science Engineering student with strong problem-solving skills and hands-on experience in software development and AI-based solutions.

EDUCATION:
- B.E CSE (2023–2027), Chennai Institute of Technology – CGPA: 9.02
- HSC Computer Science – 92%

EXPERIENCE:
- Web Development Intern, Veerel Enterprises (Nov 2024 – Jun 2025)
  Worked with React, REST APIs, authentication, DB integration.
- Full Stack Intern, Lux and Decibels (Jul 2025 – Aug 2025)
  Built apps using React, Flask, MySQL.

PROJECTS:
- LegalAI:
  AI-based legal judgment prediction using Hugging Face, Flask APIs, MongoDB, React UI.
- Hackathon Activity Tracker:
  Real-time event platform with React + Flask + SQL.
- ETMS:
  Ticket booking system with QR verification using React.
- Portfolio Website:
  Responsive React-based personal portfolio.

SKILLS:
- Languages: C, Java, Python
- Frontend: React, HTML, CSS
- Backend: Node.js, Flask, REST APIs
- Databases: SQL, MySQL, MongoDB
- Concepts: OOP, OS, CN, DSA
- Tools: Git, GitHub, VS Code

CERTIFICATIONS:
- ServiceNow CSA & CAD
- NPTEL: DBMS, Cloud Computing
- Hindi Pandit Certification

ACHIEVEMENTS:
- Participated in national hackathons (Naukri, SIH, H@CIT)
- TN Skills Web Dev Round 2 qualifier
- Vice President of HACKERZ (led symposium events)

PERSONALITY:
- You are Swetha's digital twin.
- Use a friendly, tech-optimist tone.
- If asked about hobbies, mention you love to dance,cooking and doing workouts.
- Use an occasional emoji like 🚀 or 💻 to keep it engaging.

INSTRUCTIONS:
- Answer only from this data
- Keep answers short, clear, and professional
- If unsure, say: "I’d be happy to discuss that in detail during an interview"
`;



    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [
          { role: "system", content: RESUME_CONTEXT },
          { role: "user", content: input },
        ],
      }),
    });

    const data = await res.json();
    console.log("API RESPONSE:", data);

    const text =
      data?.choices?.[0]?.message?.content || "No response from AI";

    // Replace "Typing..." message
    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        role: "assistant",
        content: text,
      };
      return updated;
    });

    setInput("");
  } catch (error) {
    console.error("ERROR:", error);
    alert("Something went wrong");
  }
};

  return (
    <>
      {/* Floating Button */}

      <button
  onClick={() => setOpen(!open)}
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "24px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    animation: "pulse 2s infinite",
    transition: "transform 0.2s ease",
  }}
>
  💬
</button>
     {/* <button
  onClick={() => setOpen(!open)}
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "24px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    cursor: "pointer",
    animation: "pulse 1.5s infinite",
  }}
>
  💬
</button> */}

      {/* Chat Box */}
      {open && (
  <div
    style={{
      position: "fixed",
      bottom: "90px",
      right: "20px",
      width: "320px",
      height: "420px",
      background: "white",
      borderRadius: "14px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",

      // animation (lightweight GPU)
      animation: "fadeInUp 0.25s ease-out",
      willChange: "transform, opacity",
    }}
  >
      {/* {open && (
        <div
  style={{
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "300px",
    height: "400px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    animation: "fadeIn 0.3s ease-in-out",
  }}
> */}
          {/* Header */}

          <div
  style={{
    padding: "12px",
    background: "#4f46e5",
    color: "white",
    fontWeight: "600",
    letterSpacing: "0.5px",
  }}
>
  <span>Ask Me 🤖</span>
   <button
    onClick={() => setOpen(false)}
    style={{
       position: "absolute",
      top: "8px",
      right: "10px",
      background: "transparent",
      border: "none",
      color: "white",
      fontSize: "18px",
      cursor: "pointer",
    }}
  >
    ✖
  </button>
</div>

          {/* <div
            style={{
              padding: "10px",
              background: "#4f46e5",
              color: "white",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            Ask Me 🤖
          </div> */}

          {/* Messages */}

          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
  {messages.map((m, i) => (
    <div
      key={i}
      style={{
        textAlign: m.role === "user" ? "right" : "left",
        margin: "6px 0",
        animation: "messagePop 0.2s ease",
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "8px 10px",
          borderRadius: "12px",
          background: m.role === "user" ? "#4f46e5" : "#e5e7eb",
          color: m.role === "user" ? "white" : "black",
          maxWidth: "80%",
          wordBreak: "break-word",
        }}
      >
        {m.content}
      </span>
    </div>
  ))}
</div>

          {/* <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.role === "user" ? "right" : "left",
                  margin: "5px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px",
                    borderRadius: "10px",
                    background:
                      m.role === "user" ? "#4f46e5" : "#e5e7eb",
                    color: m.role === "user" ? "white" : "black",
                  }}
                >
                  {m.content}
                </span>
              </div>
            ))}
          </div>
      <div style={{ display: "flex", padding: "10px", gap: "6px" }}> */}

 <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px",
  }}
>
  {/* Input */}
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter" && input.trim()) {
        e.preventDefault();
        sendMessage();
      }
    }}
    placeholder="Ask..."
    style={{
      flex: 1,
      height: "34px",
      padding: "0 10px",
      fontSize: "13px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      outline: "none",
    }}
  />

  {/* Send Button */}
  <button
    onClick={sendMessage}
    style={{
      height: "34px",
      width: "40px",
      background: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      flexShrink: 0,
      transition: "transform 0.15s ease",
    }}
    onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) =>
      (e.currentTarget.style.transform = "scale(0.92)")
    }
    onMouseUp={(e: React.MouseEvent<HTMLButtonElement>) =>
      (e.currentTarget.style.transform = "scale(1)")
    }
  >
    ➤
  </button>
</div>
</div>
 
    
      )}
    </>
  );
}