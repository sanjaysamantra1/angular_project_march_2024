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
    ObservableDemo1Component
  ],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css',
})
export class CenterComponent {
  flag: boolean = true;
}
