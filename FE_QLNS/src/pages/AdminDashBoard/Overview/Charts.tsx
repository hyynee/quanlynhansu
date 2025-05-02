import { Label } from '@/components/ui/label';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaMoneyBillWave, FaUserPlus, FaUserTimes } from 'react-icons/fa';
import { LuUsers } from "react-icons/lu";
type Props = {}

const Charts = (props: Props) => {
    // const { user } = useAuth();
    // if (!user) {
    //     return <div>Loading...</div>;
    // }
    return (
        <div>
            {/* nav */}
            <div className='flex justify-between items-center'>
                <div>Charts</div>
                <Menu as="div" className="relative inline-block text-left">
                    <div className='flex items-start'>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                            {/* {user?.email} */}
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                        </MenuButton>
                    </div>
                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <div className="py-1">
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                    Account settings
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                    Sign out
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Menu>
            </div>
            {/* thống kêk*/}
            <div className='rounded-xl shadow-lg p-4 mt-2'>
                <h2 className='text-2xl font-bold'>Thống kê nhân viên</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {/* Tổng số nhân viên */}
                    <div className="flex items-center gap-4 transition-all bg-[#67abe6] p-4 rounded-xl cursor-pointer hover:bg-[#7067e6]">
                        <LuUsers className="size-10 bg-white text-indigo-500 p-2 rounded-lg" />
                        <div className='text-white'>
                            <Label className="text-lg font-semibold">Tổng số nhân viên</Label>
                            <p className="text-2xl font-bold">10</p>
                        </div>
                    </div>

                    {/* Nhân viên mới */}
                    <div className="flex items-center gap-4 transition-all bg-yellow-300 p-4 rounded-xl cursor-pointer hover:bg-yellow-500">
                        <FaUserPlus className="size-10 bg-white text-red-500 p-2 rounded-lg" />
                        <div className='text-white'>
                            <Label className="text-lg font-semibold">Số nhân viên mới</Label>
                            <p className="text-2xl font-bold">0</p>
                        </div>
                    </div>

                    {/* Nhân viên nghỉ việc */}
                    <div className="flex items-center gap-4 transition-all bg-blue-400 p-4 rounded-xl cursor-pointer hover:bg-blue-500">
                        <FaUserTimes className="size-10 bg-white text-blue-500 p-2 rounded-lg" />
                        <div className='text-white'>
                            <Label className="text-lg font-semibold">Số nhân viên nghỉ việc</Label>
                            <p className="text-2xl font-bold">0</p>
                        </div>
                    </div>

                    {/* Tổng lương */}
                    <div className="flex items-center gap-4 transition-all bg-orange-400 p-4 rounded-xl cursor-pointer hover:bg-orange-500">
                        <FaMoneyBillWave className="size-10 bg-white text-yellow-500 p-2 rounded-lg" />
                        <div className='text-white'>
                            <Label className="text-lg font-semibold">Tổng lương</Label>
                            <p className="text-2xl font-bold">11.760.000 đ</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* */}
            <div className='flex gap-6 '>
                <div className='w-[50%] p-2 border rounded-lg shadow-lg mt-4'>
                    <div className='flex justify-between items-center '>
                        <div>Tổng quan dự án</div>
                        <div>
                            <Menu as="div" className="relative inline-block text-left">
                                <div className='flex items-start'>
                                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                        Last Year
                                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <div className="py-1">
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                            >
                                                2025
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                            >
                                                2024
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                            >
                                                2023
                                            </a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                    <div>
                        data
                    </div>
                </div>
                <div className='w-[50%] p-2 border rounded-lg shadow-lg mt-4'>
                    <div>Tổng quan dự án</div>
                </div>
            </div>
        </div >
    )
}

export default Charts