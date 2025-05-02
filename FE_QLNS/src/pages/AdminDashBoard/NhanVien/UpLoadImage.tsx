import { useRef } from "react";

interface UploadProps {
    value?: string;
    onChange: (value: string) => void;
}

const UpLoadImage = ({ value, onChange }: UploadProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const formData = new FormData();
        formData.append('image', file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            onChange(imageUrl);
        };
        console.log("Image URL: ", file);
    };

    return (
        <div className="relative w-[300px] h-[400px] mx-auto flex items-center justify-center border-2 border-dashed rounded-lg">
            {value ? (
                <>
                    <img
                        src={value}
                        alt="image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                        onClick={() => onChange("")}
                    >
                        ✖
                    </button>
                </>
            ) : (
                <button
                    className="text-gray-500 flex flex-col items-center"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <span className="text-xl">📷</span>
                    <span className="text-sm">Chọn ảnh</span>
                </button>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default UpLoadImage;
