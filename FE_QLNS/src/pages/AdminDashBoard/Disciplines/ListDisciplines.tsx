import { Discipline } from '@/types/Discipline'; // Assuming the Discipline type is in this file

type Props = {};

const mockDisciplineList: Discipline[] = [
    {
        id: '1',
        content: 'Vi phạm nội quy tháng 1',
        fine: 1000000,
        kindOfDiscipline: [
            {
                id: 'kod1',
                name: 'Phạt hành vi',
                createAt: new Date(),
                updateAt: new Date(),
            },
        ],
        employees: ['Nguyễn Văn A', 'Trần Thị B'],
        createAt: new Date(),
        updateAt: new Date(),
    },
];

const ListDisciplines = (props: Props) => {
    return (
        <table className="border border-gray-300 w-full text-left mt-4">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">STT</th>
                    <th className="border px-4 py-2">Nội dung</th>
                    <th className="border px-4 py-2">Số tiền phạt</th>
                    <th className="border px-4 py-2">Loại kỷ luật</th>
                    <th className="border px-4 py-2">Nhân viên bị kỷ luật</th>
                </tr>
            </thead>
            <tbody>
                {mockDisciplineList.map((discipline, index) => (
                    <tr key={discipline.id}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{discipline.content}</td>
                        <td className="border px-4 py-2">
                            {discipline.fine.toLocaleString('vi-VN')} ₫
                        </td>
                        <td className="border px-4 py-2">
                            <ul className="list-disc list-inside">
                                {discipline.kindOfDiscipline.map((k) => (
                                    <li key={k.id}>{k.name}</li>
                                ))}
                            </ul>
                        </td>
                        <td className="border px-4 py-2">
                            <ul className="list-disc list-inside">
                                {discipline.employees.map((emp, idx) => (
                                    <li key={idx}>{emp}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListDisciplines;