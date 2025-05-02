import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
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
    <>
      {/* Toggle Button */}
      <button
        className="xl:hidden p-2 text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(true)}
      >
        <Bars3Icon className="w-8 h-8" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-64 h-full bg-white shadow-lg flex flex-col py-6 px-4"
        >
          {/* Close Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="mt-6 space-y-4 grid">
            {[
              { name: "Trang chủ", sectionId: "home" },
              { name: "Giới thiệu", sectionId: "introduce" },
              { name: "Liên hệ", sectionId: "contact" },
              { name: "Tuyển dụng", sectionId: "recruitments" },
            ].map((item) => (
              <Button
                key={item.name}
                onClick={() => {
                  handleClick(item.sectionId);
                  setIsOpen(false);
                }}
                className=""
              >
                {item.name}
              </Button>
            ))}
          </nav>

          <div className="mt-6 flex flex-col space-y-3">
            <NavLink
              to="/register"
              className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          </div>
        </motion.div>
      </Dialog>
    </>
  );
};

export default MobileNavbar;
