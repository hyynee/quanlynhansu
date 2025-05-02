import { Department } from "@/types/Department";
import { Employee } from "@/types/Employee";

export type ProjectStatus = "FINISHED" | "UNFINISHED";

export interface Project {
  id: string;
  name: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  employees: Employee[];
  departments: Department[];
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
}
