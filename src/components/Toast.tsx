import React, { useEffect } from "react";

interface ToastProps {
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#d1fae5",
      color: "#065f46",           
      padding: "8px 16px",
      borderRadius: "6px",
      border: "1px solid #10b981", 
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)", 
      fontWeight: "500",
      zIndex: 9999,
      minWidth: "120px",
      textAlign: "center",
      fontSize: "14px",
      userSelect: "none",
      fontFamily: "Arial"
    }}>
       Success!
    </div>
  );
  
};

export default Toast;
