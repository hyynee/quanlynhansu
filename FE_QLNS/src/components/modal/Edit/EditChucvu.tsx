import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Position } from '@/types/Position';
import { useForm } from 'react-hook-form';

type Props = {
    position: Position;
    open: boolean;
    onClose: () => void;
}

const EditChucvu = ({ position, open, onClose }: Props) => {
    const form = useForm<Position>({
        defaultValues: {
            positionName: position.positionName,
            coefficient: position.coefficient,
        }
    });
    const onSubmit = (data: Position) => {
        console.log("Chức vụ đã được chỉnh sửa:", data);
    };
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="fixed top-1/2 left-1/2 w-full max-w-md p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg">
                <DialogTitle className="text-lg font-semibold">Chỉnh sửa chức vụ</DialogTitle>
                <DialogDescription className="mt-2 text-sm text-gray-600">
                    Bạn có chắc chắn muốn chỉnh sửa chức vụ này không?
                </DialogDescription>
                <div className="mt-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* Tên Chức Vụ */}
                            <FormField
                                control={form.control}
                                name="positionName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tên Chức Vụ</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nhập tên chức vụ" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Hệ số */}
                            <FormField
                                control={form.control}
                                name="coefficient"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Hệ số</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Nhập hệ số" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="mt-4 flex justify-end">
                                <Button
                                    onClick={onClose}
                                    className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded hover:bg-gray-600 mr-2"
                                >
                                    Hủy
                                </Button>
                                <Button
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                                    type='submit'
                                >
                                    Lưu
                                </Button>
                            </div>

                        </form>
                    </Form>
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default EditChucvu