import "./style.scss";

const Button = ({ title }) => {
  const handleTopUpClick = () => {
    console.log(title);
  };

  return (
    <span onClick={() => handleTopUpClick()} className="Top_Up">
      {title}
    </span>
  );
};

export default Button;
