import { Component, inject } from '@angular/core';
import { Session } from '../../../core/session';
import { LeaveStore } from '../../../core/leave-store';
import { StatCard } from '../../../features/dashboard/stat-card/stat-card';
import { LeaveList } from '../../../features/leaves/leave-list/leave-list';

@Component({
  selector: 'app-dashboard',
  imports: [StatCard, LeaveList],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly session = inject(Session);
  protected readonly leaves = inject(LeaveStore);

  protected cancelLeave(id: number): void {
    this.leaves.cancel(id);
  }
}
