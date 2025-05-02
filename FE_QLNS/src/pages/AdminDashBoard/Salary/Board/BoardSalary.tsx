import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

type Props = {}

const BoardSalary = (props: Props) => {
  const today = new Date().toISOString().split("T")[0];
  const form = useForm({
    defaultValues: {
      departmentId: "",
      employeeId: "",
      workday: "",
      allowance: '0',
      description: "",
    }
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Tính lương </h2>
      </div>
      <Form {...form}>
        <form className="space-y-4 border border-gray-200 rounded-md p-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="">
            <h2 className="text-xl underline mb-4">Tính lương nhân viên</h2>
            <FormField
              control={form.control}
              name="departmentId"
              render={({ field }) => (
                <FormItem>
                  <Label>Chọn phòng ban</Label>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        {field.value || "Chọn phòng ban"}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Nhân sự</SelectItem>
                        <SelectItem value="dark">Kế toán</SelectItem>
                        <SelectItem value="system">Kỹ sư</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <div className="">
            <FormField
              control={form.control}
              name="employeeId"
              render={({ field }) => (
                <FormItem>
                  <Label>Chọn nhân viên</Label>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        {field.value || "Chọn nhân viên"}
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">A</SelectItem>
                        <SelectItem value="dark">B</SelectItem>
                        <SelectItem value="system">C</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="workday"
              render={() => (
                <FormItem>
                  <Label className="text-sm font-medium text-gray-700">Số ngày công</Label>
                  <FormControl>
                    <Input type="number" className="border border-gray-300 rounded-md p-2 w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="">
            <FormField
              control={form.control}
              name="allowance"
              render={() => (
                <FormItem>
                  <Label className="text-sm font-medium text-gray-700">Phụ cấp</Label>
                  <FormControl>
                    <Input type="number" className="border border-gray-300 rounded-md p-2 w-full" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium ">
              Ngày chấm
            </h3>

            <input
              className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300"
              type="date"
              value={today}
              readOnly
            />
          </div>
          {/*description*/}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Mô tả*</FormLabel>
                <FormControl>
                  <Textarea
                    className="border w-full rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-300"
                    rows={10}
                    placeholder="..."

                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Save */}
          <Button
            className="flex w-full items-center gap-2 bg-[#2c76f9] hover:bg-[#2a71ec] hover:ring-2"
            type="submit"
          >
            Chấm công
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default BoardSalary