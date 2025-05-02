import { Employee } from "./Employee";

// loại khen thưởng
export type KindOfBonus = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

// Khen thưởng
export type Bonus = {
  id: string;
  content: string;
  prizeMoney: number;
  kindOfBonus: KindOfBonus[];
  employees: Employee[];
  createdAt: Date;
  updatedAt: Date;
};
