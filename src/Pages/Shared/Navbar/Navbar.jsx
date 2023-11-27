import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { FaSearch, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    const NavItem = <>
        <li><Link className="text-lg font-semibold" to='/'>Home</Link></li>
        <li><Link className="text-lg font-semibold" to='/about'>About</Link></li>
        <li><Link className="text-lg font-semibold" to='/services'>Services</Link></li>
        <li><Link className="text-lg font-semibold" to='/blog'>Blog</Link></li>
        <li><Link className="text-lg font-semibold" to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-[#444]">
                        {NavItem}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#444]">
                    {NavItem}
                </ul>
            </div>
            <div className="navbar-end gap-5">
            <FaShoppingBag className="text-xl"></FaShoppingBag>
            <FaSearch className="text-xl"></FaSearch>
            <button className="btn btn-outline border border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;