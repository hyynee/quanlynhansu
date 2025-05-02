import AddKindOfDisciplines from '@/components/modal/Add/AddKindOfDisciplines';
import EditKindOfDisciplines from '@/components/modal/Edit/Rewards/EditKindOfDisciplines';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { KindOfDiscipline } from '@/types/Discipline';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

type Props = {};

const ListKindOfDisciplines = (props: Props) => {
    const [selectedRow, setSelectedRow] = useState<KindOfDiscipline | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);

    const [disciplineList, setDisciplineList] = useState<KindOfDiscipline[]>([
        {
            id: '1',
            name: 'Kỷ luật hành vi tháng 1',
            createAt: new Date(),
            updateAt: new Date(),
        },
        {
            id: '2',
            name: 'Kỷ luật vi phạm nội quy',
            createAt: new Date(),
            updateAt: new Date(),
        },
    ]);

    const filteredList = disciplineList.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 space-y-4">
            {/* Search & Add */}
            <div className="flex justify-between items-center flex-col md:flex-row gap-4">
                <Input
                    placeholder="🔍 Tìm kiếm loại kỷ luật..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/2"
                />

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => setOpen(true)}>Thêm loại kỷ luật</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Thêm loại kỷ luật</DialogTitle>
                        </DialogHeader>
                        <AddKindOfDisciplines onCancel={() => setOpen(false)} />
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
                            <th className="border px-2 py-2">Tên loại kỷ luật</th>
                            <th className="border px-2 py-2">Sửa</th>
                            <th className="border px-2 py-2">Xóa</th>
                        </tr>
                    </thead>
                    <tbody className="text-center text-sm">
                        {filteredList.map((item, index) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition">
                                <td className="border px-2 py-1">{index + 1}</td>
                                <td className="border px-2 py-1">{item.id}</td>
                                <td className="border px-2 py-1">{item.name}</td>
                                <td className="border px-2 py-1">
                                    <button
                                        className="text-yellow-500 hover:text-yellow-700"
                                        onClick={() => setSelectedRow(item)}
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
                        {filteredList.length === 0 && (
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
                <EditKindOfDisciplines
                    data={selectedRow}
                    open={!!selectedRow}
                    onClose={() => setSelectedRow(null)}
                />
            )}
        </div>
    );
};

export default ListKindOfDisciplines;
