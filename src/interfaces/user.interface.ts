export interface IUser {
  id?: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  role?: string;
  birthDate?: Date;
  phoneNumber?: string;
  profilePic?: string;
  createdAt?: Date;
}
