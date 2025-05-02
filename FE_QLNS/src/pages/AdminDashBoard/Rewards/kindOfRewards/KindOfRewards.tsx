import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import ListKindOfRewards from "./ListKindOfRewards";

type Props = {}

const KindOfRewards = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div className="w-full border border-gray-300 rounded-lg p-6 mx-auto space-y-4">
            <h2 className="text-2xl font-bold ">Danh sách loại khen thưởng</h2>
            <ListKindOfRewards />
            <Button
                aria-label="Quay lại"
                className='bg-blue-600 hover:bg-blue-700 text-white p-5 rounded flex items-center transition-colors'
                onClick={() => navigate('/admin/rewards')}
            >
                Quay lại
            </Button>
        </div>
    )
}

export default KindOfRewards;                                        