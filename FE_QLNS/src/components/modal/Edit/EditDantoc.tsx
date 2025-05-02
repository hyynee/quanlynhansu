import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Nation } from "@/types/Nation";
import { useForm } from "react-hook-form";

type Props = {
    nation: Nation;
    open: boolean;
    onClose: () => void;
}

const EditNation = ({ nation, open, onClose }: Props) => {
    const form = useForm<Nation>({
        defaultValues: {
            name: nation.name,
        },
    });
    const onSubmit = (data: Nation) => {
        console.log("Updated Nation:", data);
        onClose();
    };
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Chỉnh sửa dân tộc</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            {/* Tên Dân Tộc */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tên Dân Tộc</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nhập tên dân tộc" {...field} />
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

export default EditNation