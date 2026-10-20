import { Component, input, output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  host: { class: 'app__header topbar', role: 'banner' },
})
export class Topbar {
  appName = input.required<string>();
  readonly user = input.required<Employee>();
  readonly initials = input.required<string>();
  readonly navOpen = input(false);
  readonly menuToggle = output<void>();
}
