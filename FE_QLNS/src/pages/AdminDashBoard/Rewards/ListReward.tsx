import { Bonus } from "@/types/Bonus"

type Props = {}

const mockBonusList: Bonus[] = [
    {
        id: "1",
        content: "Thưởng tháng 1",
        prizeMoney: 2000000,
        employees: [
            {
                id: "emp1",
                firstName: "Nguyễn",
                lastName: "Văn A",
                email: "a@gmail.com",
                dateOfBirth: new Date("1995-05-12"),
                identificationCode: "123456789",
                dateRange: new Date("2010-10-10"),
                issuedBy: "Cục CSGT",
                nationality: "Việt Nam",
                phone: "0123456789",
                address: "Hà Nội",
                imageUrl: "",
                sex: "nam",
                positionId: "pos1",
                typeOfEmployeeId: "type1",
                createAt: new Date(),
                updateAt: new Date(),
            },
        ],
        kindOfBonus: [
            {
                id: "kob1",
                name: "Thưởng tháng",
                createAt: new Date(),
                updateAt: new Date(),
            },
        ],
        createAt: new Date(),
        updateAt: new Date(),
    },
]

const ListReward = (props: Props) => {
    return (
        <table className="border border-gray-300 w-full text-left mt-4">
            <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">STT</th>
                    <th className="border px-4 py-2">Nội dung</th>
                    <th className="border px-4 py-2">Số tiền thưởng</th>
                    <th className="border px-4 py-2">Loại thưởng</th>
                    <th className="border px-4 py-2">Nhân viên được thưởng</th>
                </tr>
            </thead>
            <tbody>
                {mockBonusList.map((bonus, index) => (
                    <tr key={bonus.id}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{bonus.content}</td>
                        <td className="border px-4 py-2">
                            {bonus.prizeMoney.toLocaleString("vi-VN")} ₫
                        </td>
                        <td className="border px-4 py-2">
                            <ul className="list-disc list-inside">
                                {bonus.kindOfBonus.map((k) => (
                                    <li key={k.id}>{k.name}</li>
                                ))}
                            </ul>
                        </td>
                        <td className="border px-4 py-2">
                            <ul className="list-disc list-inside">
                                {bonus.employees.map((emp) => (
                                    <li key={emp.id}>{emp.lastName} {emp.firstName}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ListReward
