import type { Role } from "@/enums/role.enum";
import type { UserStatus } from "@/enums/userStatus.enum";

export interface IUser {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: Role;
  status: UserStatus;
  birthDate?: Date;
  phoneNumber?: string;
  profilePic?: string;
  createdAt?: Date;
}
