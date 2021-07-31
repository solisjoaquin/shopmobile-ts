import "./Header.css";

function Header() {
  return (
    <nav>
      <a href="/" className="nav__title">
        CompanyName
      </a>
      <p className="nav__amount">$0</p>
    </nav>
  );
}

export default Header;
