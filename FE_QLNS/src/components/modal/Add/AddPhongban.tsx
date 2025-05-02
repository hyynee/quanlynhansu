import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

interface DepartmentForm {
    departmentName: string;
    description: string;
    phone: string;
}

const AddPhongban = () => {
    const form = useForm<DepartmentForm>({
        defaultValues: {
            departmentName: "",
            description: "",
            phone: "",
        },
    });

    const onSubmit = (data: DepartmentForm) => {
        console.log("Dữ liệu phòng ban:", data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Tên phòng ban */}
                <FormField
                    control={form.control}
                    name="departmentName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên Phòng Ban</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập tên phòng ban" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Mô tả */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mô Tả</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Nhập mô tả phòng ban" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Số điện thoại */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Số Điện Thoại</FormLabel>
                            <FormControl>
                                <Input type="tel" placeholder="Nhập số điện thoại" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Nút lưu */}
                <Button type="submit" className="w-full">
                    Lưu
                </Button>
            </form>
        </Form>
    );
};

export default AddPhongban;
