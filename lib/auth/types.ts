export const APP_ROLES = [
  'SUPER_ADMIN',
  'ADMIN',
  'LOAN_OFFICER',
  'UNDERWRITER',
  'CUSTOMER',
] as const;

export type AppRole = (typeof APP_ROLES)[number];
