import AddChucVu from "@/components/modal/Add/AddChucVu"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ListChucVu from "./ListChucVu"

type Props = {}

const Position = (props: Props) => {
    return (
        <div className="p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Quản lý chức vụ</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="mt-4">Thêm chức vụ mới</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-center">Thêm Chức Vụ</DialogTitle>
                        </DialogHeader>
                        {/* AddChucVu component */}
                        <AddChucVu />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="border p-5 rounded-lg shadow-md mt-4">
                {/* List ChucVu */}
                <ListChucVu />
            </div>
        </div>
    )
}

export default Position