import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between py-6">
      <img src="logo.svg" alt="logo" className="pl-5" />

      <div className="border-white border-t w-1/2"></div>

      <div className="backdrop-blur-sm bg-white/10 px-8 text-sm flex gap-10 text-gray-300 w-2/3">
        <ul className="flex gap-20">
          <li className="text-white text-sm py-8 hover:border-b-2">
            <Link to="/">00 HOME</Link>
          </li>
          <li className="text-white text-sm py-8 hover:border-b-2">
            <Link to="/destination">01 DESTINATION</Link>
          </li>
          <li className="text-white text-sm py-8 hover:border-b-2">
            <Link to="/crew">02 CREW</Link>
          </li>
          <li className="text-white text-sm py-8 hover:border-b-2">
            <Link to="/technology">03 TECHNOLOGY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
