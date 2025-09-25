import { useState } from "react";
import "../Styles.css/AvatarAssistant.css";

const AvatarAssistant = () => {
  const [showAvatar, setShowAvatar] = useState(true);
  const [messages, setMessages] = useState([
    { from: "avatar", text: "Hola 👋 ¿En qué puedo ayudarte hoy?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleHide = () => {
    setShowAvatar(false);
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { from: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true);

    try {
      // 1. Solicitar respuesta de Gemini
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userInput }),
      });
      const data = await res.json();

      const responseText = data.response || "Lo siento, no entendí.";

      // 2. Solicitar audio sintetizado al backend
      const ttsRes = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: responseText }),
      });
      const ttsData = await ttsRes.json();

      // 3. Reproducir audio si hay URL
      if (ttsData.audioUrl) {
        const audio = new Audio(ttsData.audioUrl);
        audio.play();
      }

      // Agregar respuesta del avatar al chat
      setMessages([...newMessages, { from: "avatar", text: responseText }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { from: "avatar", text: "Hubo un error al conectarse con la IA." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!showAvatar) return null;

  return (
    <div className="avatar-container">
      <div className="avatar-header">
        <img src="/images/avatar.png" alt="Avatar" className="avatar-img" />
        <button onClick={handleHide} className="avatar-button">
          No mostrar más
        </button>
      </div>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="chat-message avatar">Escribiendo...</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <button onClick={handleSend} disabled={loading}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default AvatarAssistant;
