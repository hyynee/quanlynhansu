import EditChucvu from "@/components/modal/Edit/EditChucvu";
import ViewDetailChucVu from "@/components/modal/View/Admin/ViewDetailChucVu";
import { Position } from "@/types/Position";
import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


type Props = {
    positions?: Position[];
};
const ListChucVu = () => {
    const positions: Position[] = [
        {
            id: "pos-1",
            positionName: "Trưởng phòng",
            coefficient: 2.5,
            employees: [],
            createAt: new Date("2023-01-01"),
            updateAt: new Date("2023-01-10"),
        },
        {
            id: "pos-2",
            positionName: "Phó phòng",
            coefficient: 2.0,
            employees: [],
            createAt: new Date("2023-02-01"),
            updateAt: new Date("2023-02-15"),
        },
        {
            id: "pos-3",
            positionName: "Nhân viên",
            coefficient: 1.5,
            employees: [],
            createAt: new Date("2023-03-01"),
            updateAt: new Date("2023-03-20"),
        },
    ];
    const [viewPosition, setViewPosition] = useState<Position | null>(null);
    const [editPosition, setEditPosition] = useState<Position | null>(null);
    const handleDeletePosition = (id: string) => {
        console.log(`Xóa chức vụ với id: ${id}`);
    }
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Danh sách chức vụ</h2>
                <div className="flex items-end space-x-4">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="border p-2 rounded-lg"
                    />
                    <h2>Tên chức vụ</h2>
                </div>
            </div>

            <table className="table-auto w-full mt-8">
                <thead className="border" style={{ height: "40px" }}>
                    <tr>
                        <th>STT</th>
                        <th>Mã</th>
                        <th>Tên chức vụ</th>
                        <th>Ngày tạo</th>
                        <th>Ngày sửa</th>
                        <th>Xem</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {positions.map((position, index) => (
                        <tr key={position.id} className="border" style={{ height: "50px" }}>
                            <td>{index + 1}</td>
                            <td>{position.id}</td>
                            <td>{position.positionName}</td>
                            <td>{new Date(position.createAt).toLocaleDateString()}</td>
                            <td>{new Date(position.updateAt).toLocaleDateString()}</td>
                            <td className="p-2 border">
                                <button
                                    className="text-blue-500 hover:text-blue-700"
                                    onClick={() => setViewPosition(position)}
                                >
                                    <BsEyeFill className="size-6" />
                                </button>
                            </td>
                            <td className="p-2 border">
                                <button
                                    className="text-yellow-500 hover:text-yellow-700"
                                    onClick={() => setEditPosition(position)}
                                >
                                    <FaEdit className="size-6" />
                                </button>
                            </td>
                            <td className="p-2 border">
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDeletePosition(position.id)}>
                                    <MdDelete className="size-6" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {viewPosition && (
                <ViewDetailChucVu
                    position={viewPosition}
                    open={!!viewPosition}
                    onClose={() => setViewPosition(null)}
                />
            )}
            {editPosition && (
                <EditChucvu
                    position={editPosition}
                    open={!!editPosition}
                    onClose={() => setEditPosition(null)}
                />
            )}
        </div>
    );
};

export default ListChucVu;
