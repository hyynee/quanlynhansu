import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Bonus, KindOfBonus } from "@/types/Bonus";
import { Employee } from "@/types/Employee";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const dummyKindOfBonuses: KindOfBonus[] = [
    { id: "1", name: "Tháng 1", createAt: new Date(), updateAt: new Date() },
    { id: "2", name: "Tháng 2", createAt: new Date(), updateAt: new Date() },
];

const dummyEmployees: Employee[] = [
    {
        id: "1",
        firstName: "Nguyễn",
        lastName: "Văn",
        email: "a@example.com",
        dateOfBirth: new Date("1990-01-01"),
        identificationCode: "ABC123",
        dateRange: new Date("2025-01-01"),
        issuedBy: "Ministry of Labor",
        nationality: "Vietnamese",
        phone: "0901234567",
        address: "123 Example Street, Hanoi",
        imageUrl: "https://example.com/image1.jpg",
        sex: "nam",
        positionId: "pos1",
        typeOfEmployeeId: "type1",
        status: "ACTIVE",
    },
    {
        id: "2",
        firstName: "Nguyễn",
        lastName: "Văn",
        email: "b@example.com",
        dateOfBirth: new Date("1992-02-02"),
        identificationCode: "DEF456",
        dateRange: new Date("2025-01-01"),
        issuedBy: "Ministry of Labor",
        nationality: "Vietnamese",
        phone: "0907654321",
        address: "456 Another Street, Hanoi",
        imageUrl: "https://example.com/image2.jpg",
        sex: "nam",
        positionId: "pos2",
        typeOfEmployeeId: "type2",
        status: "INACTIVE",
    },
];

const RewardEmployee = () => {
    const [content, setContent] = useState("");
    const [prizeMoney, setPrizeMoney] = useState(0);
    const [selectedKind, setSelectedKind] = useState<KindOfBonus | null>(null);
    const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!content.trim()) newErrors.content = "Vui lòng nhập nội dung khen thưởng";
        if (prizeMoney <= 0) newErrors.prizeMoney = "Số tiền thưởng phải lớn hơn 0";
        if (!selectedKind) newErrors.kind = "Vui lòng chọn loại khen thưởng";
        if (selectedEmployees.length === 0) newErrors.employees = "Vui lòng chọn ít nhất một nhân viên";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) {
            toast.error("Vui lòng điền đầy đủ và đúng thông tin!");
            return;
        }

        const bonus: Bonus = {
            id: crypto.randomUUID(),
            content,
            prizeMoney,
            kindOfBonus: [selectedKind!],
            employees: selectedEmployees.map(
                (empId) => dummyEmployees.find((emp) => emp.id === empId)!
            ),
            createAt: new Date(),
            updateAt: new Date(),
        };

        console.log("Khen thưởng mới:", bonus);
        toast.success("Tạo khen thưởng thành công!");
        // Gọi API
    };

    const handleGoBack = () => {
        navigate("/admin/rewards");
    };

    return (
        <div className="w-full h-full flex flex-col items-center bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6">
            {/* Nút Quay lại */}
            <div className="w-full h-full flex justify-start mb-4">
                <Button
                    onClick={handleGoBack}
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-500 text-white hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Quay lại
                </Button>
            </div>

            {/* Form chính */}
            <div className="w-full bg-white rounded-xl shadow-lg p-6 space-y-6">
                <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                    Tạo Khen Thưởng Nhân Viên
                </h2>

                {/* Nội dung khen thưởng */}
                <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                        Nội dung khen thưởng
                    </Label>
                    <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Nhập nội dung khen thưởng..."
                        className={`w-full rounded-lg border ${errors.content ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                    />
                    {errors.content && (
                        <p className="text-red-500 text-xs">{errors.content}</p>
                    )}
                </div>

                {/* Số tiền thưởng */}
                <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                        Số tiền thưởng (VNĐ)
                    </Label>
                    <Input
                        type="number"
                        value={prizeMoney}
                        onChange={(e) => setPrizeMoney(Number(e.target.value))}
                        placeholder="Nhập số tiền thưởng..."
                        className={`w-full rounded-lg border ${errors.prizeMoney ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                    />
                    {errors.prizeMoney && (
                        <p className="text-red-500 text-xs">{errors.prizeMoney}</p>
                    )}
                </div>

                {/* Loại khen thưởng */}
                <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                        Loại khen thưởng
                    </Label>
                    <Select
                        onValueChange={(val) => {
                            const kind = dummyKindOfBonuses.find((k) => k.id === val);
                            if (kind) setSelectedKind(kind);
                        }}
                    >
                        <SelectTrigger
                            className={`w-full rounded-lg border ${errors.kind ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                        >
                            <SelectValue placeholder="Chọn loại khen thưởng" />
                        </SelectTrigger>
                        <SelectContent>
                            {dummyKindOfBonuses.map((kind) => (
                                <SelectItem key={kind.id} value={kind.id}>
                                    {kind.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.kind && (
                        <p className="text-red-500 text-xs">{errors.kind}</p>
                    )}
                </div>

                {/* Nhân viên được khen thưởng */}
                <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">
                        Nhân viên được khen thưởng
                    </Label>
                    <MultiSelect
                        options={dummyEmployees.map((emp) => ({
                            label: `${emp.firstName} ${emp.lastName}`,
                            value: emp.id,
                        }))}
                        selectedValues={selectedEmployees}
                        onChange={setSelectedEmployees}
                        placeholder="Chọn nhân viên..."
                        className={`w-full rounded-lg border ${errors.employees ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                    />
                    {errors.employees && (
                        <p className="text-red-500 text-xs">{errors.employees}</p>
                    )}
                </div>

                {/* Nút điều khiển */}
                <div className="flex justify-end gap-3 pt-4">
                    <Button
                        variant="outline"
                        className="rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                    >
                        Hủy
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 transition-all duration-300"
                    >
                        Lưu
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RewardEmployee;