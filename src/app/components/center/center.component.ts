import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DatabindingComponent,DirectivesComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CenterComponent {

}
