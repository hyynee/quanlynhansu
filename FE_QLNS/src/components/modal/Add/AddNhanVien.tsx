import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import UpLoadImage from '@/pages/AdminDashBoard/NhanVien/UpLoadImage';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const nations = [
  { id: 'nation1', name: 'Kinh' },
  { id: 'nation2', name: 'Tày' },
  { id: 'nation3', name: 'Thái' },
];
const degrees = [
  { id: 'degree1', name: 'Cử nhân' },
  { id: 'degree2', name: 'Thạc sĩ' },
];
const departments = [
  { id: 'dep1', name: 'Phòng IT' },
  { id: 'dep2', name: 'Phòng HR' },
];
const positions = [
  { id: 'pos1', name: 'Nhân viên' },
  { id: 'pos2', name: 'Quản lý' },
];
const employeeTypes = [
  { id: 'type1', name: 'Chính thức' },
  { id: 'type2', name: 'Thử việc' },
];

// Định nghĩa schema validation với zod
const employeeSchema = z.object({
  firstName: z.string().min(1, 'Họ là bắt buộc'),
  lastName: z.string().min(1, 'Tên là bắt buộc'),
  email: z.string().email('Email không hợp lệ'),
  phone: z.string().min(10, 'Số điện thoại phải có ít nhất 10 số'),
  address: z.string().min(1, 'Địa chỉ là bắt buộc'),
  nationality: z.string().min(1, 'Quốc tịch là bắt buộc'),
  identificationCode: z.string().min(1, 'Số CCCD là bắt buộc'),
  issuedBy: z.string().min(1, 'Nơi cấp là bắt buộc'),
  dateRange: z.date({ required_error: 'Ngày cấp là bắt buộc' }),
  dateOfBirth: z.date({ required_error: 'Ngày sinh là bắt buộc' }),
  sex: z.enum(['nam', 'nu', 'khac'], { required_error: 'Giới tính là bắt buộc' }),
  positionId: z.string().min(1, 'Chọn ít nhất một chức vụ'),
  typeOfEmployeeId: z.string().min(1, 'Loại nhân viên là bắt buộc'),
  imageUrl: z.string().min(1, 'Ảnh là bắt buộc'),
  birthPlace: z.string().optional(),
  religion: z.string().optional(),
  specialize: z.string().optional(),
  experience: z.string().optional(),
  departmentId: z.string().optional(),
  nationId: z.string().optional(),
  degree: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE']).default('ACTIVE'),
});

// Suy ra kiểu từ schema zod
type EmployeeForm = z.infer<typeof employeeSchema>;

const AddNhanVien = () => {
  const form = useForm<EmployeeForm>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      imageUrl: '',
      firstName: '',
      lastName: '',
      sex: 'nam',
      email: '',
      dateOfBirth: new Date(),
      birthPlace: '',
      phone: '',
      address: '',
      nationality: '',
      identificationCode: '',
      issuedBy: '',
      dateRange: new Date(),
      religion: '',
      specialize: '',
      experience: '',
      positionId: '',
      departmentId: '',
      nationId: '',
      degree: '',
      typeOfEmployeeId: '',
      status: 'ACTIVE',
    },
  });

  const onSubmit = (data: EmployeeForm) => {
    console.log('Dữ liệu nhân viên:', data);
  };

  return (
    <div className="w-full mx-auto border p-4 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-semibold">Thêm nhân viên mới</h2>
        <span className="text-sm">
          Những ô có dấu <span className="text-red-500">*</span> là bắt buộc
        </span>
      </div>

      <div className="min-h-screen overflow-y-auto p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Avatar */}
              <div className="col-span-2 flex justify-center">
                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-center">
                        Ảnh <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <UpLoadImage value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Họ */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Họ <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập họ" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Tên */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Tên <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Giới tính */}
              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Giới tính <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn giới tính" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nam">Nam</SelectItem>
                          <SelectItem value="nu">Nữ</SelectItem>
                          <SelectItem value="khac">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Ngày sinh */}
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Ngày sinh <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <input
                        type="date"
                        className="px-3 h-10 w-full rounded-md border"
                        value={field.value.toISOString().split('T')[0]}
                        onChange={(event) => field.onChange(new Date(event.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Nơi sinh */}
              <FormField
                control={form.control}
                name="birthPlace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nơi sinh</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập nơi sinh" type="text" {...field} />
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
                    <FormLabel>
                      Số điện thoại <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập số điện thoại" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Địa chỉ liên hệ */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Địa chỉ liên hệ <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập địa chỉ" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Quốc tịch */}
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Quốc tịch <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập quốc tịch" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Dân tộc */}
              <FormField
                control={form.control}
                name="nationId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dân tộc</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn dân tộc" />
                        </SelectTrigger>
                        <SelectContent>
                          {nations.map((nation) => (
                            <SelectItem key={nation.id} value={nation.id}>
                              {nation.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Số CCCD */}
              <FormField
                control={form.control}
                name="identificationCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Số CCCD <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập số CCCD" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Nơi cấp */}
              <FormField
                control={form.control}
                name="issuedBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nơi cấp <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập nơi cấp" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Ngày cấp */}
              <FormField
                control={form.control}
                name="dateRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Ngày cấp <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <input
                        type="date"
                        className="px-3 h-10 w-full rounded-md border"
                        value={field.value.toISOString().split('T')[0]}
                        onChange={(event) => field.onChange(new Date(event.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Tôn giáo */}
              <FormField
                control={form.control}
                name="religion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tôn giáo</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tôn giáo" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Chuyên môn */}
              <FormField
                control={form.control}
                name="specialize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chuyên môn</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập chuyên môn" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Kinh nghiệm */}
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kinh nghiệm</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập kinh nghiệm" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Chức vụ */}
              <FormField
                control={form.control}
                name="positionId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Chức vụ <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn chức vụ" />
                        </SelectTrigger>
                        <SelectContent>
                          {positions.map((position) => (
                            <SelectItem key={position.id} value={position.id}>
                              {position.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Phòng ban */}
              <FormField
                control={form.control}
                name="departmentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phòng ban</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn phòng ban" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.id} value={dept.id}>
                              {dept.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Loại nhân viên */}
              <FormField
                control={form.control}
                name="typeOfEmployeeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Loại nhân viên <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn loại nhân viên" />
                        </SelectTrigger>
                        <SelectContent>
                          {employeeTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Bằng cấp  */}
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bằng cấp</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Chọn bằng cấp" />
                        </SelectTrigger>
                        <SelectContent>
                          {degrees.map((degree) => (
                            <SelectItem key={degree.id} value={degree.id}>
                              {degree.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-6 w-full"
            >
              Thêm nhân viên
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddNhanVien;