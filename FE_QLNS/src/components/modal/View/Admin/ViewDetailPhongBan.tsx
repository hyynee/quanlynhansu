import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ListEmployeeDepartment from "@/pages/AdminDashBoard/Department/Components/DepartmentContent/ListEmployeeDepartment";
import ManagerDialog from "@/pages/AdminDashBoard/Department/Components/DepartmentContent/ManagerDialog";
import { Department } from "@/types/Department";
import { useState } from "react";
import { IoIosAddCircleOutline, IoMdArrowDropright } from "react-icons/io";
import { useParams } from "react-router-dom";

const fakeDepartments: Department[] = [
    {
        id: "1",
        departmentName: "Phòng Nhân Sự",
        description: "Quản lý nhân sự và tuyển dụng",
        phone: "0123-456-789",
        departmentManager: undefined,
        employees: [
            {
                id: "NV003",
                firstName: "Trần",
                lastName: "Thị C",
                email: "tranthic@example.com",
                dateOfBirth: new Date("1992-07-15"),
                birthPlace: "Hà Nội",
                identificationCode: "123456789",
                dateRange: new Date("2012-10-20"),
                issuedBy: "Công An Hà Nội",
                nationality: "Việt Nam",
                religion: "Không",
                phone: "0987654321",
                address: "Số 456, Cầu Giấy, Hà Nội",
                imageUrl: "https://via.placeholder.com/150",
                sex: "nu",
                specialize: "Nhân sự",
                experience: "5 năm",
                positionId: "P02",
                departmentId: "1",
                typeOfEmployeeId: "T02",
                status: "ACTIVE",
                createAt: new Date("2024-02-01"),
                updateAt: new Date("2024-03-01"),
            },
            {
                id: "NV004",
                firstName: "Lê",
                lastName: "Văn D",
                email: "levand@example.com",
                dateOfBirth: new Date("1993-08-20"),
                birthPlace: "Hà Nội",
                identificationCode: "987654321",
                dateRange: new Date("2013-11-25"),
                issuedBy: "Công An Hà Nội",
                nationality: "Việt Nam",
                religion: "Không",
                phone: "0987654321",
                address: "Số 789, Ba Đình, Hà Nội",
                imageUrl: "https://via.placeholder.com/150",
                sex: "nam",
                specialize: "Nhân sự",
                experience: "4 năm",
                positionId: "P03",
                departmentId: "1",
                typeOfEmployeeId: "T03",
                status: "ACTIVE",
                createAt: new Date("2024-02-01"),
                updateAt: new Date("2024-03-01"),
            },
        ],
        projects: [],
        createAt: new Date("2024-01-15"),
        updateAt: new Date("2024-03-01"),
    },
    {
        id: "2",
        departmentName: "Phòng Kế Toán",
        description: "Quản lý tài chính và kế toán",
        phone: "0987-654-321",
        departmentManager: {
            id: "2",
            departmentId: "2",
            department: {} as Department,
            employeeId: "102",
            employee: {
                id: "NV002",
                firstName: "Nguyễn",
                lastName: "Văn B",
                email: "nguyenvanb@example.com",
                dateOfBirth: new Date("1990-06-10"),
                birthPlace: "Hà Nội",
                identificationCode: "987654321",
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
];

const ViewDetailPhongBan = () => {
    const { id } = useParams();
    const phongban = fakeDepartments.find((dept) => dept.id === id);
    const [isOpen, setIsOpen] = useState(false);
    if (!phongban) {
        return (
            <div className="p-4 text-red-500 font-semibold text-center">
                Không tìm thấy phòng ban!
            </div>
        );
    }

    return (
        <div className="w-full p-4 sm:p-6 space-y-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="text-xl font-semibold text-zinc-500">Chi tiết phòng ban</h3>
                <span className="flex gap-2 items-center text-zinc-500">
                    <p className="font-semibold text-sm">Phòng ban</p>
                    <IoMdArrowDropright size={20} />
                    <p className="font-semibold text-sm">Chi tiết phòng ban</p>
                </span>
            </div>

            {/* Thông tin chính */}
            <div className="rounded-lg shadow-sm border p-5 flex flex-col items-center justify-center gap-4 bg-white">
                <h3 className="text-xl text-center font-semibold text-[#2c76f9]">
                    {phongban.departmentName}
                </h3>
                <p className="text-zinc-600 text-center">{phongban.description}</p>
            </div>

            {/* Thông tin chi tiết */}
            <div className="p-4 sm:p-5 space-y-4 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-zinc-500 mb-4">Thông tin chi tiết</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-700">ID:</span>
                        <span className="text-gray-900 font-medium">{phongban.id}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-700">Tên phòng ban:</span>
                        <span className="text-gray-900 font-medium">{phongban.departmentName}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-700">SDT liên hệ:</span>
                        <span className="text-gray-900 font-medium">{phongban.phone}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-700">Ngày tạo:</span>
                        <span className="text-gray-900">
                            {new Date(phongban.createAt).toLocaleDateString('vi-VN')}
                        </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-700">Cập nhật gần nhất:</span>
                        <span className="text-gray-900">
                            {new Date(phongban.updateAt).toLocaleDateString('vi-VN')}
                        </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-700">Trưởng phòng ban:</span>
                        <span className="text-gray-900 font-medium">
                            {phongban.departmentManager?.employee
                                ? `${phongban.departmentManager.employee.firstName} ${phongban.departmentManager.employee.lastName}`
                                : 'Chưa có'}
                        </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-700">Số lượng nhân viên:</span>
                        <span className="text-gray-900 font-medium">{phongban.employees.length}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="font-medium text-gray-700">Số lượng dự án:</span>
                        <span className="text-gray-900 font-medium">{phongban.projects.length}</span>
                    </div>
                </div>
            </div>

            {/* Trưởng phòng */}
            <div className="p-4 sm:p-5 space-y-4">
                <h3 className="text-xl font-semibold text-zinc-500">Trưởng phòng</h3>
                {phongban.departmentManager ? (
                    <div className="border rounded-lg p-5 bg-white">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Mã Nhân viên</TableHead>
                                    <TableHead>Tên nhân viên</TableHead>
                                    <TableHead>Ảnh nhân viên</TableHead>
                                    <TableHead>Chức vụ</TableHead>
                                    <TableHead>Ngày sinh</TableHead>
                                    <TableHead>Giới tính</TableHead>
                                    <TableHead>Trạng thái</TableHead>
                                    <TableHead>Loại nhân viên</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow key={phongban.departmentManager.employee.id}>
                                    <TableCell>{phongban.departmentManager.employee?.id}</TableCell>
                                    <TableCell>{phongban.departmentManager.employee?.firstName} {phongban.departmentManager.employee?.lastName}</TableCell>
                                    <TableCell>
                                        <img
                                            className="w-[70px] h-[80px] rounded-md ring-2 object-cover"
                                            src={phongban.departmentManager.employee?.imageUrl}
                                            alt="Image"
                                        />
                                    </TableCell>
                                    <TableCell>{phongban.departmentManager.employee?.positionId}</TableCell>
                                    <TableCell>{new Date(phongban.departmentManager.employee?.dateOfBirth).toLocaleDateString('vi-VN')}</TableCell>
                                    <TableCell>{phongban.departmentManager.employee?.sex}</TableCell>
                                    <TableCell>{phongban.departmentManager.employee?.status}</TableCell>
                                    <TableCell>{phongban.departmentManager.employee?.typeOfEmployeeId}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="transition-all flex items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
                    >
                        <IoIosAddCircleOutline size={25} />
                        <p className="text-white font-semibold">Thêm trưởng phòng</p>
                    </Button>
                )}
            </div>

            {/* Danh sách nhân viên */}
            <ListEmployeeDepartment employees={phongban.employees} />

            {/* Dialog thêm trưởng phòng */}
            <ManagerDialog isOpen={isOpen} setIsOpen={setIsOpen} data={phongban} />
        </div>
    );
};

export default ViewDetailPhongBan;