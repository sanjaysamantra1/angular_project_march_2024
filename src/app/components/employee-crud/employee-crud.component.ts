import { Component } from '@angular/core';
import { EmployeeCrudService } from '../../services/employee-crud.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  isLoading: boolean = false;
  employees: any[] = [];

  constructor(private employeeCrudService: EmployeeCrudService) {

  }
  fetchEmployees() {
    this.isLoading = true;
    this.employeeCrudService.getAllEmployees().subscribe((response: any) => {
      this.employees = response;
      this.isLoading = false;
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
