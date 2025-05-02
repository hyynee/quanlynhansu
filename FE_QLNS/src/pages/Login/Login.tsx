"use client";
import { useLogin, useLoginForm } from "@/components/hook/UseFormLogin";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {};

const Login = (props: Props) => {
  const form = useLoginForm();
  const { handleLogin, loading, error } = useLogin();

  return (
    <div className="p-4">
      <div className="w-full md:w-[35rem] mx-auto border p-10 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Đăng Nhập</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    <span className="font-medium text-muted-foreground">
                      Nhập email của bạn
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormDescription>
                    <span className="font-medium text-muted-foreground">
                      Nhập mật khẩu của bạn
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-blue-700 text-white hover:bg-blue-500 font-bold w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;