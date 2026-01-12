
export type Role = 'USER' | 'ADMIN';

export interface User {
  email: string;
  role: Role;
  balance: number;
  joinedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  files: TaskFile[];
  isFileRequired: boolean;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
}

export interface TaskFile {
  name: string;
  url: string;
  type: string;
}

export interface Submission {
  id: string;
  taskId: string;
  userEmail: string;
  files: TaskFile[];
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
  reward: number;
}

export interface Withdrawal {
  id: string;
  userEmail: string;
  amount: number;
  method: 'Bkash' | 'Nagad' | 'Binance';
  details: string; // Phone or ID
  status: 'PENDING' | 'SUCCESSFUL' | 'REJECTED';
  requestedAt: string;
}

export interface VPN {
  id: string;
  name: string;
  icon: string;
  price: number;
  validity: string;
}

export interface VPNOrder {
  id: string;
  userEmail: string;
  vpnName: string;
  transactionId: string;
  status: 'PENDING' | 'VERIFIED' | 'REJECTED';
  orderedAt: string;
}

export interface Message {
  id: string;
  toEmail: string;
  subject: string;
  content: string;
  isRead: boolean;
  sentAt: string;
}

export interface UIDRecord {
  uid: string;
  status: 'OK';
}
