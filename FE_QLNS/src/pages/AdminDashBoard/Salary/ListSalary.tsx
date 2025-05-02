import { Salary } from '@/types/Salary';
import { BsEyeFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

type Props = {}

const fakeSalaries: Salary[] = [
    {
        id: "1",
        basicSalary: 8000000,
        salary: 9200000,
        workday: 22,
        allowance: 1200000,
        description: "Lương tháng 3/2025 cho nhân viên Nguyễn Văn A",
        employeeId: "emp1",
        employee: [
            {
                id: "emp1",
                firstName: "Nguyễn",
                lastName: "Văn A",
                email: "nguyenvana@example.com",
                dateOfBirth: new Date("1990-05-15"),
                identificationCode: "123456789",
                dateRange: new Date("2010-06-20"),
                issuedBy: "Hà Nội",
                nationality: "Kinh",
                phone: "0901234567",
                address: "123 Đường Láng, Hà Nội",
                imageUrl: "https://example.com/images/nguyenvana.jpg",
                sex: "nam",
                positionId: "pos1",
                typeOfEmployeeId: "type1",
                status: "ACTIVE",
                createAt: new Date("2020-01-01"),
                updateAt: new Date("2025-03-01"),
            },
        ],
        createAt: new Date("2025-03-01"),
        updateAt: new Date("2025-03-10"),
    },
    {
        id: "2",
        basicSalary: 10000000,
        salary: 11500000,
        workday: 20,
        allowance: 1500000,
        description: "Lương tháng 2/2025 cho nhân viên Trần Thị B",
        employeeId: "emp2",
        employee: [
            {
                id: "emp2",
                firstName: "Trần",
                lastName: "Thị B",
                email: "tranthib@example.com",
                dateOfBirth: new Date("1995-08-25"),
                identificationCode: "987654321",
                dateRange: new Date("2015-09-10"),
                issuedBy: "TP.HCM",
                nationality: "Kinh",
                phone: "0912345678",
                address: "456 Nguyễn Huệ, TP.HCM",
                imageUrl: "https://example.com/images/tranthib.jpg",
                sex: "nu",
                positionId: "pos2",
                typeOfEmployeeId: "type2",
                status: "ACTIVE",
                createAt: new Date("2020-02-01"),
                updateAt: new Date("2025-02-01"),
            },
        ],
        createAt: new Date("2025-02-01"),
        updateAt: new Date("2025-02-15"),
    },
    {
        id: "3",
        basicSalary: 6500000,
        salary: 7400000,
        workday: 23,
        allowance: 900000,
        description: "Lương tháng 1/2025 cho nhân viên Lê Văn C",
        employeeId: "emp3",
        employee: [
            {
                id: "emp3",
                firstName: "Lê",
                lastName: "Văn C",
                email: "levanc@example.com",
                dateOfBirth: new Date("1988-12-10"),
                identificationCode: "456789123",
                dateRange: new Date("2008-11-15"),
                issuedBy: "Đà Nẵng",
                nationality: "Kinh",
                phone: "0933456789",
                address: "789 Hai Bà Trưng, Đà Nẵng",
                imageUrl: "https://example.com/images/levanc.jpg",
                sex: "nam",
                positionId: "pos3",
                typeOfEmployeeId: "type3",
                status: "ACTIVE",
                createAt: new Date("2020-03-01"),
                updateAt: new Date("2025-01-01"),
            },
        ],
        createAt: new Date("2025-01-01"),
        updateAt: new Date("2025-01-20"),
    },
];

const ListSalary = (props: Props) => {

    return (
        <table className='w-full table-auto mt-8 border'>
            <thead className="border bg-gray-100" style={{ height: '40px' }}>
                <tr>
                    <th>STT</th>
                    <th>Mã lương</th>
                    <th>Tên nhân viên</th>
                    <th>Ảnh nhân viên</th>
                    <th>Chức vụ</th>
                    <th>Lương cơ bản</th>
                    <th>Số ngày công</th>
                    <th>Lương thực nhận</th>
                    <th>Ngày chấm công</th>
                    <th>Chi tiết</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {fakeSalaries.map((salary, index) => (
                    <tr key={salary.id} className='border' style={{ height: '50px' }}>
                        <td>{index + 1}</td>
                        <td>{salary.id}</td>
                        <td>{salary.employee[0].firstName} {salary.employee[0].lastName}</td>
                        <td>
                            <img src={salary.employee[0].imageUrl} alt="employee" className='w-10 h-10 rounded-full' />
                        </td>
                        <td>{salary.employee[0].positionId}</td>
                        <td>{salary.basicSalary.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                        <td>{salary.workday}</td>
                        <td>{salary.salary.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                        <td>{new Date(salary.createAt).toLocaleDateString("vi-VN")}</td>
                        <td>
                            <button className="text-yellow-500 hover:text-yellow-700">
                                <BsEyeFill className="size-6" />
                            </button>
                        </td>
                        <td>
                            <button className="text-red-500 hover:text-red-700">
                                <MdDelete className="size-6" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}

export default ListSalary