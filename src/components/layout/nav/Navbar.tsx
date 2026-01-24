import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav className="flex justify-between items-center px-4 py-4 bg-neutral-900 border-b border-neutral-800">
            <div className="flex gap-8">
                <Link to="/" className="text-neutral-400 hover:text-neutral-100">Home</Link>
                <Link to="/browse" className="text-neutral-400 hover:text-neutral-100">Browse Games</Link>
                <Link to="/profile" className="text-neutral-400 hover:text-neutral-100">Profile</Link>
            </div>
            <div>
                <Link to="/registration" className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200">Sign Up</Link>
            </div>
        </nav>
    );
}

export default Nav;