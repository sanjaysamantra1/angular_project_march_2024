import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product: any;

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    console.log( this.activatedRoute)
    this.activatedRoute.data.subscribe((response: any) => {
      this.product = response.product; // to be shown in UI
    });
  }

}
