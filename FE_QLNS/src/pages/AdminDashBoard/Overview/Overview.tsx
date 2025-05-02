import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router";
import AdminSideBar from "./AdminSideBar";

type Props = {};

const Overview = (props: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="flex md:hidden justify-between items-center bg-gray-800 text-white p-4 sticky top-0 z-50">
                <button onClick={toggleSidebar}>
                    <FaBars className="size-8" />
                </button>
                <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
            </div>

            {/* Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                className={` bg-gray-800 w-64 text-white fixed top-0 left-0 z-50 transform transition-transform duration-300 md:sticky md:top-0 md:transform-none md:h-screen flex h-screen ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:block`}
            >
                <AdminSideBar />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto bg-gray-100 min-h-screen md:ml-0">
                <Outlet />
            </div>
        </div>
    );
};

export default Overview;