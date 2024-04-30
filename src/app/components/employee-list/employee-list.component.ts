import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: any = [];

  constructor(private employeeService: EmployeeService) {
  }
  getAllEmps() {
    this.employees = this.employeeService.getAllEmployees();
  }
  getMaleEmps() {
    this.employees = this.employeeService.getMaleEmployees();
  }
  getFemaleEmps() {
    this.employees = this.employeeService.getFemaleEmployees();
  }
}
