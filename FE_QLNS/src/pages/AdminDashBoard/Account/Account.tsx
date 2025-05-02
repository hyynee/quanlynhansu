import AddTaikhoan from "@/components/modal/Add/AddTaikhoan"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ListAccount from "./ListAccount"

type Props = {}

const Account = (props: Props) => {
  return (
    <div className='p-4 border border-gray-200 rounded-md w-full'>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Quản lý tài khoản</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4">Thêm tài khoản mới</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thêm tài khoản</DialogTitle>
            </DialogHeader>
            {/* AddAccount component */}
            <AddTaikhoan />
          </DialogContent>
        </Dialog>
      </div>
      {/* List account */}
      <div className="border p-5 rounded-lg shadow-md mt-4 w-full">
        <ListAccount />
      </div>
    </div>
  )
}

export default Account