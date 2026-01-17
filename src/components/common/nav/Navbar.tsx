function Nav() {
    return(
        <nav className="flex justify-between items-center px-4 py-4 bg-neutral-900 border-b border-neutral-800">
            <div className="flex gap-8">
                <a href="#" className="text-neutral-400 hover:text-neutral-100">Home</a>
                <a href="#" className="text-neutral-400 hover:text-neutral-100">Video Games</a>
                <a href="#" className="text-neutral-400 hover:text-neutral-100">About</a>
                <a href="#" className="text-neutral-400 hover:text-neutral-100">More</a>
            </div>
            <div>
                <a href="#" className="px-4 py-2 bg-neutral-50 text-neutral-950 rounded-md font-medium hover:bg-neutral-200">Log In</a>
            </div>
        </nav>
    );
}

export default Nav;