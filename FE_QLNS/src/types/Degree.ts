import { Employee } from "@/types/Employee";

export interface Degree {
  id: string;
  degreeName: string;
  employees: Employee[];
  createdAt: Date;
  updatedAt: Date;
}
