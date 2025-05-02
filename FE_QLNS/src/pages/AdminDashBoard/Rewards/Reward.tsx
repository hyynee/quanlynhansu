import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import ListReward from "./ListReward";

type Props = {};

function Reward({ }: Props) {
    const navigate = useNavigate();
    return (
        <div className='border-2 border-gray-300 rounded-lg p-6 w-full mx-auto space-y-4'>
            <h1 className='text-lg font-semibold'>Thao tác chức năng</h1>
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                <Button
                    aria-label="Thêm loại khen thưởng"
                    className='bg-blue-600 hover:bg-blue-700 text-white p-5 rounded flex items-center transition-colors'
                    onClick={() => navigate('/admin/rewards/kindOfrewards')}
                >
                    <IoIosAddCircleOutline className='mr-2 h-5 w-5' />
                    Loại khen thưởng
                </Button>
                <Button className='bg-green-600 hover:bg-green-700 text-white p-5 rounded transition-colors'
                    onClick={() => navigate('/admin/rewards/employees')}
                >
                    <IoPersonAddSharp className='mr-2 h-5 w-5' />
                    Khen thưởng nhân viên
                </Button>
            </div>
            {/* Danh sách nhân viên đã khen thưởng */}
            <div className="mt-6">
                <h2 className='text-base font-semibold'>Danh sách nhân viên đã khen thưởng</h2>
                <ListReward />
            </div>
        </div>
    );
}

export default Reward;