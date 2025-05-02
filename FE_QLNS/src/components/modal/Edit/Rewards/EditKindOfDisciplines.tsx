import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { KindOfDiscipline } from "@/types/Discipline";
import { useEffect, useState } from "react";

type Props = {
    data: KindOfDiscipline;
    open: boolean;
    onClose: () => void;
};

const EditKindOfDisciplines = ({ data, open, onClose }: Props) => {
    const [name, setName] = useState(data.name);

    useEffect(() => {
        if (open) {
            setName(data.name);
        }
    }, [data, open]);

    const handleSave = () => {
        const updatedData: KindOfDiscipline = {
            ...data,
            name,
            updateAt: new Date(),
        };

        console.log("Đã lưu:", updatedData);
        onClose();
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa loại kỷ luật</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Tên loại kỷ luật */}
                    <label className="flex flex-col text-left text-sm font-medium">
                        Tên loại kỷ luật
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nhập tên loại kỷ luật"
                        />
                    </label>

                    {/* Ngày tạo */}
                    <label className="flex flex-col text-left text-sm font-medium">
                        Ngày tạo
                        <Input
                            value={new Date(data.createAt).toLocaleString()}
                            disabled
                        />
                    </label>

                    {/* Ngày cập nhật gần nhất */}
                    <label className="flex flex-col text-left text-sm font-medium">
                        Ngày cập nhật gần nhất
                        <Input
                            value={new Date(data.updateAt).toLocaleString()}
                            disabled
                        />
                    </label>
                </div>

                <DialogFooter className="mt-4">
                    <Button variant="outline" onClick={onClose}>
                        Hủy
                    </Button>
                    <Button onClick={handleSave}>Lưu</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditKindOfDisciplines;
