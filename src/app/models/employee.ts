export interface IEmployee {
    "id": String;
    "firstName": String;
    "lastName": String;
    "sal": Number;
    "email": String;
}


export class Employee {
    public id: string;
    public firstName: string;
    public lastName: string;
    public sal: number;
    public email: string;
  
    constructor(id: string, firstName: string, lastName: string, sal: number,email:string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.sal = sal;
      this.email = email;
    }
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    getYearlySalary(): number {
      return 12 * this.sal;
    }
  }