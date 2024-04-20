import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserlistComponent } from '../userlist/userlist.component';
import { MymodalComponent } from '../mymodal/mymodal.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [
    DatabindingComponent,
    DirectivesComponent,
    UserlistComponent,
    MymodalComponent,
    ProductListComponent
  ],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css',
})
export class CenterComponent {

}
