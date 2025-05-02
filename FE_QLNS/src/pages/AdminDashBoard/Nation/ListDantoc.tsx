import EditNation from "@/components/modal/Edit/EditDantoc";
import { Nation } from "@/types/Nation";
import { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ViewDetailDanToc from "../../../components/modal/View/Admin/ViewDetailDanToc";

const fakeNations: Nation[] = [
    {
        id: "1",
        name: "Kinh",
        employees: [],
        createAt: new Date("2021-09-20"),
        updateAt: new Date("2022-03-15"),
    },
    {
        id: "2",
        name: "Chăm",
        employees: [],
        createAt: new Date("2020-06-10"),
        updateAt: new Date("2022-02-05"),
    },
];

const ListDantoc = () => {
    const [viewNation, setViewNation] = useState<Nation | null>(null);
    const [editNation, setEditNation] = useState<Nation | null>(null);

    const handleDeleteNation = (id: string) => {
        console.log(`Deleting nation with id: ${id}`);
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Danh sách dân tộc</h2>
                <input type="text" placeholder="Tìm kiếm..." className="border p-2 rounded-lg" />
            </div>

            <table className="table-auto w-full mt-8 border">
                <thead className="border bg-gray-100" style={{ height: '40px' }}>
                    <tr>
                        <th>STT</th>
                        <th>Tên dân tộc</th>
                        <th>Ngày tạo</th>
                        <th>Xem</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {fakeNations.map((nation, index) => (
                        <tr key={nation.id} className="border" style={{ height: '50px' }}>
                            <td>{index + 1}</td>
                            <td>{nation.name}</td>
                            <td>{new Date(nation.createAt).toLocaleDateString("vi-VN")}</td>
                            <td>
                                <button
                                    className="text-blue-500 hover:text-blue-700"
                                    onClick={() => setViewNation(nation)}
                                >
                                    <BsEyeFill className="size-6" />
                                </button>
                            </td>
                            <td>
                                <button
                                    className="text-yellow-500 hover:text-yellow-700"
                                    onClick={() => setEditNation(nation)}
                                >
                                    <FaEdit className="size-6" />
                                </button>
                            </td>
                            <td>
                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteNation(nation.id)}
                                >
                                    <MdDelete className="size-6" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {viewNation && (
                <ViewDetailDanToc
                    nation={viewNation}
                    open={!!viewNation}
                    onClose={() => setViewNation(null)}
                />
            )}
            {editNation && (
                <EditNation
                    nation={editNation}
                    open={!!editNation}
                    onClose={() => setEditNation(null)}
                />
            )}
        </div>
    );
};

export default ListDantoc;
