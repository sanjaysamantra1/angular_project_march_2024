import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserlistComponent } from '../userlist/userlist.component';
import { MymodalComponent } from '../mymodal/mymodal.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { PipeComponent } from '../pipe/pipe.component';
import { ParentComponent } from '../parent/parent.component';
import { CommonModule } from '@angular/common';
import { MathComponent } from '../math/math.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { SubjectDemo1Component } from '../subject-demo-1/subject-demo-1.component';
import { Messeage1Component } from '../messeage-1/messeage-1.component';
import { Messeage2Component } from '../messeage-2/messeage-2.component';
import { Messeage3Component } from '../messeage-3/messeage-3.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [
    DatabindingComponent,
    DirectivesComponent,
    UserlistComponent,
    MymodalComponent,
    ProductListComponent,
    PipeComponent,
    ParentComponent,
    CommonModule,
    MathComponent,
    EmployeeListComponent,
    HttpDemo1Component,
    EmployeeCrudComponent,
    ObservableDemo1Component,
    ObservableDemo2Component,
    ObservableDemo3Component,
    SubjectDemo1Component,
    Messeage1Component,
    Messeage2Component,
    Messeage3Component,
    TodolistComponent,
    AddTodoComponent,
    FormDemo1Component,
    FormDemo2Component
  ],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css',
})
export class CenterComponent {
  flag: boolean = true;
}
