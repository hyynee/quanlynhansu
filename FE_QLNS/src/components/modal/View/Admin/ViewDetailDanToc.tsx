import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Nation } from "@/types/Nation";

type Props = {
    nation: Nation;
    open: boolean;
    onClose: () => void;
};

const ViewDetailDanToc = ({ nation, open, onClose }: Props) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] rounded-lg p-6 bg-white shadow-lg">
                {/* Header */}
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-800">
                        Chi tiết dân tộc
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                        Thông tin chi tiết về dân tộc này và số lượng nhân viên liên quan.
                    </DialogDescription>
                </DialogHeader>

                {/* Nội dung */}
                <div className="space-y-4 mt-4 text-sm bg-gray-50 p-4 rounded-md border border-gray-200">
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">ID:</span>
                        <span className="text-gray-900">{nation.id}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Tên dân tộc:</span>
                        <span className="text-gray-900 font-medium">{nation.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Ngày tạo:</span>
                        <span className="text-gray-900">
                            {new Date(nation.createAt).toLocaleDateString('vi-VN')}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Cập nhật gần nhất:</span>
                        <span className="text-gray-900">
                            {new Date(nation.updateAt).toLocaleDateString('vi-VN')}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Số lượng nhân viên:</span>
                        <span className="text-gray-900 font-medium">{nation.employees.length}</span>
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
    );
};

export default ViewDetailDanToc;