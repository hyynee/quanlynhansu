import AddPhongban from '@/components/modal/Add/AddPhongban'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import ListPhongBan from './ListPhongBan'

type Props = {}

const Phongban = (props: Props) => {
  return (
    <div>
      <div className='flex justify-between items-center p-2'>
        <h1 className='text-2xl font-bold'>Phòng ban</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Thêm phòng ban mới</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thêm phòng ban</DialogTitle>
            </DialogHeader>
            {/* Addphòngban component */}
            <AddPhongban />
          </DialogContent>
        </Dialog>

      </div>
      {/* List phong ban */}
      <div className="border p-5 rounded-lg shadow-md mt-4">
        {/* List Phongban */}
        <ListPhongBan />
      </div>
    </div>
  )
}

export default Phongban