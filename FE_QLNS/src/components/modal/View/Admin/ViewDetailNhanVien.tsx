import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Employee } from "@/types/Employee";
import { useState } from "react";
import { FaBriefcase, FaChevronDown, FaChevronUp, FaCog, FaEnvelope, FaUser } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const ViewDetailNhanVien = () => {
  const { id } = useParams<{ id: string }>();
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
      imageUrl:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
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
      imageUrl:
        "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
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

  // Tìm nhân viên dựa trên id
  const employee = employees.find((emp) => emp.id === id);

  const [openSections, setOpenSections] = useState({
    basic: true,
    contact: false,
    work: false,
    system: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!employee) {
    return (
      <div className="p-4 text-red-500 font-semibold text-center">
        Không tìm thấy nhân viên!
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 w-full mx-auto bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="border-b pb-4">
        <div className="flex items-center space-x-4">
          <img
            src={employee.imageUrl}
            alt={`${employee.firstName} ${employee.lastName}`}
            className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {employee.firstName} {employee.lastName}
            </h2>
            <p className="text-sm text-gray-500">
              Mã nhân viên: {employee.id} | Trạng thái:
              <Badge
                className={`ml-2 ${employee.status === "ACTIVE"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                  }`}
              >
                {employee.status || "Chưa có thông tin"}
              </Badge>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 mt-6 text-sm">
        {/* Thông tin cơ bản */}
        <div className="bg-gray-50 rounded-lg border border-gray-200">
          <button
            onClick={() => toggleSection("basic")}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-t-lg"
          >
            <div className="flex items-center space-x-2">
              <FaUser className="text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-800">Thông tin cơ bản</h3>
            </div>
            {openSections.basic ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </button>
          {openSections.basic && (
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Mã nhân viên:</span>
                <span className="text-gray-900 font-medium">{employee.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Họ:</span>
                <span className="text-gray-900">{employee.firstName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Tên:</span>
                <span className="text-gray-900">{employee.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Giới tính:</span>
                <span className="text-gray-900 capitalize">{employee.sex}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Ngày sinh:</span>
                <span className="text-gray-900">
                  {new Date(employee.dateOfBirth).toLocaleDateString("vi-VN")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Nơi sinh:</span>
                <span className="text-gray-900">
                  {employee.birthPlace || "Chưa có thông tin"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Số CCCD:</span>
                <span className="text-gray-900">{employee.identificationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Ngày cấp CCCD:</span>
                <span className="text-gray-900">
                  {new Date(employee.dateRange).toLocaleDateString("vi-VN")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Nơi cấp CCCD:</span>
                <span className="text-gray-900">{employee.issuedBy}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Quốc tịch:</span>
                <span className="text-gray-900">{employee.nationality}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Tôn giáo:</span>
                <span className="text-gray-900">
                  {employee.religion || "Chưa có thông tin"}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Thông tin liên hệ */}
        <div className="bg-gray-50 rounded-lg border border-gray-200">
          <button
            onClick={() => toggleSection("contact")}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-t-lg"
          >
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-800">Thông tin liên hệ</h3>
            </div>
            {openSections.contact ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </button>
          {openSections.contact && (
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Email:</span>
                <span className="text-gray-900">{employee.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Số điện thoại:</span>
                <span className="text-gray-900">{employee.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Địa chỉ:</span>
                <span className="text-gray-900">{employee.address}</span>
              </div>
            </div>
          )}
        </div>

        {/* Thông tin công việc */}
        <div className="bg-gray-50 rounded-lg border border-gray-200">
          <button
            onClick={() => toggleSection("work")}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-t-lg"
          >
            <div className="flex items-center space-x-2">
              <FaBriefcase className="text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-800">Thông tin công việc</h3>
            </div>
            {openSections.work ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </button>
          {openSections.work && (
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Chuyên môn:</span>
                <span className="text-gray-900">
                  {employee.specialize || "Chưa có thông tin"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Kinh nghiệm:</span>
                <span className="text-gray-900">
                  {employee.experience || "Chưa có thông tin"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Phòng ban:</span>
                <span className="text-gray-900">
                  {employee.departmentId || "Chưa có thông tin"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Chức vụ:</span>
                <span className="text-gray-900">{employee.positionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Loại nhân viên:</span>
                <span className="text-gray-900">{employee.typeOfEmployeeId}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Trạng thái:</span>
                <Badge
                  className={`ml-2 ${employee.status === "ACTIVE"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                    }`}
                >
                  {employee.status || "Chưa có thông tin"}
                </Badge>
              </div>
            </div>
          )}
        </div>

        {/* Thông tin hệ thống */}
        <div className="bg-gray-50 rounded-lg border border-gray-200">
          <button
            onClick={() => toggleSection("system")}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-t-lg"
          >
            <div className="flex items-center space-x-2">
              <FaCog className="text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-800">Thông tin hệ thống</h3>
            </div>
            {openSections.system ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </button>
          {openSections.system && (
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">ID người dùng:</span>
                <span className="text-gray-900">
                  {employee.userId || "Chưa có thông tin"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Ngày tạo:</span>
                <span className="text-gray-900">
                  {employee.createAt
                    ? new Date(employee.createAt).toLocaleDateString("vi-VN")
                    : "Chưa có thông tin"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Cập nhật gần nhất:</span>
                <span className="text-gray-900">
                  {employee.updateAt
                    ? new Date(employee.updateAt).toLocaleDateString("vi-VN")
                    : "Chưa có thông tin"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end space-x-2">
        <Button
          onClick={() => navigate("/admin/employees")}
          className="bg-gray-500 text-white hover:bg-gray-600 transition-colors duration-200"
        >
          Quay lại
        </Button>
      </div>
    </div>
  );
};

export default ViewDetailNhanVien;