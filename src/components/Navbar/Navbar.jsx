import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';

const Navbar = ({ totalCoin }) => {
  return (
    <div className="sticky top-0 backdrop-blur bg-base-100 bg-opacity-70 z-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <img className="w-14 h-14" src={logo} alt="Logo" />
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="btn">
            {totalCoin} Coin
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png"
              alt="Coin Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  totalCoin: PropTypes.number.isRequired, // Define totalCoin as a required number
};

export default Navbar;
