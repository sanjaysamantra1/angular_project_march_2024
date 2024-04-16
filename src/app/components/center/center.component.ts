import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [DatabindingComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {

}
