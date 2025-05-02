import EditBangCap from "@/components/modal/Edit/EditBangCap";
import ViewDetailBangCap from "@/components/modal/View/Admin/ViewDetailBangCap";
import { Degree } from "@/types/Degree";
import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type Props = {};

const ListBangcap = (props: Props) => {
    const degrees: Degree[] = [
        {
            id: "1",
            degreeName: "Đại học",
            employees: [],
            createAt: new Date("2021-09-20"),
            updateAt: new Date("2021-09-20"),
        },
        {
            id: "2",
            degreeName: "Cao đẳng",
            employees: [],
            createAt: new Date("2021-09-20"),
            updateAt: new Date("2021-09-20"),
        },
    ];
    const [viewDegree, setViewDegree] = useState<Degree | null>(null);
    const [editDegree, setEditDegree] = useState<Degree | null>(null);

    const handleDeleteDegree = (degreeId: string) => {
        console.log("Delete degree with ID:", degreeId);
    };
    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h2>Danh sách bằng cấp</h2>
                <div className="flex items-end space-x-4">
                    <h2>Tìm kiếm</h2>
                    <h2>Tên bằng cấp</h2>
                </div>
            </div>
            <table className="table-auto w-full mt-8">
                <thead className="border" style={{ height: "40px" }}>
                    <tr>
                        <th>STT</th>
                        <th>Tên bằng cấp</th>
                        <th>Ngày tạo</th>
                        <th>Xem</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {degrees.map((degree, index) => (
                        <tr key={degree.id} className="border" style={{ height: "50px" }}>
                            <td>{index + 1}</td>
                            <td>{degree.degreeName}</td>
                            <td>{degree.createAt.toISOString().split("T")[0]}</td>
                            <td className="p-2 border">
                                <button className="text-blue-500 hover:text-blue-700"
                                    onClick={() => setViewDegree(degree)}
                                >
                                    <BsEyeFill className="size-6" />
                                </button>
                            </td>
                            <td className="p-2 border">
                                <button
                                    className="text-yellow-500 hover:text-yellow-700"
                                    onClick={() => setEditDegree(degree)}
                                >
                                    <FaEdit className="size-6" />
                                </button>
                            </td>
                            <td className="p-2 border">
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteDegree(degree.id)}
                                >
                                    <MdDelete className="size-6" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {viewDegree && (
                <ViewDetailBangCap
                    degree={viewDegree}
                    open={!!viewDegree}
                    onClose={() => setViewDegree(null)}
                />
            )}
            {editDegree && (
                <EditBangCap
                    degree={editDegree}
                    open={!!editDegree}
                    onClose={() => setEditDegree(null)}
                />
            )}
        </div>
    );
};

export default ListBangcap;