import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='flex justify-around items-center'>
            <div>
                <h3 className="text-2xl">Travel Guru</h3>
            </div>
            <div className="flex justify-center items-center gap-4">
                <NavLink className="px-4 py-5" to="/">Home</NavLink>
                <NavLink className="px-4 py-5" to="/news">News</NavLink>
                <NavLink className="px-4 py-5" to="/blogs">Blogs</NavLink>
                <NavLink className="px-4 py-5" to="/contsct">Contact</NavLink>
            </div>
            <div className="flex justify-center items-center gap-4">
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;