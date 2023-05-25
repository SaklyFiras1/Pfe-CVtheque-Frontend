import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccepteComponent } from './accepte.component';

describe('AccepteComponent', () => {
  let component: AccepteComponent;
  let fixture: ComponentFixture<AccepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccepteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
