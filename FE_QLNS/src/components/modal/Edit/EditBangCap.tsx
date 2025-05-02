import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Degree } from "@/types/Degree";
import { useForm } from "react-hook-form";

type Props = {
    degree: Degree;
    open: boolean;
    onClose: () => void;
}

const EditBangCap = ({ degree, open, onClose }: Props) => {
    const form = useForm<Degree>({
        defaultValues: {
            degreeName: degree.degreeName,
        },
    });
    const onSubmit = async (data: Degree) => {
        console.log("UpDate data", data);
        onClose();
    }
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">Chỉnh sửa bằng cấp</DialogTitle>
                    <DialogDescription className="text-center">
                        Bạn có chắc chắn muốn chỉnh sửa bằng cấp này không?
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            {/* Tên Dân Tộc */}
                            <FormField
                                control={form.control}
                                name="degreeName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tên Dân Tộc</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nhập tên bằng cấp" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end mt-4">
                                <Button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={onClose}
                                >
                                    Hủy
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Lưu
                                </Button>
                            </div>
                        </div>
                    </form>

                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default EditBangCap