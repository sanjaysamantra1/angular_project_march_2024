import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messeage1Component } from './messeage-1.component';

describe('Messeage1Component', () => {
  let component: Messeage1Component;
  let fixture: ComponentFixture<Messeage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messeage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Messeage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
