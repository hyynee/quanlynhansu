import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Degree } from '@/types/Degree';
import { Dialog } from '@radix-ui/react-dialog';

type Props = {
    degree: Degree;
    open: boolean;
    onClose: () => void;
}

const ViewDetailBangCap = ({ degree, open, onClose }: Props) => {
    return (
        <div className=''>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-center text-2xl font-bold'>
                            Thông tin bằng cấp
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                            Thông tin chi tiết về bằng cấp này và số lượng nhân viên liên quan.
                        </DialogDescription>
                    </DialogHeader>
                    {/* Nội dung */}
                    <div className="space-y-4 mt-4 text-sm bg-gray-50 p-4 rounded-md border border-gray-200">
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-700">ID:</span>
                            <span className="text-gray-900">{degree.id}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Tên bằng cấp:</span>
                            <span className="text-gray-900 font-medium">{degree.degreeName}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Ngày tạo:</span>
                            <span className="text-gray-900">
                                {new Date(degree.createAt).toLocaleDateString('vi-VN')}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Cập nhật gần nhất:</span>
                            <span className="text-gray-900">
                                {new Date(degree.updateAt).toLocaleDateString('vi-VN')}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Số lượng nhân viên:</span>
                            <span className="text-gray-900 font-medium">{degree.employees.length}</span>
                        </div>
                    </div>
                    {/* Footer */}
                    <DialogFooter className="mt-6">
                        <Button
                            onClick={onClose}
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            Đóng
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ViewDetailBangCap