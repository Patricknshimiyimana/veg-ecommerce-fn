import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = () => {
  return (
    <nav>
      <ul className=" flex justify-center items-center list-none bg-green-700 ">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
