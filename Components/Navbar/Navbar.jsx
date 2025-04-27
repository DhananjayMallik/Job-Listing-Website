import { useState } from 'react';
import profileImg from '../../assets/github1.jpg';
import { IoIosArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    scrollTo(0, 0);
    setMenuOpen(false); // Close menu on link click (mobile behavior)
  };

  return (
    <div className='relative bg-white shadow-md'>
      <div className='flex justify-between items-center p-6 md:p-[3rem]'>
        {/* Logo */}
        <div className='logoDiv'>
          <Link to='/'>
            <h1 className='logo text-[25px] text-[#2a68ff] cursor-pointer md:pr-10'>
              <strong>Job</strong>Search
            </h1>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>

        {/* Menu */}
        <div className={`menu absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:static md:flex md:flex-row md:items-center gap-4 md:gap-8 transition-all duration-300 ease-in-out ${menuOpen ? 'flex flex-col' : 'hidden'} md:flex`}>
          <li><Link to="/" onClick={handleNavLinkClick} className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Home</Link></li>
          <li><Link to="/Companies" onClick={handleNavLinkClick} className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Companies</Link></li>
          <li><Link to="/contact" onClick={handleNavLinkClick} className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Contact</Link></li>
          <li><Link to="/login" onClick={handleNavLinkClick} className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Login</Link></li>
          <li><Link to="/admin" onClick={handleNavLinkClick} className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Admin</Link></li>
        </div>

        {/* Profile / Button */}
        {isLoggedIn ? (
          <img src={profileImg} alt="Profile" className="hidden md:block w-10 h-10 rounded-full cursor-pointer" />
        ) : (
          <button
            onClick={handleClick}
            className='hidden md:block border-2 w-40 h-12 rounded-xl bg-blue-400 hover:bg-orange-500 cursor-pointer md:ml-12 md:w-60 md:h-16'
          >
            Create Account
          </button>
        )}
      </div>

      {/* For mobile, show Create Account below menu if not logged in */}
      {!isLoggedIn && menuOpen && (
        <div className="px-6 pb-4 md:hidden">
          <button
            onClick={handleClick}
            className='w-full border-2 h-12 rounded-xl bg-blue-400 hover:bg-orange-500 cursor-pointer'
          >
            Create Account
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
