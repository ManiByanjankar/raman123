export * from '@rumsan/raman/constants/events';

export const APP = {
  JWT_BEARER: 'JWT',
};

export const allowedDomain = [
  'rumsan.com',
  'rumsan.net',
  'esatya.io',
  'agriclear.io',
  'hamrolifebank.org',
  'rahat.io',
  'gmail.com',
];

export const SUBJECTS = {
  ALL: 'all',
  USER: 'user',
  EXPENSE: 'expense',
  DEPARTMENT: 'department',
  ENTITY: 'entity',
  CATEGORY: 'category',
  STORY: 'story',
  ROLE: 'role',
  PERMISSION: 'permission',
  EMPLOYEE_DETAILS: 'employee_details',
  SALARY_DRAFT: 'salary_draft',
  SALARY: 'salary',
  ACCOUNT: 'account',
  ACCOUNT_TRANSACTION: 'account_transaction',
  CLIENT: 'client',
  PROJECT: 'project',
  INVOICE: 'invoice',
};

export const EMAIL_TEMPLATES = {
  LOGIN: 'login',
  INVOICE: 'invoice',
};

//TODO: should be in @rumsan/sdk
export const ACTIONS = {
  MANAGE: 'manage',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  READ: 'read',
};

export const DRAFT_STATUS = {
  OPEN: 'Open',
  CLOSED: 'Closed',
};
export const SALARY_STATUS = {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
};
