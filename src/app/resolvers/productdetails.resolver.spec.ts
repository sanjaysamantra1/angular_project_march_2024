import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productdetailsResolver } from './productdetails.resolver';

describe('productdetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productdetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
