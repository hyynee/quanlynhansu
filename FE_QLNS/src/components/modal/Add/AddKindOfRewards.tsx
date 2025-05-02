import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { KindOfBonus } from '@/types/Bonus';
import { useForm } from 'react-hook-form';


type Props = {
    onCancel: () => void;
}


const AddKindOfRewards = ({ onCancel }: Props) => {
    const form = useForm<KindOfBonus>({
        defaultValues: {
            id: '',
            name: '',
            createAt: new Date(),
            updateAt: new Date(),
        },
    });

    const onSubmit = (data: KindOfBonus) => {
        console.log("Dữ liệu :", data);
    };


    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Tên Loại Khen Thưởng */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên Loại Khen Thưởng</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập tên loại khen thưởng" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Buttons */}
                <div className="flex justify-end space-x-2">
                    <Button
                        type="button"
                        variant="outline"
                        className="px-4 py-2"
                        onClick={onCancel}
                    >
                        Hủy
                    </Button>
                    <Button type="submit" className="px-4 py-2">
                        Thêm
                    </Button>
                </div>
            </form>
        </Form>

    );
};

export default AddKindOfRewards;