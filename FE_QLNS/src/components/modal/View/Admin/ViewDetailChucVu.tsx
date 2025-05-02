import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Position } from '@/types/Position';

type Props = {
    position: Position;
    open: boolean;
    onClose: () => void;
}

const ViewDetailChucVu = ({ position, open, onClose }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[900px] rounded-lg p-6 bg-white shadow-lg">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-800">
                        Chi tiết chức vụ
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                        Thông tin chi tiết về chức vụ này và nhân viên liên quan.
                    </DialogDescription>
                </DialogHeader>
                <table className='w-full table-auto border p-4'>
                    <thead>
                        <tr>
                            <th className='border p-2'>ID</th>
                            <th className='border p-2'>Chức vụ</th>
                            <th className='border p-2'>Nhân viên liên quan</th>
                            <th className='border p-2'>Hệ số</th>
                            <th className='border p-2'>Ngày tạo</th>
                            <th className='border p-2'>Cập nhật gần nhất</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border p-2'>{position.id}</td>
                            <td className='border p-2'>{position.positionName}</td>
                            <td>
                                {position.employees.length > 0 ? (
                                    position.employees.map((employee) => (
                                        <div key={employee.id} className='border p-2 text-center'>
                                            <p>{`${employee.firstName} ${employee.lastName}`}</p>
                                            <p>{employee.email}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className='text-gray-500 text-center'>Chưa có nhân viên nào</p>
                                )}
                            </td>
                            <td className='border p-2 text-center'>{position.coefficient}</td>
                            <td className='border p-2 text-center'>{new Date(position.createAt).toLocaleDateString('vi-VN')}</td>
                            <td className='border p-2 text-center'>{new Date(position.updateAt).toLocaleDateString('vi-VN')}</td>
                        </tr>
                    </tbody>
                </table>
            </DialogContent>
        </Dialog>
    )
}

export default ViewDetailChucVu