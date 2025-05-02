
import { NavLink } from "react-router-dom";
import ListNhanVien from "./ListNhanVien";

type Props = {};

const Nhanvien = (props: Props) => {

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Nhân viên</h1>
        <NavLink
          to="/admin/employees/add"
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-200"
        >
          Thêm nhân viên
        </NavLink>
      </div>

      {/* List Employees */}
      <div>
        <ListNhanVien
        />
      </div>
    </div>
  );
};

export default Nhanvien;