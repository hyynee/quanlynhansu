export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  birthPlace?: string;
  identificationCode: string;
  dateRange: Date;
  issuedBy: string;
  nationality: string;
  nationId: string;
  degree?: string;
  religion?: string;
  phone: string;
  address: string;
  imageUrl: string;
  sex: "nam" | "nu" | "khac";
  specialize?: string;
  experience?: string;
  departmentId?: string;
  positionId: string;
  typeOfEmployeeId: string;
  status?: "ACTIVE" | "INACTIVE";
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
