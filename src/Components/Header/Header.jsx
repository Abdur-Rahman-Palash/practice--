import { NavLink } from "react-router-dom"

import './Header.css'


const Header = () => {
    return (
        <div>
          <nav className="flex items-center justify-center gap-6">
        
<NavLink to="/">Home</NavLink>
<NavLink to="/users">Users</NavLink>
<NavLink to="/posts">Posts</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/footer">Footer</NavLink>
          </nav>
        </div>
    );
};

export default Header;