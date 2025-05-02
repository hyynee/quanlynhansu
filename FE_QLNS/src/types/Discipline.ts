import { Employee } from "./Employee";

// Loại kỷ luật
export type KindOfDiscipline = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

// Kỷ luật
export type Discipline = {
  id: string;
  content: string;
  fine: number;
  kindOfDiscipline: KindOfDiscipline[];
  employees: Employee[];
  createdAt: Date;
  updatedAt: Date;
};
