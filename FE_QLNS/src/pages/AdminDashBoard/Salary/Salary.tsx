import ListSalary from "./ListSalary";

type Props = {};

const Salary = (props: Props) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Xem lương nhân viên</h2>
      </div>
      {/* Search */}
      <div className="mt-4 flex items-center gap-4">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        <select
          name="filter"
          id="filter"
          className="border border-gray-300 rounded-md p-2 bg-gray-50 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        >
          <option value="tenNV">Tên nhân viên</option>
          <option value="ngayChamCong">Ngày chấm công</option>
        </select>
      </div>
      <div className="border p-5 rounded-lg shadow-md mt-4">
        <ListSalary />
      </div>
    </div>
  );
};

export default Salary;