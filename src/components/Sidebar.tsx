import { useState } from "react";
import LogoVertical from "../assets/LogoVertical.png";
import Logo from "../assets/Logo.png";
const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`fixed top-0 left-0 z-50 h-screen ${isSidebarOpen ? 'w-60' : 'w-26'} bg-black/50 text-gray-400 overflow-hidden`}>
      {isSidebarOpen ? (
        <div className="flex flex-col items-center w-60 h-full overflow-hidden text-gray-400 ">
          <div className="flex flex-col items-center   overflow-hidden text-white ">
            <div className=" flex-col items-center justify-center">
              <img className="-mt-8 " src={Logo} alt="Logo" />
            </div>

            <svg
              onClick={toggleSidebar}
              className="absolute ml-52 mt-2"
              fill="white"
              height="12px"
              width="12px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 490 490"
              xmlSpace="preserve">
              <polygon
                points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
              />
            </svg>

            <div className="w-full px-2">
              <div className="flex flex-col items-center w-full  border-t border-gray-700">
                <a
                  className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                  href="#">
                  <svg
                    className="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium">HOME</span>
                </a>
                <a
                  className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                  href="#">
                  <svg
                    className="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium">PRODUCTS</span>
                </a>
                <a
                  className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                  href="#">
                  <svg
                    className="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium">
                    MEET CHEF MATT
                  </span>
                </a>
                <a
                  className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                  href="#">
                  <svg
                    className="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium">FAQ</span>
                  <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                </a>
                <a
                  className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                  href="#">
                  <svg
                    className="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium">
                    CONNECT WITH US
                  </span>
                  <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                </a>
              </div>
            </div>

            <h1 className="mt-48 text-sm">
              TEXT SUPPORT 24/7{" "}
              <span className="text-yellow-400">070-7782-9137</span>
            </h1>

            <div className="absolute bottom-0 w-full border-t-8 border-gray-700 flex  items-center">
              <div className="flex w-full my-2">
                {" "}
                <a
                  className="flex items-center justify-center w-1/2 h-16   hover:text-gray-300"
                  href="#">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.66667 14.5L9.66667 9.66667C9.66667 6.99729 11.8306 4.83334 14.5 4.83334V4.83334C17.1694 4.83334 19.3333 6.99729 19.3333 9.66667L19.3333 14.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M4.52768 14.5428C4.67276 12.8019 4.74529 11.9315 5.31938 11.4032C5.89347 10.875 6.76693 10.875 8.51386 10.875H20.4861C22.2331 10.875 23.1065 10.875 23.6806 11.4032C24.2547 11.9315 24.3272 12.8019 24.4723 14.5428L25.1945 23.2089C25.279 24.2224 25.3212 24.7292 25.0241 25.0521C24.727 25.375 24.2185 25.375 23.2014 25.375H5.7986C4.78155 25.375 4.27302 25.375 3.97592 25.0521C3.67882 24.7292 3.72105 24.2224 3.80551 23.2089L4.52768 14.5428Z"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>

                  <span className="ml-2 text-sm text-white font-medium">
                    CART
                  </span>
                </a>
                <a
                  className="flex items-center justify-center w-1/2 h-16   hover:text-gray-300"
                  href="#">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.19245 16.2262L13.3153 23.8568C13.6398 24.1616 13.802 24.3139 14 24.3139C14.198 24.3139 14.3602 24.1616 14.6847 23.8568L22.8075 16.2262C25.0897 14.0823 25.3669 10.5543 23.4474 8.08038L23.0865 7.61519C20.7903 4.65564 16.1812 5.15198 14.5678 8.53255C14.3399 9.01008 13.6601 9.01008 13.4322 8.53255C11.8188 5.15198 7.20967 4.65563 4.91346 7.61519L4.55254 8.08037C2.6331 10.5543 2.91024 14.0823 5.19245 16.2262Z"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>

                  <span className="ml-2 text-sm text-white font-medium">
                    WISHLIST
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-28 border-r-8 border-yellow-700 h-full overflow-hidden text-gray-400  ">
          <div className="h-full flex-col items-center justify-center">
            {/* Hamburger Button */}
            <button className="ml-9 mt-8" onClick={toggleSidebar}>
              <svg
                className="z-20"
                height="32px"
                id="Layer_1"
                fill="white"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
              </svg>
            </button>

            {/* Logo with Vertical Line */}
            <div className="flex items-center h-full">
              <div className="flex items-center justify-center">
                <img className="h-96 -mt-32 " src={LogoVertical} alt="Logo" />
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
