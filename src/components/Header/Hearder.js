import logo from "../../assets/investment-calculator-logo.png";
import boa from "../../assets/boa.jpg";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>The Best Investment Calculator</h1>
      </header>
      <div>
        <img src={boa} alt="boa-logo" />
      </div>
    </div>
  );
};

export default Header;
