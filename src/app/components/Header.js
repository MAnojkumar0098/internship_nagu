import Link from "next/link";
const Header = () => {
  return (
    <header className="m-1">
      <nav className="navigation max-width-1  margin-auto">
        <div className="navLeft">Logo</div>
        <div className="navCenter">
          <ul className="nav-items">
            <li className="nav-item">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
