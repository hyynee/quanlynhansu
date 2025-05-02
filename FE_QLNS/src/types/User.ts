import { Employee } from "./Employee";

export enum ROLE {
  ADMIN = "admin",
  EMPLOYEE = "employee",
}

export interface User {
  id?: string;
  email: string;
  password?: string;
  role: ROLE;
  employee?: Employee;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
}

export interface UserForm extends Omit<User, "employee"> {
  employeeId: string;
}
