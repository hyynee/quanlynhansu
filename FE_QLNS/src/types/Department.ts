import { Employee } from "@/types/Employee";
import { Project } from "./Project";
export interface Department {
  id: string;
  departmentName: string;
  description: string;
  phone: string;
  departmentManager?: DepartmentManager;
  employees: Employee[];
  projects: Project[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DepartmentManager {
  id: string;
  departmentId: string;
  department: Department;
  employeeId: string;
  employee: Employee;
}
