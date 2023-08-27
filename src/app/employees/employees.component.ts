import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  constructor(private route: ActivatedRoute) {}
  employees: any[] = [];
  id: number = 0;
  createAccount(name: string, role: string) {
    const employee = {
      id: this.id++,
      name,
      role,
    };
    this.employees.push(employee);
  }
}
