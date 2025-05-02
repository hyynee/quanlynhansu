import AddKindOfRewards from '@/components/modal/Add/AddKindOfRewards';
import EditKindofRewards from '@/components/modal/Edit/Rewards/EditKindofRewards';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { KindOfBonus } from '@/types/Bonus';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

type Props = {};

const ListKindOfRewards = (props: Props) => {
    const [selectedRow, setSelectedRow] = useState<KindOfBonus | null>(null);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const [bonusList, setBonusList] = useState<KindOfBonus[]>([
        {
            id: '1',
            name: 'Khen thưởng tháng 1',
            createAt: new Date(),
            updateAt: new Date(),
        },
        {
            id: '2',
            name: 'Khen thưởng xuất sắc',
            createAt: new Date(),
            updateAt: new Date(),
        },
    ]);

    // Lọc danh sách theo tên
    const filteredBonusList = bonusList.filter((bonus) =>
        bonus.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 space-y-4">
            {/* Top Section: Search + Add Button */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Input
                    placeholder="🔍 Tìm kiếm loại khen thưởng..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/2"
                />

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => setOpen(true)} className="w-full md:w-auto">
                            + Thêm loại khen thưởng
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Thêm loại khen thưởng</DialogTitle>
                        </DialogHeader>
                        <AddKindOfRewards onCancel={() => setOpen(false)} />
                    </DialogContent>
                </Dialog>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full border mt-4">
                    <thead className="bg-gray-100 text-sm">
                        <tr>
                            <th className="border px-2 py-2">STT</th>
                            <th className="border px-2 py-2">ID</th>
                            <th className="border px-2 py-2">Tên loại khen thưởng</th>
                            <th className="border px-2 py-2">Sửa</th>
                            <th className="border px-2 py-2">Xóa</th>
                        </tr>
                    </thead>
                    <tbody className="text-center text-sm">
                        {filteredBonusList.map((bonus, index) => (
                            <tr key={bonus.id} className="hover:bg-gray-50 transition">
                                <td className="border px-2 py-1">{index + 1}</td>
                                <td className="border px-2 py-1">{bonus.id}</td>
                                <td className="border px-2 py-1">{bonus.name}</td>
                                <td className="border px-2 py-1">
                                    <button
                                        className="text-yellow-500 hover:text-yellow-700"
                                        onClick={() => setSelectedRow(bonus)}
                                    >
                                        <FaEdit className="size-5" />
                                    </button>
                                </td>
                                <td className="border px-2 py-1">
                                    <button className="text-red-500 hover:text-red-700">
                                        <MdDelete className="size-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {filteredBonusList.length === 0 && (
                            <tr>
                                <td colSpan={5} className="py-4 text-gray-500 italic">
                                    Không tìm thấy kết quả phù hợp.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {selectedRow && (
                <EditKindofRewards
                    data={selectedRow}
                    open={!!selectedRow}
                    onClose={() => setSelectedRow(null)}
                />
            )}
        </div>
    );
};

export default ListKindOfRewards;
