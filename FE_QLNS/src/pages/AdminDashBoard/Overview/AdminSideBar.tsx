import { useState } from 'react';
import { FaBoxOpen, FaChevronDown, FaChevronUp, FaClipboardList, FaSignOutAlt, FaStore } from 'react-icons/fa';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

interface MenuState {
    employees: boolean;
    rewards: boolean;
    salaries: boolean;
}

const AdminSideBar = () => {
    const [openMenus, setOpenMenus] = useState<MenuState>({
        employees: false,
        rewards: false,
        salaries: false,
    });

    const toggleMenu = (menuKey: keyof MenuState) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuKey]: !prev[menuKey],
        }));
    };

    return (
        <div className="p-6 h-full overflow-auto flex flex-col bg-gray-900 text-white">
            <div className="mb-6">
                <Link to="/admin" className="text-white text-lg font-semibold">HuyAnh</Link>
            </div>
            <h2 className="text-xl font-medium mb-6 text-center text-gray-200">Admin Dashboard</h2>
            <nav className="flex flex-col space-y-2">
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-indigo-700 text-white py-3 px-4 rounded flex items-center space-x-2'
                            : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2'
                    }
                >
                    <FaBoxOpen />
                    <span>Trang chủ</span>
                </NavLink>
                {/* Nhân viên */}
                <div className="relative">
                    <button
                        onClick={() => toggleMenu('employees')}
                        className="text-gray-300 hover:bg-indigo-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2 w-full"
                    >
                        <FaStore />
                        <div className="flex flex-col items-start">
                            <span className="text-sm text-center">Nhân viên</span>
                        </div>
                        {openMenus.employees ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {openMenus.employees && (
                        <div className="absolute left-0 mt-1 w-full bg-gray-900 rounded shadow-lg z-10">
                            <NavLink
                                to="/admin/employees"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2'
                                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded flex items-center space-x-2'
                                }
                            >
                                <FaClipboardList />
                                <span>Xem nhân viên</span>
                            </NavLink>
                            <NavLink
                                to="/admin/employees/add"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2'
                                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded flex items-center space-x-2'
                                }
                            >
                                <FaClipboardList />
                                <span>Thêm nhân viên</span>
                            </NavLink>
                            <NavLink
                                to="/admin/employees/nations"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2'
                                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded flex items-center space-x-2'
                                }
                            >
                                <FaClipboardList />
                                <span>Dân tộc</span>
                            </NavLink>
                            <NavLink
                                to="/admin/employees/degrees"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2'
                                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded flex items-center space-x-2'
                                }
                            >
                                <FaClipboardList />
                                <span>Bằng cấp</span>
                            </NavLink>
                        </div>
                    )}
                </div>
                {/* Phòng ban */}
                <NavLink
                    to="/admin/department"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-indigo-700 text-white py-3 px-4 rounded flex items-center space-x-2'
                            : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2'
                    }
                >
                    <FaBoxOpen />
                    <span>Phòng ban</span>
                </NavLink>
                {/* Dự án */}
                <NavLink
                    to="/admin/project"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-indigo-700 text-white py-3 px-4 rounded flex items-center space-x-2'
                            : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2'
                    }
                >
                    <FaClipboardList />
                    <span>Dự án</span>
                </NavLink>
                {/* Chức vụ */}
                <NavLink
                    to="/admin/position"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-indigo-700 text-white py-3 px-4 rounded flex items-center space-x-2'
                            : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2'
                    }
                >
                    <FaClipboardList />
                    <span>Chức vụ</span>
                </NavLink>
                {/* Quản lý lương */}
                <div className="relative">
                    <button
                        onClick={() => toggleMenu('salaries')}
                        className="text-gray-300 hover:bg-indigo-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2 w-full"
                    >
                        <FaStore />
                        <div className="flex flex-col items-start">
                            <span className="text-sm text-center">Lương</span>
                        </div>
                        {openMenus.salaries ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {openMenus.salaries && (
                        <div className="absolute left-0 mt-1 w-full bg-gray-900 rounded shadow-lg z-10">
                            <NavLink
                                to="/admin/salaries/board"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2'
                                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded flex items-center space-x-2'
                                }
                            >
                                <FaClipboardList />
                                <span>Tính lương</span>
                            </NavLink>
                            <NavLink
                                to="/admin/salaries"
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2'
                                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded flex items-center space-x-2'
                                }
                            >
                                <FaClipboardList />
                                <span>Xem lương</span>
                            </NavLink>
                        </div>
                    )}
                </div>
                {/* Khen thưởng / Kỷ luật */}
                <div className="relative">
                    <button
                        onClick={() => toggleMenu('rewards')}
                        className="text-gray-300 hover:bg-indigo-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2 w-full"
                    >
                        <FaStore />
                        <div className="flex flex-col items-start">
                            <span className="text-sm text-center">Khen thưởng</span>
                            <span className="text-sm text-center">Kỷ luật</span>
                        </div>
                        {openMenus.rewards ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {openMenus.rewards && (
                        <div className="absolute left-0 mt-1 w-full bg-gray-900 rounded shadow-lg z-10">
                            <NavLink
                                to="/admin/rewards"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2'
                                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded flex items-center space-x-2'
                                }
                            >
                                <FaClipboardList />
                                <span>Khen thưởng</span>
                            </NavLink>
                            <NavLink
                                to="/admin/discipline"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-indigo-700 text-white py-2 px-4 rounded flex items-center space-x-2'
                                        : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-2 px-4 rounded flex items-center space-x-2'
                                }
                            >
                                <FaClipboardList />
                                <span>Kỷ luật</span>
                            </NavLink>
                        </div>
                    )}
                </div>
                {/* Tài khoản */}
                <NavLink
                    to="/admin/account"
                    className={({ isActive }) =>
                        isActive
                            ? 'bg-indigo-700 text-white py-3 px-4 rounded flex items-center space-x-2'
                            : 'text-gray-300 hover:bg-indigo-600 hover:text-white py-3 px-4 rounded flex items-center space-x-2'
                    }
                >
                    <MdOutlineManageAccounts />
                    <span>Tài khoản</span>
                </NavLink>
            </nav>
            <div className="mt-6">
                <button className="bg-red-600 text-white w-full py-2 px-4 rounded hover:bg-red-700 flex items-center justify-center space-x-2">
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSideBar;