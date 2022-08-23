import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className=" mx-5 my-3 flex items-center max-w-[1200px]">
        <Link to="/" className="logo">
          Logo
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
