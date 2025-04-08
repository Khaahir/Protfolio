const Button = ({ children, variant, onClick }) => {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
