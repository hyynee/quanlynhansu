import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ListProject from './ListProject';

type Props = {}

const Project = (props: Props) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Quản lý dự án</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4">Thêm dự án mới</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">Thêm Dự Án</DialogTitle>
            </DialogHeader>
            {/* AddDự Án component */}
            {/* <AddDuAn /> */}
          </DialogContent>
        </Dialog>
      </div>
      <div className="border p-5 rounded-lg shadow-md mt-4">
        {/* List project */}
        <ListProject />
      </div>
    </div>
  );
}

export default Project