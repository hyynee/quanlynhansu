import { Employee } from "@/types/Employee";
import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

type Props = {};

const ListNhanVien = (props: Props) => {
    const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
    const navigate = useNavigate();

    const employees: Employee[] = [
        {
            id: "nv0001",
            firstName: "Nguyen",
            lastName: "Van A",
            email: "nguyenvana@example.com",
            dateOfBirth: new Date("1990-01-01"),
            birthPlace: "Hà Nội",
            identificationCode: "123456789",
            dateRange: new Date("2020-01-01"),
            issuedBy: "Hà Nội",
            nationality: "Việt Nam",
            religion: "Không",
            phone: "0123456789",
            address: "123 Đường Láng, Hà Nội",
            imageUrl: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
            sex: "nam",
            specialize: "CNTT",
            experience: "5 năm",
            departmentId: "dep1",
            positionId: "pos1",
            typeOfEmployeeId: "type1",
            status: "ACTIVE",
            userId: "user1",
            createAt: new Date("2023-01-01"),
            updateAt: new Date("2023-01-10"),
        },
        {
            id: "nv0002",
            firstName: "Nguyen",
            lastName: "Van B",
            email: "nguyenvanb@example.com",
            dateOfBirth: new Date("1992-02-02"),
            birthPlace: "TP.HCM",
            identificationCode: "987654321",
            dateRange: new Date("2021-02-01"),
            issuedBy: "TP.HCM",
            nationality: "Việt Nam",
            religion: "Phật giáo",
            phone: "0987654321",
            address: "456 Nguyễn Huệ, TP.HCM",
            imageUrl: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
            sex: "nam",
            specialize: "Kế toán",
            experience: "3 năm",
            departmentId: "dep2",
            positionId: "pos2",
            typeOfEmployeeId: "type2",
            status: "ACTIVE",
            userId: "user2",
            createAt: new Date("2023-02-01"),
            updateAt: new Date("2023-02-15"),
        },
    ];
    return (
        <div className="p-2">
            {/* List Employees */}
            <div className="border p-5 rounded-lg shadow-md bg-white">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Danh sách nhân viên</h2>
                    <div className="flex items-center space-x-4">
                        {/* Search Input */}
                        <input
                            type="search"
                            placeholder="Tìm kiếm nhân viên..."
                            className="border border-gray-300 rounded-lg p-2 w-64 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        {/* Filter Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsEmployeeOpen(!isEmployeeOpen)}
                                className="border border-gray-300 py-2 px-4 rounded flex items-center space-x-2 bg-gray-50 text-gray-700 hover:bg-gray-100"
                            >
                                <span className="text-sm">Lọc theo</span>
                                {isEmployeeOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            {isEmployeeOpen && (
                                <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
                                    <NavLink
                                        to="/admin/employees/name"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-indigo-600 text-white py-2 px-4 block"
                                                : "text-gray-700 hover:bg-indigo-600 hover:text-white py-2 px-4 block"
                                        }
                                    >
                                        Tên
                                    </NavLink>
                                    <NavLink
                                        to="/admin/employees/cccd"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-indigo-600 text-white py-2 px-4 block"
                                                : "text-gray-700 hover:bg-indigo-600 hover:text-white py-2 px-4 block"
                                        }
                                    >
                                        CCCD
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white rounded-lg">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr className="h-12">
                                <th className="px-4 py-2 font-semibold">STT</th>
                                <th className="px-4 py-2 font-semibold">Mã nhân viên</th>
                                <th className="px-4 py-2 font-semibold">Tên nhân viên</th>
                                <th className="px-4 py-2 font-semibold">Hình ảnh</th>
                                <th className="px-4 py-2 font-semibold">Giới tính</th>
                                <th className="px-4 py-2 font-semibold">Ngày sinh</th>
                                <th className="px-4 py-2 font-semibold">Số CCCD</th>
                                <th className="px-4 py-2 font-semibold">Xem</th>
                                <th className="px-4 py-2 font-semibold">Sửa</th>
                                <th className="px-4 py-2 font-semibold">Xóa</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-gray-600">
                            {employees.map((employee, index) => (
                                <tr
                                    key={employee.id}
                                    className="border-b hover:bg-gray-50 transition-colors duration-150"
                                >
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{employee.id}</td>
                                    <td className="px-4 py-2 font-medium">
                                        {employee.firstName} {employee.lastName}
                                    </td>
                                    <td className="px-4 py-2">
                                        <img
                                            src={employee.imageUrl}
                                            alt={`${employee.firstName} ${employee.lastName}`}
                                            className="w-10 h-10 rounded-full mx-auto object-cover"
                                        />
                                    </td>
                                    <td className="px-4 py-2 capitalize">{employee.sex}</td>
                                    <td className="px-4 py-2">
                                        {new Date(employee.dateOfBirth).toLocaleDateString('vi-VN')}
                                    </td>
                                    <td className="px-4 py-2">{employee.identificationCode}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                                            onClick={() => navigate(`/admin/employees/${employee.id}`)}
                                            title="Xem chi tiết"
                                        >
                                            <BsEyeFill className="size-5" />
                                        </button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="text-yellow-500 hover:text-yellow-700 transition-colors duration-200"
                                            title="Chỉnh sửa"
                                        >
                                            <FaEdit className="size-5" />
                                        </button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="text-red-500 hover:text-red-700 transition-colors duration-200"
                                            title="Xóa"
                                        >
                                            <MdDelete className="size-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListNhanVien;