"use client";

import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@radix-ui/react-dialog";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./button";

type Option = {
    label: string;
    value: string;
};

interface MultiSelectProps {
    options: Option[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    className?: string; // Thêm prop className
}

export function MultiSelect({
    options,
    selectedValues,
    onChange,
    placeholder = "Chọn...",
    className, // Nhận prop className
}: MultiSelectProps) {
    const toggleValue = (value: string) => {
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter((v) => v !== value));
        } else {
            onChange([...selectedValues, value]);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className={cn("w-full justify-between", className)} // Áp dụng className
                >
                    {selectedValues.length > 0
                        ? `${selectedValues.length} mục đã chọn`
                        : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </DialogTrigger>

            <DialogContent className="w-full p-0">
                <DialogTitle>Chọn mục</DialogTitle>
                <DialogDescription>Chọn một hoặc nhiều mục để tiếp tục</DialogDescription>

                <div className="space-y-2 mt-4">
                    {options.map((option) => (
                        <div key={option.value} className="flex items-center">
                            <button
                                onClick={() => toggleValue(option.value)}
                                className={cn(
                                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                    selectedValues.includes(option.value)
                                        ? "bg-primary text-primary-foreground"
                                        : "opacity-50"
                                )}
                            >
                                {selectedValues.includes(option.value) && (
                                    <Check className="h-4 w-4" />
                                )}
                            </button>
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>

                <DialogClose asChild>
                    <Button variant="outline" className="mt-4">Đóng</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}