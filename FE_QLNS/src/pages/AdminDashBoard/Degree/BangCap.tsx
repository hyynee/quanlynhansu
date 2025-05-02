import AddBangCap from "@/components/modal/Add/AddBangcap";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ListBangcap from "./ListBangcap";

type Props = {}

const BangCap = (props: Props) => {
    return (
        <div className="p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Quản lý Bằng Cấp</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="mt-4">Thêm bằng cấp mới</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Thêm Bằng Cấp</DialogTitle>
                        </DialogHeader>
                        {/* AddBangCap component */}
                        <AddBangCap />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="border p-5 rounded-lg shadow-md mt-4">
                {/* List bằng cấp */}
                <ListBangcap />
            </div>
        </div>
    );
}

export default BangCap