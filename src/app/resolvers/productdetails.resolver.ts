import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';

export const productdetailsResolver: ResolveFn<Object> = (route, state) => {
  const id = +route.params['id'];
  return inject(ProductService).getProductDetails(id);
};
