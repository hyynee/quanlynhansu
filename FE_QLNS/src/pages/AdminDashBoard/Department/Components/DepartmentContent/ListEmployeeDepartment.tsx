import { Button } from "@/components/ui/button";
import { Employee } from "@/types/Employee";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import DepartmentTable from "./DepartmentTable";

interface ListEmployeeDepartmentProps {
    employees: Employee[];
}

const ListEmployeeDepartment = ({ employees }: ListEmployeeDepartmentProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchType, setSearchType] = useState("name");
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 5;

    // Lọc nhân viên theo tìm kiếm
    const filteredEmployees = employees?.filter((employee) => {
        if (searchType === "name") {
            return `${employee.firstName} ${employee.lastName}`.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
            return employee.id.toLowerCase().includes(searchTerm.toLowerCase());
        }
    }) || [];

    // Tính toán phân trang
    const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
    const startIndex = (currentPage - 1) * employeesPerPage;
    const currentEmployees = filteredEmployees.slice(startIndex, startIndex + employeesPerPage);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            {employees.length > 0 ? (
                <div className="p-4 sm:p-5 space-y-4">
                    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h3 className="text-xl font-semibold text-zinc-500">Nhân viên phòng ban</h3>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <div className="w-full sm:w-[300px] border border-solid flex items-center rounded-lg">
                                <IoIosSearch size={25} className="ml-3 text-gray-500" />
                                <input
                                    className="focus:outline-none px-3 py-2 w-full"
                                    type="text"
                                    placeholder="Tìm kiếm nhân viên..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <div className="border flex items-center justify-center rounded-lg px-2">
                                <select
                                    className="w-full focus:outline-none py-2"
                                    name="category"
                                    id="category"
                                    value={searchType}
                                    onChange={(event) => setSearchType(event.target.value)}
                                >
                                    <option value="name">Tên nhân viên</option>
                                    <option value="id">Mã nhân viên</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-lg p-5 bg-white">
                        <DepartmentTable employees={currentEmployees} />
                    </div>
                    {/* Phân trang thủ công */}
                    <div className="w-full flex items-center justify-center gap-2">
                        <Button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-md ${currentPage === 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Previous
                        </Button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 rounded-md ${currentPage === index + 1
                                    ? 'bg-[#2c76f9] text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {index + 1}
                            </Button>
                        ))}
                        <Button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded-md ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="w-full flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-zinc-600">Chưa có nhân viên nào trong phòng ban</h3>
                </div>
            )}
        </>
    );
};

export default ListEmployeeDepartment;