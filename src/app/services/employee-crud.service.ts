import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {
  url = 'http://localhost:4000/employees'

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get(this.url);
  }
  createEmployee(empObj: any) {
    return this.httpClient.post(this.url, empObj);
  }
  updateEmployee(empId: any, empObj: any) {
    return this.httpClient.patch(`${this.url}/${empId}`, empObj);
  }
  deleteEmployee(empId: any) {
    return this.httpClient.delete(`${this.url}/${empId}`);
  }
}
