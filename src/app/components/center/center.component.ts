import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserlistComponent } from '../userlist/userlist.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [
    DatabindingComponent,
    DirectivesComponent,
    UserlistComponent
  ],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css',
})
export class CenterComponent {

}
