import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AddDantoc from "../../../components/modal/Add/AddDantoc";
import ListDantoc from "./ListDantoc";

const Dantoc = () => {
    return (
        <div className="p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Quản lý Dân Tộc</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="mt-4">Thêm dân tộc mới</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Thêm Dân Tộc</DialogTitle>
                        </DialogHeader>
                        {/* AddDantoc component */}
                        <AddDantoc />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="border p-5 rounded-lg shadow-md mt-4">
                {/* List dantoc */}
                <ListDantoc />
            </div>
        </div>
    );
}

export default Dantoc;
