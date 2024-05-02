import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Employee, IEmployee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {
  url = 'http://localhost:4000/employees'

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url, { observe: "body" }).pipe(
      map((res: Employee[]) => {
        return res.map((item: Employee) => {
          return new Employee(item.id, item.firstName, item.lastName, item.sal, item.email);
        });
      })
    );
    // return this.httpClient.get<Employee[]>(this.url);
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
