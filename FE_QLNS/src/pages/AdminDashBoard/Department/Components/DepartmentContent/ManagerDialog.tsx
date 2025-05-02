import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Department } from "@/types/Department";


type Props = {
    data: Department;
}


const ManagerDialog = ({ isOpen, setIsOpen, data }: { isOpen: boolean; setIsOpen: (open: boolean) => void; data: Department }) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-[90vw] max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] h-auto max-h-[90vh] rounded-lg p-4 sm:p-6 bg-white shadow-lg overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-800">
                        Thêm trưởng phòng cho {data.departmentName}
                    </DialogTitle>
                </DialogHeader>
                <div className="p-4">
                    <p className="text-gray-600">Chọn nhân viên để làm trưởng phòng </p>
                    {/* Thêm form hoặc danh sách nhân viên để chọn */}
                </div>
                <DialogFooter className="mt-4">
                    <Button
                        onClick={() => setIsOpen(false)}
                        className="bg-gray-500 text-white hover:bg-gray-600 transition-colors duration-200"
                    >
                        Đóng
                    </Button>
                    <Button
                        onClick={() => setIsOpen(false)}
                        className="bg-[#2c76f9] text-white hover:bg-[#2a71ec] transition-colors duration-200"
                    >
                        Lưu
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ManagerDialog;