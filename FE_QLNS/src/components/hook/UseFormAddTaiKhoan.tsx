// UseFormAddTaiKhoan.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const formSchema = z.object({
    email: z.string().email({ message: "Email không hợp lệ" }),
    password: z.string().min(6, { message: "Mật khẩu ít nhất 6 ký tự" }),
    role: z.enum(["ADMIN", "GUEST"]),
    employeeId: z.string().min(1, { message: "Vui lòng nhập mã nhân viên tương ứng" }),
});

export type FormValues = z.infer<typeof formSchema>;

export const useFormAddTaiKhoan = () =>
    useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            role: "GUEST",
            employeeId: "",
        },
        mode: "onBlur",
    });
