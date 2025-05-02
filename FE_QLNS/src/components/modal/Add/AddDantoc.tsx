import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Nation } from "@/types/Nation";
import { useForm } from "react-hook-form";

const AddDantoc = () => {
    const form = useForm<Nation>({
        defaultValues: {
            id: "",
            name: "",
            employees: [],
        },
    });
    const onSubmit = (data: Nation) => {
        console.log("Dữ liệu dân tộc:", data);
    };
    return (
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
                    {/* Nút lưu */}
                    <Button type="submit" className="w-full">Lưu</Button>
                </div>
            </form>
        </Form >
    );
}

export default AddDantoc;
