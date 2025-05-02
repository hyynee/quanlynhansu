import { Employee } from "./Employee";

export interface Salary {
  id: string;
  basicSalary: number;
  salary: number;
  workday: number;
  allowance: number;
  description: string;
  employeeId: string;
  employee: Employee[];
  createdAt: Date;
  updatedAt: Date;
}
