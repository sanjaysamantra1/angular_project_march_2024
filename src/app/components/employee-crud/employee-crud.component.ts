import { Component } from '@angular/core';
import { EmployeeCrudService } from '../../services/employee-crud.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
import { Employee, IEmployee } from '../../models/employee';

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  isLoading: boolean = false;
  employees: Employee[] = [];

  constructor(private employeeCrudService: EmployeeCrudService) {

  }
  fetchEmployees() {
    this.isLoading = true;
    this.employeeCrudService.getAllEmployees().subscribe((response: Employee[]) => {
      this.employees = response;
      this.isLoading = false;
      console.log(this.employees)
    })
  }
  deleteEmp(id: any) {
    this.employeeCrudService.deleteEmployee(id).subscribe((response: any) => {
      Swal.fire('Record Deleted', 'Employee deleted successfully', 'success');
      this.fetchEmployees();
    })
  }
  addEmployee(eId: any, name: any, gender: any, sal: any) {
    const payload = { eId, name, gender, sal };
    this.employeeCrudService.createEmployee(payload).subscribe((response: any) => {
      Swal.fire('Record Added', 'Employee Added successfully', 'success');
      this.fetchEmployees();
    })
  }

}
