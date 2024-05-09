import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messeage2Component } from './messeage-2.component';

describe('Messeage2Component', () => {
  let component: Messeage2Component;
  let fixture: ComponentFixture<Messeage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messeage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Messeage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
