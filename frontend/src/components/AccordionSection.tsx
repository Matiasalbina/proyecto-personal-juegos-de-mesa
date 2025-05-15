import React, { useState, useEffect } from "react";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1199);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1199);
      if (window.innerWidth > 1199) {
        setIsOpen(true); // mantener abierto en escritorio
      }
    };

    handleResize(); // ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="accordion-section">
      <div
        className="accordion-header"
        onClick={() => isMobile && setIsOpen(!isOpen)}
        style={{ cursor: isMobile ? "pointer" : "default" }}
      >
        <h3>{title}</h3>
        {isMobile && <span>{isOpen ? "▲" : "▼"}</span>}
      </div>
      {isMobile ? (isOpen && <div className="accordion-content">{children}</div>) : (
        <div className="accordion-content">{children}</div>
      )}
    </div>
  );
};

export default AccordionSection;
