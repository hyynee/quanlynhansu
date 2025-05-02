import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Degree } from "@/types/Degree"; // Import type Degree
import { useForm } from "react-hook-form";

const AddBangCap = () => {
    const form = useForm<Degree>({
        defaultValues: {
            id: "",
            degreeName: "",
            employees: [],
        },
    });

    const onSubmit = (data: Degree) => {
        console.log("Dữ liệu bằng cấp:", data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    {/* Tên Bằng Cấp */}
                    <FormField
                        control={form.control}
                        name="degreeName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên Bằng Cấp</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập tên bằng cấp" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Nút lưu */}
                    <Button type="submit" className="w-full">
                        Lưu
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default AddBangCap;