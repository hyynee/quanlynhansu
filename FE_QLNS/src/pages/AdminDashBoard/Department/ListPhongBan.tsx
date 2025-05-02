import { Department } from "@/types/Department";
import { BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";

const fakeDepartments: Department[] = [
    {
        id: "1",
        departmentName: "Phòng Nhân Sự",
        description: "Quản lý nhân sự và tuyển dụng",
        phone: "0123-456-789",
        departmentManager: {
            id: "1",
            departmentId: "1",
            department: {} as Department,
            employeeId: "101",
            employee: {
                id: "NV001",
                firstName: "Nguyễn",
                lastName: "Văn A",
                email: "nguyenvana@example.com",
                dateOfBirth: new Date("1990-05-10"),
                birthPlace: "Hà Nội",
                identificationCode: "123456789",
                dateRange: new Date("2010-09-15"),
                issuedBy: "Công An Hà Nội",
                nationality: "Việt Nam",
                religion: "Không",
                phone: "0987654321",
                address: "Số 123, Đống Đa, Hà Nội",
                imageUrl: "https://via.placeholder.com/150",
                sex: "nam",
                specialize: "Quản lý nhân sự",
                experience: "10 năm",
                positionId: "P01",
                departmentId: "1",
                typeOfEmployeeId: "T01",
                status: "ACTIVE",
                createAt: new Date("2024-01-15"),
                updateAt: new Date("2024-03-01"),
            },
        },
        employees: [],
        projects: [],
        createAt: new Date("2024-01-15"),
        updateAt: new Date("2024-03-01"),
    },
    {
        id: "2",
        departmentName: "Phòng Nhân Sự",
        description: "Quản lý nhân sự và tuyển dụng",
        phone: "0123-456-789",
        departmentManager: {
            id: "1",
            departmentId: "1",
            department: {} as Department,
            employeeId: "101",
            employee: {
                id: "NV002",
                firstName: "Nguyễn",
                lastName: "Văn B",
                email: "nguyenvanb@example.com",
                dateOfBirth: new Date("1990-06-10"),
                birthPlace: "Hà Nội",
                identificationCode: "123456789",
                dateRange: new Date("2010-09-15"),
                issuedBy: "Công An Hà Nội",
                nationality: "Việt Nam",
                religion: "Không",
                phone: "0987654321",
                address: "Số 123, Đống Đa, Hà Nội",
                imageUrl: "https://via.placeholder.com/150",
                sex: "nam",
                specialize: "Quản lý nhân sự",
                experience: "10 năm",
                positionId: "P01",
                departmentId: "1",
                typeOfEmployeeId: "T01",
                status: "ACTIVE",
                createAt: new Date("2024-01-15"),
                updateAt: new Date("2024-03-01"),
            },
        },
        employees: [],
        projects: [],
        createAt: new Date("2024-01-15"),
        updateAt: new Date("2024-03-01"),
    }
];

const ListPhongBan = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Danh sách phòng ban</h2>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="border p-2 rounded-lg"
                    />
                </div>
            </div>

            <table className="table-auto w-full mt-6 border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr className="border">
                        <th className="p-2 border">STT</th>
                        <th className="p-2 border">Tên phòng ban</th>
                        <th className="p-2 border">Mô tả</th>
                        <th className="p-2 border">Ngày tạo</th>
                        <th className="p-2 border">Xem</th>
                        <th className="p-2 border">Sửa</th>
                        <th className="p-2 border">Xóa</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {fakeDepartments.map((dept, index) => (
                        <tr key={dept.id} className="border">
                            <td className="p-2 border">{index + 1}</td>
                            <td className="p-2 border">{dept.departmentName}</td>
                            <td className="p-2 border">{dept.description}</td>
                            <td className="p-2 border">
                                {new Date(dept.createAt).toLocaleDateString("vi-VN")}
                            </td>
                            <td className="p-2 border">
                                <button
                                    className="text-blue-500 hover:text-blue-700"
                                    onClick={() => navigate(`/admin/department/${dept.id}`)}
                                >
                                    <BsEyeFill className="size-6" />
                                </button>
                            </td>
                            <td className="p-2 border">
                                <button className="text-yellow-500 hover:text-yellow-700">
                                    <FaEdit className="size-6" />
                                </button>
                            </td>
                            <td className="p-2 border">
                                <button className="text-red-500 hover:text-red-700">
                                    <MdDelete className="size-6" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListPhongBan;
