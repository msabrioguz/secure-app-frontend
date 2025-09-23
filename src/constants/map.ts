import { Role } from '@/enums/role.enum';
import { UserStatus } from '@/enums/userStatus.enum';

// Rol map'i
export const roleMap = {
  [Role.ADMIN]: {
    text: 'Admin',
    class: 'bg-red-500',
  },
  [Role.MODERATOR]: {
    text: 'Moderatör',
    class: 'bg-yellow-500',
  },
  [Role.USER]: {
    text: 'Normal',
    class: 'bg-green-500',
  },
} as const;

export type RoleKey = keyof typeof roleMap;

// Kullanıcı durumu map'i
export const userStatusMap = {
  [UserStatus.PASSIVE]: {
    text: 'Pasif',
    class: 'text-gray-500',
  },
  [UserStatus.EMAIL_CONFIRMATION]: {
    text: 'E-posta Onayı',
    class: 'text-yellow-500',
  },
  [UserStatus.ADMIN_CONFIRMATION]: {
    text: 'Admin Onayı',
    class: 'text-blue-500',
  },
  [UserStatus.GSM_CONFIRMATION]: {
    text: 'GSM Onayı',
    class: 'text-indigo-500',
  },
  [UserStatus.ACTIVE]: {
    text: 'Aktif',
    class: 'text-green-600',
  },
  [UserStatus.BANNED]: {
    text: 'Yasaklı',
    class: 'text-red-600',
  },
} as const;

export type UserStatusKey = keyof typeof userStatusMap;
