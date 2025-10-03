import type { UserLogon } from "@/enums/logonStatus.enum";
import type { IUser } from "./user.interface";

export interface IAuthHistory {
  id: number,
  email: string,
  status: UserLogon,
  ipadress: string,
  userAgent: string,
  createdAt: Date,
  user: IUser
}
