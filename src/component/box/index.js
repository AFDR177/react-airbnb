import "./index.css";

export default function Box({ children, className, shadow }) {
  // де children, className, shadow - це пропси
  return (
    <div className={`box ${shadow ? "box--shadow" : ""} ${className}`}>
      {children}
    </div>
  );
}
