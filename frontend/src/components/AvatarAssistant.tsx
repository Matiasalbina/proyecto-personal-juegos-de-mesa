import { useState } from "react";
import "../Styles.css/AvatarAssistant.css";
const AvatarAssistant = () => {
  const [showAvatar, setShowAvatar] = useState(true);

  const handleHide = () => {
    setShowAvatar(false);
  };

  if (!showAvatar) return null;

  return (
    <div className="avatar-container">
      <video
        src="/videos/Board-games-Avatar.mp4"
        autoPlay
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        playsInline
        controls
        className="avatar-video"
      />
      <button onClick={handleHide} className="avatar-button">
        No mostrar más
      </button>
    </div>
  );
};

export default AvatarAssistant;
