import { Component, input } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  imports: [],
  selector: 'app-topbar',
  templateUrl: './topbar.html',
  host: {
    class: 'app__header topbar',
    id: 'topbar',
  },
})
export class Topbar {
  appName = input.required<string>();
  navOpen = input.required<boolean>();
  toggleNav = input.required<() => void>();
  currentUser = input.required<Employee>();
}
