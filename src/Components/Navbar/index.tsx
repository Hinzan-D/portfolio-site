import './Navbar.css';

function Navbar() {
  return (

        <header>
            <div className="logo">Logo</div>
            <nav className="nav-menu">
                <ul className="nav-links">
                    <li> <a className='nav-item' href="#top">Home</a></li>
                    <li> <a className='nav-item' href="#skills">Skills</a></li>
                    <li> <a className='nav-item' href="#projects">Projects</a></li>
                    <li> <a className='nav-item' href="#about">About Me</a></li>
                    <li> <a className='nav-item' href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

  );
}

export default Navbar;
