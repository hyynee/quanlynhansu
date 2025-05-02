import { Employee } from "./Employee";

export interface Nation {
  id: string;
  name: string;
  employees?: Employee[];
  createdAt: Date;
  updatedAt: Date;
}
