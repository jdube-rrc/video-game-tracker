import "./Navbar.css";

function Nav() {
    return(<nav>
         <div className="page-links">
            <span>
                <a href="#">Home</a>
            </span>
            <span>
                <a href="#">Video Games</a>
            </span>
            <span>
                <a href="#">About</a>
            </span>
            <span>
                <a href="#">More</a>
            </span>
        </div>
        <div className="user-management-links">
            <span>
                <a href="#">Log In</a>
            </span>
        </div>
    </nav>);
}

export default Nav;