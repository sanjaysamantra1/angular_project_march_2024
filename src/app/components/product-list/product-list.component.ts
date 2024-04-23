import { Component } from '@angular/core';
import * as productsData from './products.json';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule,SearchPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productsArr: any = (productsData as any).default;
  p: any;
  searchText: string = '';
}
