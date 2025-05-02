import EditAccount from '@/components/modal/Edit/EditAccount';
import { ROLE, User } from '@/types/User';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

type Props = {}




const ListAccount = (props: Props) => {
    const accounts: User[] = [
        {
            id: "u001",
            email: "admin1@example.com",
            password: "admin123",
            role: ROLE.ADMIN,
            createdAt: new Date("2024-01-01"),
            updatedAt: new Date("2024-02-01"),
        },
        {
            id: "u002",
            email: "guest1@example.com",
            password: "guest123",
            role: ROLE.EMPLOYEE,
            createdAt: new Date("2024-01-15"),
            updatedAt: new Date("2024-03-01"),
        }
    ];
    const [selectedAccount, setSelectedAccount] = useState<User | null>(null);
    const handleDelete = (id: string) => {
        console.log("Xóa tài khoản với ID:", id);
    };
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center'>
                <h2 className="text-2xl font-bold">Danh sách tài khoản</h2>
                <input type="text" placeholder="Tìm kiếm..." className="border p-2 rounded-lg" />
            </div>

            <table className='table-auto w-full mt-8 border'>
                <thead className='border bg-gray-100' style={{ height: '40px' }}>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Mật khẩu</th>
                        <th>Vai trò</th>
                        <th>Ngày tạo</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {accounts.map((account, index) => (
                        <tr key={account.id} className='border' style={{ height: '50px' }}>
                            <td>{index + 1}</td>
                            <td>{account.id}</td>
                            <td>{account.email}</td>
                            <td>{account.password}</td>
                            <td>{account.role}</td>
                            <td>{new Date(account.createdAt!).toLocaleDateString("vi-VN")}</td>
                            <td>
                                <button
                                    className="text-yellow-500 hover:text-yellow-700"
                                    onClick={() => { setSelectedAccount(account); }}
                                >
                                    <FaEdit className="size-6" />
                                </button>
                            </td>
                            <td>
                                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(account.id!)}>
                                    <MdDelete className="size-6" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedAccount && (
                <EditAccount
                    account={selectedAccount}
                    open={!!selectedAccount}
                    onClose={() => setSelectedAccount(null)}
                />
            )}
        </div>
    )
}

export default ListAccount