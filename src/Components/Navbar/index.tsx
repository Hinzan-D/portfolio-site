import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <header>
            <div className="logo">Cheick Diarrassouba / Software Engineer</div>
            <nav className="nav-menu">
                <ul className="nav-links">
                    <li> <a href="/#">Home</a></li>
                    <li> <a href="/#">Skills</a></li>
                    <li> <a href="/#">Projects</a></li>
                    <li> <a href="/#">About Me</a></li>
                    <li> <a href="/#">Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
  );
}

export default Navbar;
