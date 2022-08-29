import Navbar from "./Navbar";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

import bigBasketLogo from "../img/bigBasketLogo.png";
import { useState } from "react";
const Header = () => {
  const [cart, setCart] = useState(false);
  const handleOpenCart = () => setCart(!cart);
  return (
    <header>
      <div className="flex justify-start items-center">
        <img src={bigBasketLogo} alt="logo" className="h-16 ml-32" />
        <form className="mt-auto -mb-8">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-[36rem] ml-32">
              <div className="input-group relative flex items-stretch w-full mb-4">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                  placeholder="Search for products"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn  px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
         {/* Shopping cart start */}
        <div className="p-5 ml-auto mr-44">
          <div className="flex justify-center">
            <div className="relative ">
              <div className="flex flex-row cursor-pointer truncate p-2 px-4 mt-auto -mb-24 rounded" onClick={handleOpenCart}>
                <div className="flex flex-row-reverse ml-2 w-full">
                  <div slot="icon" className="relative">
                    <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                      3
                    </div>
                    <FaShoppingCart className="w-12 h-8 hover:text-primary cursor-pointer" />
                  </div>
                </div>
              </div>
            {     cart&&    <div className="absolute w-full  rounded-b border-t-0 z-10 mt-28">
                <div className="shadow-xl border w-64">
                  <div
                    className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                    
                  >
                    <div className="p-2 w-12">
                      <img
                        src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
                        alt="img product"
                      />
                    </div>
                    <div className="flex-auto text-sm w-32">
                      <div className="font-bold">Product 1</div>
                      <div className="truncate">Product 1 description</div>
                      <div className="text-gray-400">Qt: 2</div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                      <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                   <FaTrashAlt />
                      </div>
                      $12.22
                    </div>
                  </div>
                  <div
                    className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                    
                  >
                    <div className="p-2 w-12">
                      <img
                        src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
                        alt="img product"
                      />
                    </div>
                    <div className="flex-auto text-sm w-32">
                      <div className="font-bold">Product 2</div>
                      <div className="truncate">Product 2 long description</div>
                      <div className="text-gray-400">Qt: 2</div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                      <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                      <FaTrashAlt />
                      </div>
                      $12.22
                    </div>
                  </div>
                  <div
                    className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                    
                  >
                    <div className="p-2 w-12">
                      <img
                        src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
                        alt="img product"
                      />
                    </div>
                    <div className="flex-auto text-sm w-32">
                      <div className="font-bold">Product 3</div>
                      <div className="truncate">Product 3 description</div>
                      <div className="text-gray-400">Qt: 2</div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                      <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                      <FaTrashAlt />
                      </div>
                      $12.22
                    </div>
                  </div>
                  <div className="p-4 justify-center flex">
                    <button
                      className="text-base  undefined hover:scale-105 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-white hover:text-primary
        bg-primary
        text-white
        border duration-200 ease-in-out 
        border-primary transition"
                    >
                      Checkout $36.66
                    </button>
                  </div>
                </div>
              </div>}
            </div>
          </div>
          <div className=""></div>
        </div>
                 {/* Shopping cart end */}

      </div>
      <div className="ml-36 p-2 flex items-center max-w-[1200px]">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
