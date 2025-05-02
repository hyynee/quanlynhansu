import { Project } from '@/types/Project';
import { BsEyeFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

type Props = {}

const ListProject = () => {
    const fakeProjects: Project[] = [
        {
            id: "proj-001",
            name: "Website Redesign",
            startDate: new Date("2024-01-15"),
            endDate: new Date("2024-04-30"),
            description: "Redesign the company website to improve UX.",
            employees: [
                {
                    id: "emp-001",
                    firstName: "Alice",
                    lastName: "Nguyen",
                    email: "alice.nguyen@example.com",
                    dateOfBirth: new Date("1990-06-12"),
                    identificationCode: "123456789",
                    dateRange: new Date("2015-03-01"),
                    issuedBy: "HCMC Police",
                    nationality: "Vietnamese",
                    phone: "0901234567",
                    address: "123 Nguyen Trai, District 1, HCMC",
                    imageUrl: "",
                    sex: "nam",
                    specialize: "UI/UX Designer",
                    experience: "5 years",
                    departmentId: "dept-001",
                    positionId: "pos-001",
                    typeOfEmployeeId: "type-001",
                    status: "ACTIVE"
                }
            ],
            departments: [
                {
                    id: "dept-001",
                    departmentName: "Design",
                    description: "Handles UI/UX design tasks.",
                    phone: "0123456789",
                    employees: [],
                    projects: [],
                    createAt: new Date("2023-12-01"),
                    updateAt: new Date("2024-04-01")
                }
            ],
            status: "FINISHED",
            createAt: new Date("2024-01-10"),
            updateAt: new Date("2024-05-01")
        },
        {
            id: "proj-002",
            name: "Mobile App Development",
            startDate: new Date("2025-01-01"),
            endDate: new Date("2025-06-30"),
            description: "Develop a cross-platform mobile app.",
            employees: [
                {
                    id: "emp-002",
                    firstName: "Bao",
                    lastName: "Tran",
                    email: "bao.tran@example.com",
                    dateOfBirth: new Date("1988-12-05"),
                    identificationCode: "987654321",
                    dateRange: new Date("2016-08-20"),
                    issuedBy: "Hanoi Police",
                    nationality: "Vietnamese",
                    phone: "0912345678",
                    address: "456 Le Loi, Hanoi",
                    imageUrl: "",
                    sex: "nu",
                    specialize: "Mobile Developer",
                    experience: "8 years",
                    departmentId: "dept-002",
                    positionId: "pos-002",
                    typeOfEmployeeId: "type-002",
                    status: "ACTIVE"
                }
            ],
            departments: [
                {
                    id: "dept-002",
                    departmentName: "Development",
                    description: "Responsible for software development.",
                    phone: "098765421",
                    employees: [],
                    projects: [],
                    createAt: new Date("2023-12-01"),
                    updateAt: new Date("2024-04-01")
                }
            ],
            status: "UNFINISHED",
            createAt: new Date("2024-12-20"),
            updateAt: new Date("2025-03-15")
        }
    ];
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Danh sách chức vụ</h2>
                <div className="flex items-end space-x-4">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="border p-2 rounded-lg"
                    />
                    <h2>Tên chức vụ</h2>
                </div>
            </div>

            <table className="table-auto w-full mt-8">
                <thead className="border" style={{ height: "40px" }}>
                    <tr>
                        <th>STT</th>
                        <th>Mã</th>
                        <th>Tên dự án</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Ngày tạo</th>
                        <th>Ngày sửa</th>
                        <th>Xem</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {fakeProjects.map((project, index) => (
                        <tr key={project.id} className="border" style={{ height: "50px" }}>
                            <td>{index + 1}</td>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.startDate?.toLocaleDateString()}</td>
                            <td>{project.endDate?.toLocaleDateString()}</td>
                            <td>{new Date(project.createAt).toLocaleDateString()}</td>
                            <td>{new Date(project.updateAt).toLocaleDateString()}</td>
                            <td className="p-2 border">
                                <button
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <BsEyeFill className="size-6" />
                                </button>
                            </td>
                            <td className="p-2 border">
                                <button
                                    className="text-yellow-500 hover:text-yellow-700"
                                >
                                    <FaEdit className="size-6" />
                                </button>
                            </td>
                            <td className="p-2 border">
                                <button
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <MdDelete className="size-6" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListProject