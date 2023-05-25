import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofilComponent } from './addprofil.component';

describe('AddprofilComponent', () => {
  let component: AddprofilComponent;
  let fixture: ComponentFixture<AddprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
