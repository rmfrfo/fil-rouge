export type LeaveType = 'paid' | 'rtt' | 'sick' | 'unpaid';
export type LeaveStatus = 'pending' | 'in-progress' | 'approved' | 'rejected';

export interface LeaveRequest {
  id: number;
  employeeId: number;
  type: LeaveType;
  startDate: string;
  endDate: string;
  reason?: string;
  status: LeaveStatus;
}

export const LEAVE_TYPE_LABELS: Record<LeaveType, string> = {
  paid: 'Congés payés',
  rtt: 'RTT',
  sick: 'Maladie',
  unpaid: 'Sans solde',
};

export const LEAVE_STATUS_LABELS: Record<LeaveStatus, string> = {
  pending: 'En attente manager',
  'in-progress': 'En attente RH',
  approved: 'Validé',
  rejected: 'Rejeté',
};
