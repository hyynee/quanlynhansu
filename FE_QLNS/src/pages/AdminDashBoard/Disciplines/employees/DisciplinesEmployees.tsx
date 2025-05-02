import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Discipline, KindOfDiscipline } from "@/types/Discipline";
import { Employee } from "@/types/Employee";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const dummyKindOfDisciplines: KindOfDiscipline[] = [
    { id: "1", name: "Đi trễ", createAt: new Date(), updateAt: new Date() },
    { id: "2", name: "Vắng không phép", createAt: new Date(), updateAt: new Date() },
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

const DisciplinesEmployees = () => {
    const [reason, setReason] = useState("");
    const [fineAmount, setFineAmount] = useState(0);
    const [selectedKind, setSelectedKind] = useState<KindOfDiscipline | null>(null);
    const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!reason.trim()) newErrors.reason = "Vui lòng nhập lý do kỷ luật";
        if (fineAmount < 0) newErrors.fineAmount = "Số tiền phạt phải là số dương";
        if (!selectedKind) newErrors.kind = "Vui lòng chọn loại kỷ luật";
        if (selectedEmployees.length === 0) newErrors.employees = "Vui lòng chọn ít nhất một nhân viên";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateForm()) {
            toast.error("Vui lòng điền đầy đủ và đúng thông tin!");
            return;
        }

        const discipline: Discipline = {
            id: crypto.randomUUID(),
            content: reason,
            fine: fineAmount,
            kindOfDiscipline: [selectedKind!],
            employees: selectedEmployees.map(
                (empId) => dummyEmployees.find((emp) => emp.id === empId)!
            ),
            createAt: new Date(),
            updateAt: new Date(),
        };

        console.log("Kỷ luật mới:", discipline);
        toast.success("Tạo kỷ luật thành công!");
        // Gọi API 
    };


    const handleGoBack = () => {
        navigate("/admin/discipline");
    };

    return (
        <div className="w-full h-full flex flex-col items-center bg-gradient-to-br from-red-100 to-red-200 p-4 sm:p-6">
            <div className="w-full h-full flex justify-start mb-4">
                <Button
                    onClick={handleGoBack}
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-600 to-gray-500 text-white hover:from-gray-700 hover:to-gray-600"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Quay lại
                </Button>
            </div>

            <div className="w-full bg-white rounded-xl shadow-lg p-6 space-y-6">
                <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-red-600 to-rose-600 text-transparent bg-clip-text">
                    Tạo Kỷ Luật Nhân Viên
                </h2>

                {/* Lý do kỷ luật */}
                <div className="space-y-2">
                    <Label>Lý do kỷ luật</Label>
                    <Textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Nhập lý do kỷ luật..."
                        className={`w-full rounded-lg border ${errors.reason ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-rose-500`}
                    />
                    {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
                </div>

                {/* Số tiền phạt */}
                <div className="space-y-2">
                    <Label>Số tiền phạt (VNĐ)</Label>
                    <Input
                        type="number"
                        value={fineAmount}
                        onChange={(e) => setFineAmount(Number(e.target.value))}
                        placeholder="Nhập số tiền phạt..."
                        className={`w-full rounded-lg border ${errors.fineAmount ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-rose-500`}
                    />
                    {errors.fineAmount && <p className="text-red-500 text-xs">{errors.fineAmount}</p>}
                </div>

                {/* Loại kỷ luật */}
                <div className="space-y-2">
                    <Label>Loại kỷ luật</Label>
                    <Select
                        onValueChange={(val) => {
                            const kind = dummyKindOfDisciplines.find((k) => k.id === val);
                            if (kind) setSelectedKind(kind);
                        }}
                    >
                        <SelectTrigger className={`w-full rounded-lg border ${errors.kind ? "border-red-500" : "border-gray-300"}`}>
                            <SelectValue placeholder="Chọn loại kỷ luật" />
                        </SelectTrigger>
                        <SelectContent>
                            {dummyKindOfDisciplines.map((kind) => (
                                <SelectItem key={kind.id} value={kind.id}>
                                    {kind.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.kind && <p className="text-red-500 text-xs">{errors.kind}</p>}
                </div>

                {/* Nhân viên bị kỷ luật */}
                <div className="space-y-2">
                    <Label>Nhân viên bị kỷ luật</Label>
                    <MultiSelect
                        options={dummyEmployees.map(emp => ({
                            label: `${emp.firstName} ${emp.lastName}`,
                            value: emp.id
                        }))}
                        selectedValues={selectedEmployees}
                        onChange={setSelectedEmployees}
                        placeholder="Chọn nhân viên..."
                        className={`w-full rounded-lg border ${errors.employees ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.employees && <p className="text-red-500 text-xs">{errors.employees}</p>}
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline" className="rounded-lg border-gray-300 text-gray-700 hover:bg-gray-100" 
                    onClick={() => navigate('/admin/discipline')}
                    >
                        Hủy
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="rounded-lg bg-gradient-to-r from-rose-600 to-red-600 text-white hover:from-rose-700 hover:to-red-700"
                    >
                        Lưu
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DisciplinesEmployees;
