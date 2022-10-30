const Button = ({ buttonStyle, text }) => {
  return (
    <div>
      <button className={buttonStyle}>{text}</button>
    </div>
  );
};

export default Button;
