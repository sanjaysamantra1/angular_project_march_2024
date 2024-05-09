import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messeage3Component } from './messeage-3.component';

describe('Messeage3Component', () => {
  let component: Messeage3Component;
  let fixture: ComponentFixture<Messeage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messeage3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Messeage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
