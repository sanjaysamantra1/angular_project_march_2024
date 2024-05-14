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

  constructor(private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];

      this.httpClient.get(`https://fakestoreapi.com/products/${id}`).subscribe(response => {
        this.product = response;
      });

    })
  }

}
