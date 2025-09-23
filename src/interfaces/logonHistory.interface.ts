import type { IUser } from "./user.interface";

export interface ILogonHistory {
  id: number,
  email: string,
  success: boolean,
  ipadress: string,
  userAgent: string,
  createdAt: Date,
  user: IUser
}
