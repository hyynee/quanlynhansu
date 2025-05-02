import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DepartmentTable = ({ employees }: { employees: any[] }) => {
    return (
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
                {employees.map((employee) => (
                    <TableRow key={employee.id}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.firstName} {employee.lastName}</TableCell>
                        <TableCell>
                            <img
                                className="w-[70px] h-[80px] rounded-md ring-2 object-cover"
                                src={employee.imageUrl}
                                alt="Image"
                            />
                        </TableCell>
                        <TableCell>{employee.positionId}</TableCell>
                        <TableCell>{new Date(employee.dateOfBirth).toLocaleDateString('vi-VN')}</TableCell>
                        <TableCell>{employee.sex}</TableCell>
                        <TableCell>{employee.status}</TableCell>
                        <TableCell>{employee.typeOfEmployeeId}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DepartmentTable;