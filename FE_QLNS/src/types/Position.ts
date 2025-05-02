import { Employee } from "@/types/Employee";

export interface Position {
  id: string;
  positionName: string;
  coefficient: number;
  employees: Employee[];
  createdAt: Date;
  updatedAt: Date;
}
