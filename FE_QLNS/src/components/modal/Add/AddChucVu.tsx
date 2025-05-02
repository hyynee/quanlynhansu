import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Position } from "@/types/Position";
import { useForm } from "react-hook-form";

type Props = {}

const AddChucVu = (props: Props) => {
    const form = useForm<Position>({
        defaultValues: {
            positionName: "",
            coefficient: 0,
        },
    });
    const onSubmit = (data: Position) => {
        console.log("Dữ liệu chức vụ:", data);
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
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
                                <FormLabel>Hệ Số</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập hệ số" type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Nút lưu */}
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
                        Lưu
                    </button>
                </div>
            </form>
        </Form>
    )
}

export default AddChucVu