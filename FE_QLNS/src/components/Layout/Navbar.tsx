import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { clearStorageJSON, USERLOGIN } from "../../config/config";
import { useAuth } from "../../context/AuthContext";
import { useLoading } from "../../context/LoadingProvider";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNavbar";

const navigation = [
  { name: "Trang chủ", sectionId: "home" },
  { name: "Giới thiệu", sectionId: "introduce" },
  { name: "Liên hệ", sectionId: "contact" },
  { name: "Tuyển dụng", sectionId: "recruitments" },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { setLoading } = useLoading();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(sectionId), 500);
    } else {
      scrollToSection(sectionId);
    }
  };
  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div className="xl:hidden">
            <MobileNavbar />
          </div>

          {/* Left - Logo + Navigation  */}
          <div className="hidden xl:flex items-center space-x-6">
            <NavLink to="/" className="text-2xl font-bold text-gray-900">
              AnhHuy
            </NavLink>
          </div>

          {/* Center - Search Bar */}
          <div className="relative w-full max-w-xs md:max-w-md">
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleClick(item.sectionId)}
                  className=""
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Right - User Controls */}
          <div className="hidden xl:flex items-center space-x-4">
            {user ? (
              <>
                <NavLink to="/cart" className="relative">
                  <BellIcon className="h-6 w-6 text-gray-700 hover:text-black" />
                </NavLink>
                <Menu as="div" className="relative">
                  <MenuButton className="flex rounded-full text-sm">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                  <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                      <NavLink
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Account Setting
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        to="/order"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Order
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        onClick={() => {
                          setLoading(true);
                          clearStorageJSON(USERLOGIN);
                          logout();
                          setTimeout(() => setLoading(false), 500);
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </Button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <button className="text-sm text-white bg-purple-500 px-4 py-2 font-bold rounded-md">
                  <NavLink to="/login">Đăng nhập</NavLink>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
