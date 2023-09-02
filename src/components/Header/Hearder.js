import logo from "../../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>The Best Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Header;
